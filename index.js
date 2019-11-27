const axios = require("axios");
const cryptoJS = require("crypto-js");

const { publicKey, privateKey } = require("./config/config.json");

const ts = Date.now();

const params = {
  apikey: publicKey,
  ts,
  hash: cryptoJS.MD5(ts + privateKey + publicKey).toString()
};

const fetchAPI = async (url, params) => {
  try {
    const result = await axios.get(url, { params });
    const { data } = result;
    return data
  } catch (error) {
    console.log(error);
  }
};

fetchAPI("http://gateway.marvel.com/v1/public/characters", params);
