export class ApplicationError {
  public message: string;
  public httpStatus: number;

  constructor(description: string, httpStatus: number) {
    Error.call(this);
    Error.captureStackTrace(this);
    this.message = description;
    this.httpStatus = httpStatus;
  }
}
