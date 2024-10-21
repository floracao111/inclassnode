//Importing Express Module

import express from 'express'
console.log("this is a change");
// creating an instance of an express application
const app = express();
//defining port variable to listen on
const port = process.env.PORT || 3001

const fruits = {
    banana: {
        color: "yellow"
    }, 
    orange: {
        color: "orange"
    }, 
    apple: {
        color: "green"
    }, 
    pear: {
        color: "green"
    }
}
//setting up a response for the root path of our application 

//when i get a request to my application send back this information  
app.get('/fruit/:fruit', (req, res) => {
   console.log(req.params.fruit.substring(1))

   for (const fruit in fruits){
    if (fruit == req.params.fruit.substring(1)){
        console.log(`the color of this fruit is ${fruits[fruit].color}`)
        res.send(`the color of this fruit is ${fruits[fruit].color}`)
    }
   }
   
   
   
   
    // console.log(req.query)
    // const requestedColor = req.query.color;
    // const matchingFruits = [];

    // for (const fruit in fruits){
    //     if(fruits[fruit].color == requestedColor){
    //         matchingFruits.push(fruit);
    //     }
    // }
    // console.log(matchingFruits)

})
//listening on port 3001 for requests 
app.listen(port, () =>{
    console.log(`My app is listening on port${port}`)
})