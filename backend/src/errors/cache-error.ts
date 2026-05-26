export class CacheError extends Error {
  statusCode: number | undefined;

  constructor(message = 'Cache error') {
    super(message);
    this.message = message;

    Object.setPrototypeOf(this, CacheError.prototype);
  }

  serializeError() {
    return { message: this.message };
  }
}
