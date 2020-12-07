import('dotenv').config();

const config = {
  uri: process.env.URI_API,
  token: process.env.TOKEN,
};

export default config;
