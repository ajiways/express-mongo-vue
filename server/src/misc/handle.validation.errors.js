export function handleValidationErrors(errors, res) {
   if (!errors.isEmpty()) {
      res.status(400);
      res.json({
         status: 400,
         message: "Ошибка валидации",
         errors: errors.errors,
      });
      return true;
   }
   return false;
}
