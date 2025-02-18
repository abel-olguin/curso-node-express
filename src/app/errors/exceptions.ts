export class NotFoundError extends Error {
  constructor() {
    super('Not Found');
  }
}

export class BadCredentialsError extends Error {
  constructor() {
    super('Bad credentials');
  }
}