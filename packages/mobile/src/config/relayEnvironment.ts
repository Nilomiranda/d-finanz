import axios from 'axios'
import {Environment, Network, RecordSource, Store} from 'relay-runtime';
import AsyncStorage from '@react-native-async-storage/async-storage';

const API_URL = 'http://localhost:8090/graphql'
// const BASE_URL = 'https://062c-2804-14c-bf48-4464-511b-ecde-e026-59d7.ngrok.io'

async function fetchGraphQL(text: string, variables: any) {
  const token = await AsyncStorage.getItem("FINANZ_JWT_TOKEN");
  const response = await axios.post(API_URL, { query: text, variables }, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': token ? `Bearer ${token}` : '',
    }
  })

  return response?.data
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
