// Your task is to create 1 rest api using the following APIs
// https://api.coindesk.com/v1/bpi/historical/close.json?start=2013-09-01&end=2013-09-05&curren
// cy=eur
// https://api.coindesk.com/v1/bpi/currentprice/eur.json

// fetch('http://example.com/movies.json')
//   .then(response => response.json())
//   .then(data => console.log(data));

import fetch from "node-fetch";
import express from 'express'
//const express = require('express');
const route = express();
//const fetch = require('node-fetch');
route.use(express.json())

const data =[{},{}]




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



route.get('/getBitcoinInfo/currentPrice/:currency_type',async(req,res)=>{

	const url='https://api.coindesk.com/v1/bpi/currentprice/eur.json/'

	const options ={
		'method': 'GET'
	} 
	const response = await fetch(url,options).then(url,options)
	.then(res => res.json())
	.catch(e => {
		console.error({
		'massages':'Data ashe naaaaa!!!',
		error: e,
	});
});

//const currency_array 
const currency_code = req.params.currency_type

const data_set = Object.values(response['bpi']);


let results = [];
for (let key in data_set) {
	console.log(data_set[key])
	if (data_set[key].code==='USD'){
		results.push(data_set[key]);
	}
}




console.log(results);
//const some =data.keys(String(req.params.currency_type))
//object theke aaray bair korte hobe

//console.log(data_set);
res.json(results)
//console.log(data);

//res.json(data);


//  const  bicoin_price = data.find(r => r.bpi===String(req.params.currency_type));

// if (!bicoin_price) res.status(404).send('Not Found')
// 	console.log("RESPONSE:", bicoin_price);
// 	res.json(bicoin_price);


// console.log("RESPONSE:", response.bpi.USD);
// res.json(response.bpi.USD);





	 //res.send("hello World");
});
const port = process.env.PORT || 3000;
route.listen(port, ()=> console.log(`Listening on port ${port}`))