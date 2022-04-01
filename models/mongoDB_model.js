import mongoose from 'mongoose'
//import { Collection } from 'mongoose/node_modules/mongodb';
const mongoose = require('mongoose')

const mongoDB_schema = mongoose.Schema;

// db_model_schema = new mongoDB_schema({});
// 	db_model_schema.add(response);

const db_model_schema = new mongoDB_schema({
	bpi: { type: String, default: '' },
	disclamer: { type: String, default: '' },
	time: { type: String, default: '' }
});

//model , Collection,schema
const bitCoinInfo = mongoose.model('bitCoinPriceCollctions', db_model_schema);
//var bitCoinInfo =mongoose.model('bitCoinPriceCollctions',db_model_schema);

model.exports = bitCoinInfo;