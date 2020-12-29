import axios, { AxiosPromise, AxiosResponse } from 'axios';
import client from '../client';

export const search = (searchTerm: string) => {
  const { AWS_PROXY_ENDPOINT_DEV, CLIENT_ID, ACCESS_TOKEN } = client;
  const data = `fields id,name,first_release_date;search "${searchTerm}";limit 10;`;
  // const url = `${AWS_PROXY_ENDPOINT_DEV}/v4/games`;
  const url = 'https://cors-anywhere.herokuapp.com/https://api.igdb.com/v4/games/';
  const headers = {
    'Content-Type': 'application/json',
    'Client-ID': CLIENT_ID,
    'Authorization': `Bearer ${ACCESS_TOKEN}`,
    'X-Requested-With': 'XMLHttpRequest'
  } 

  axios.post(url, data, {headers})
    .then((response) => {
      console.log('Response: ', response)
    })
    .catch((e) => {
      console.log('Axios Error: ', e)
    })
}
