export default class HandlerNotFoundError extends Error {
  params: string[];
  constructor(handlerName: string, params: any[]);
}
