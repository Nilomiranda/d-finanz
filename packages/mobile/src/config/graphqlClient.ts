import {createClient} from 'urql';

export const createGraphqlClient = (token?: string | null) => {
  return createClient({
    url: 'http://localhost:8090/graphql',
    fetchOptions: () => {
      return {
        headers: {
          authorization: token ? `Bearer ${token}` : ''
        }
      }
    }
  })
}
