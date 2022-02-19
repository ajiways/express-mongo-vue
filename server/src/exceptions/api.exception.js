export class ApiException extends Error {
   constructor(message, ...params) {
      super(...params);

      if (Error.captureStackTrace) {
         Error.captureStackTrace(this, ApiException);
      }

      this.name = "ApiException";
      this.message = message;
   }
}
