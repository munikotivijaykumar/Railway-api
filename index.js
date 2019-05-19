const express = require("express")
const app =express();

const request = require('request');
const bodypaser = require("body-parser");
const axios = require('axios');
const port = process.env.PORT || 5000;
app.set("view engine","ejs");

app.use(bodypaser.urlencoded({extended:false}));
app.use(bodypaser.json());

app.get("/",(req,res)=>{

    res.render("index")
});

app.get("/trains",(req,res)=>{

   

axios.get('https://api.railwayapi.com/v2/between/source/vskp/dest/bza/date/25-05-2019/apikey/c9r9oj4pfa/')
  .then(response => {
   
   // console.log(response.data);

    var result = response.data;
    
    for(var i in result.trains){

      if(result.trains[i].from_station.code=="VSKP" && result.trains[i].to_station.code =="BZA" ){

    console.log(".........................................")
     console.log(result.trains[i].from_station.name);
     console.log(result.trains[i].to_station.name);
     console.log(result.trains[i].src_departure_time);
     console.log(result.trains[i].dest_arrival_time);
     console.log(result.trains[i].name);
     console.log(result.trains[i].number);
    console.log(result.trains[i].travel_time);

      }
    
    }

  })
  .catch(error => {
    console.log(error);
  });
})

app.listen(port , console.log("server is running........."));