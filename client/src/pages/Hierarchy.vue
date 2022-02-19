<template>
   <div>
      <div class="header">
         <div
            v-if="citySelected"
            @click="backToSelect"
            class="header__back header__back-pointer"
         >
            К выбору города
         </div>
         <div v-else class="header__back">Выбор города</div>
      </div>
      <div class="container">
         <div class="content">
            <div class="menu" v-if="citySelected">
               <div class="checkbox__box">
                  <div class="checkbox__item">
                     <label for="showDistrict">Показать район?</label>
                     <input
                        @input="hideRowItems"
                        type="checkbox"
                        id="showDistrict"
                        value="district"
                        checked
                     />
                  </div>
                  <div class="checkbox__item">
                     <label for="showStreet">Показать улицу?</label>
                     <input
                        @input="hideRowItems"
                        type="checkbox"
                        id="showStreet"
                        value="street"
                        checked
                     />
                  </div>
                  <div class="checkbox__item">
                     <label for="showName">Показать имя?</label>
                     <input
                        @input="hideRowItems"
                        type="checkbox"
                        id="showName"
                        value="name"
                        checked
                     />
                  </div>
                  <div class="checkbox__item">
                     <label for="showAddress">Показать адрес?</label>
                     <input
                        @input="hideRowItems"
                        type="checkbox"
                        id="showAddress"
                        value="address"
                        checked
                     />
                  </div>
               </div>
               <div class="hierarchy">
                  <div class="hierarchy__item">
                     {{ city.name }}
                  </div>
                  <div
                     district
                     class="district__box"
                     v-for="district in data"
                     :key="district._id"
                  >
                     <div
                        class="hierarchy__item hierarchy__item-district district"
                     >
                        {{ district.name }} рн.
                     </div>
                     <div
                        v-for="street in district.streets"
                        :key="street._id"
                        class="street__box"
                     >
                        <div
                           class="hierarchy__item hierarchy__item-street street"
                        >
                           {{ street.name }} ул.
                        </div>

                        <div
                           v-for="citizen in street.citizens"
                           :key="citizen._id"
                        >
                           <div
                              class="hierarchy__item hierarchy__item-citizen tooltip name"
                           >
                              {{ citizen.name }}
                              <span class="tooltiptext">
                                 Г. {{ city.name }}, Количество жителей:
                                 {{ city.data }}
                              </span>
                           </div>
                           <div
                              class="hierarchy__item hierarchy__item-citizen address"
                           >
                              {{ citizen.house_number }} кв/д
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div class="content__empty" v-else>
               <div class="content__message">Город не выбран</div>
               <div class="select__wrapper">
                  <select
                     @change="selectCity"
                     class="content__select"
                     name="city"
                     id="city"
                  >
                     <option selected>Выбрать город</option>
                     <option v-for="select in selects" :key="select._id">
                        {{ select.name }}
                     </option>
                  </select>
               </div>
            </div>
         </div>
      </div>
   </div>
</template>

<script>
import axios from "axios";

export default {
   data() {
      return {
         citySelected: false,
         city: {},
         data: [],
         selects: [],
         rowsVisibility: {
            district: true,
            street: true,
            name: true,
            address: true,
         },
      };
   },
   methods: {
      async getCities() {
         const result = await axios.get("http://localhost:5000/city/all");
         this.selects = result.data.cities;
      },
      async selectCity(event) {
         this.citySelected = true;

         const result = await axios
            .post("http://localhost:5000/city/all/info", {
               cityname: event.target.value,
            })
            .then((resp) => resp.data)
            .catch((e) => console.error(e.response.data.message));

         this.renderData(result);
      },
      renderData(data) {
         const city = data.city;
         const districtsDataArr = data.districts;
         const streetsDataArr = data.streets;
         const citizensDataArr = data.citizens;

         this.city = city;

         districtsDataArr.forEach((district) => {
            this.data.push(district);
         });

         // Ну вот это совсем ужас )))

         streetsDataArr.forEach((districtInfo) => {
            districtInfo.streets.forEach((street) => {
               this.data.forEach((district) => {
                  if (district._id === street.district_id) {
                     district.streets.push(street);
                     citizensDataArr.forEach((citizenArr) => {
                        citizenArr.forEach((citizensInfo) => {
                           citizensInfo.citizens.forEach((citizen) => {
                              district.streets.forEach((itemStreet) => {
                                 if (
                                    itemStreet.name === citizen.street_name &&
                                    district.name === citizen.district_name
                                 ) {
                                    itemStreet.citizens = [];
                                    itemStreet.citizens.push(citizen);
                                 }
                              });
                           });
                        });
                     });
                  }
               });
            });
         });
      },

      hideRowItems(event) {
         const hideAll = (row) => {
            row.forEach((item) => item.classList.add("hide"));
         };

         const showAll = (row) => {
            row.forEach((item) => item.classList.remove("hide"));
         };

         const checkVisibility = (name, row) => {
            if (!this.rowsVisibility[name]) {
               showAll(row);
               this.rowsVisibility[name] = true;
               return;
            } else if (this.rowsVisibility[name]) {
               hideAll(row);
               this.rowsVisibility[name] = false;
               return;
            }
         };

         const name = event.target.value;
         const row = document.querySelectorAll(`.${event.target.value}`);

         checkVisibility(name, row);
         this.checkNothingSelected();
      },
      backToSelect() {
         this.selects = [];
         this.data = [];
         this.citySelected = false;
         this.getCities();
      },
      checkNothingSelected() {
         if (
            !this.rowsVisibility.district &&
            !this.rowsVisibility.street &&
            !this.rowsVisibility.name &&
            !this.rowsVisibility.address
         ) {
            this.rowsVisibility.district = true;
            this.rowsVisibility.street = true;
            this.rowsVisibility.name = true;
            this.rowsVisibility.address = true;
            this.backToSelect();
            return;
         } else {
            return;
         }
      },
   },
   mounted() {
      this.getCities();
   },
};
</script>

<style scoped>
.container {
   width: 1200px;
   margin: 0 auto;
}

.header {
   width: 100%;
   height: 60px;
   background-color: rgb(71, 71, 71);
   display: flex;
   justify-content: center;
}

.content {
   width: 100%;
   height: 100%;
   background: teal;
}

.checkbox__box {
   height: 15vh;
   border: 1px solid black;
   display: flex;
   align-items: center;
   justify-content: center;
}

.checkbox__item {
   width: 100%;
   height: 100%;
   font-size: 22px;
   display: flex;
   align-items: center;
   justify-content: center;
}

.checkbox__item label {
   padding: 20px;
   cursor: pointer;
   border: 1px solid black;
}

.hierarchy {
   width: 100%;
   height: 100%;
   display: flex;
   flex-direction: column;
   align-items: center;
}

.hierarchy__item {
   width: 100%;
   height: 80px;
   border: 10px solid rgb(7, 31, 7);
   background: rgb(211, 211, 211);
   font-size: 32px;
   font-weight: bold;
   text-align: center;
   margin-bottom: 10px;
}

.hierarchy__item-district {
   background-color: rgb(66, 134, 143);
}

.hierarchy__item-citizen {
   width: 400px;
   background-color: rgb(62, 122, 72);
   margin-bottom: 30px;
   cursor: help;
}

.hierarchy__item-street {
   width: 800px;
   background-color: rgb(134, 94, 94);
   margin-bottom: 30px;
}

.content__message {
   font-size: 60px;
   color: white;
}

.content__empty {
   height: 100%;
   display: flex;
   justify-content: center;
}

.select__wrapper {
   padding: 15px;
}

.content__select {
   width: 200px;
   height: 40px;
   font-size: 24px;
}

.district__box {
   display: flex;
   flex-direction: column;
   margin-bottom: 30px;
}

.street__box {
   display: flex;
   flex-direction: column;
   align-items: center;
}

.hide {
   display: none !important;
}

.header__back {
   width: 300px;
   height: 100%;
   color: white;
   background-color: black;
   font-size: 32px;
   text-align: center;
   border: 1px solid rgb(99, 99, 99);
}

.header__back-pointer {
   cursor: pointer;
}

.tooltip {
   position: relative;
   display: inline-block;
}

.tooltip .tooltiptext {
   visibility: hidden;
   width: 320px;
   background-color: black;
   color: #fff;
   text-align: center;
   border-radius: 6px;
   padding: 5px 0;
   position: absolute;
   z-index: 1;
}

.tooltip:hover .tooltiptext {
   visibility: visible;
}
</style>
