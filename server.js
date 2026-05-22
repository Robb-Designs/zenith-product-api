//DEPENDENCIES---------------------------------------------------------------------------
const express = require('express');
const app = express();

//env variables
require('dotenv').config();
const PORT = process.env.PORT;
const MONGO_URI = process.env.MONGO_URI;

//Setting Dns for MongoDB Atla configs
const dns = require('dns');
dns.setServers(['8.8.8.8', '8.8.4.4']);


//MIDDLEWARE---------------------------------------------------------------------------




//ROUTES---------------------------------------------------------------------------




//PORT---------------------------------------------------------------------------
