/**
 * Represents an error that occurred due to a invalid configuration of the application.
 */
export class ConfigurationError extends Error {
  constructor(public message: string) {
    super(message);
    this.name = 'ConfigurationError'
  }
}