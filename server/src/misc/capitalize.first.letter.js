export function capitalizeFirstLetter(string) {
   const res = string.toLowerCase();
   return res.charAt(0).toUpperCase() + res.slice(1);
}
