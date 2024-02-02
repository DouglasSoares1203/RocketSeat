class AppError {
  message;
  statusCode;

  constructor(message, statusCode = 400) {// constructor instância a class AppError
    this.message = message;
    this.statusCode = statusCode;
  }
}

module.exports = AppError;
