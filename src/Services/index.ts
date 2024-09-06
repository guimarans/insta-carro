import axios from 'axios';
import axiosRetry from 'axios-retry';
import { md5 } from 'js-md5';

const timestamp = new Date().getTime();
const privateKey = '650a58318050a3a56e95d9aad641740e629a5f75';
const publicKey = 'fe360ee4d00ae9bd9c415207d80ac09f';
const hash = md5(timestamp + privateKey + publicKey);

export const api = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL_API,
  params: {
    apikey: publicKey,
    hash,
    ts: timestamp,
  },
});

axiosRetry(api, { retryDelay: axiosRetry.exponentialDelay, retries: 2 });