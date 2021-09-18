import {createClient} from 'urql';

const BASE_URL = 'https://062c-2804-14c-bf48-4464-511b-ecde-e026-59d7.ngrok.io'

export const createGraphqlClient = (token?: string | null) => {
  return createClient({
    url: `${BASE_URL}/graphql`,
    fetchOptions: () => {
      return {
        headers: {
          authorization: token ? `Bearer ${token}` : ''
        }
      }
    }
  })
}
