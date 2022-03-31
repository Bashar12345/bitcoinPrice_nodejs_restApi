// Your task is to create 1 rest api using the following APIs
// https://api.coindesk.com/v1/bpi/historical/close.json?start=2013-09-01&end=2013-09-05&curren
// cy=eur
// https://api.coindesk.com/v1/bpi/currentprice/eur.json

import fetch from "node-fetch";
import express from 'express'
//const express = require('express');
const route = express();
//const fetch = require('node-fetch');
route.use(express.json())

const data =[{},{}]

// fetch('http://example.com/movies.json')
//   .then(response => response.json())
//   .then(data => console.log(data));


route.get('/getBitcoinInfo',async(req,res)=>{


	const url='https://api.coindesk.com/v1/bpi/historical/close.json?start=2013-09-01&end=2013-09-05&currency=eur'

	const options ={
		'method': 'GET'
	} 
	const response = await fetch(url,options).then(url,options)
	.then(res => res.json())
	.catch(e => {
		console.error({
		'massages':'vhul hoise',
		error: e,
	});
});
console.log("RESPONSE:", response);
res.json(response);





	// res.send("hello World");
});
route.get('/getBitcoinInfo/currentprice',async(req,res)=>{


	const url='https://api.coindesk.com/v1/bpi/currentprice/eur.json/:currency_type:'

	const options ={
		'method': 'GET'
	} 
	const response = await fetch(url,options).then(url,options)
	.then(res => res.json())
	.catch(e => {
		console.error({
		'massages':'vhul hoise',
		error: e,
	});
});
console.log("RESPONSE:", response.bpi.USD);
res.json(response.bpi.USD);





	// res.send("hello World");
});
const port = process.env.PORT || 3000;
route.listen(port, ()=> console.log(`Listening on port ${port}`))

