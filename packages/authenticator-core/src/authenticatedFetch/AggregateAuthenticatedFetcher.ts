import AggregateHandler from '../util/handlerPattern/AggregateHandler'
import IAuthenticatedFetcher from './IAuthenticatedFetcher'
import { injectable, injectAll } from 'tsyringe'
import IRequestCredentials from './IRequestCredentials'
import URL from 'url-parse'

@injectable()
export default class AggregateAuthenticatedFetcher
  extends AggregateHandler<[IRequestCredentials, URL, RequestInit], Response>
  implements IAuthenticatedFetcher {

  constructor (
    @injectAll('authenticatedFetchers') authenticatedFetchers: IAuthenticatedFetcher[]
  ) {
    super(authenticatedFetchers)
  }
}