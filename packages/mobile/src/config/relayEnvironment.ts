import axios from 'axios'
import {Environment, Network, RecordSource, Store} from 'relay-runtime';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {FINANZ_JWT_TOKEN} from "../constants/asyncStorage";

// const API_URL = 'http://localhost:8090/graphql'
const API_URL = 'https://2753-2804-14c-c4-856a-150f-2131-fbea-c9fd.ngrok.io/graphql'

async function fetchGraphQL(text: string, variables: any) {
  const token = await AsyncStorage.getItem(FINANZ_JWT_TOKEN);
  try {
    const response = await axios.post(API_URL, { query: text, variables }, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token ? `Bearer ${token}` : '',
      }
    })

    return response?.data
  } catch (err) {
    console.log('Request error', err)
  }
}

async function fetchRelay(params: any, variables: any) {
  console.log(`fetching query ${params.name} with ${JSON.stringify(variables)}`);
  return fetchGraphQL(params.text, variables);
}

// Export a singleton instance of Relay Environment configured with our network function:
export default new Environment({
  network: Network.create(fetchRelay),
  store: new Store(new RecordSource()),
});
