const express = require("express");
const { send } = require("express/lib/response");
const app = express();
const port = 8080; // default port to listen
let users = [
    {
        id:0,
        name: "Elvin",
        surname: "Aliyev",
        age: 21
    },
    {
        id:1,
        name: 'Gazanfer',
        surname: 'Gazanferli',
        age: 25
    },
    {
        id:2,
        name: "Aqil",
        surname: "Atakishiyev",
        age: 23
    },
    {
        id:3,
        name: 'Vusal',
        surname: 'Mammadli',
        age: 21
    },
    {
        id:4,
        name: "Ülvi",
        surname: "Aliyev",
        age: 19
    },
    {
        id:5,
        name: 'Ömər',
        surname: 'Bashirzada',
        age: 21
    }
]
// define a route handler for the default home page
app.get("/", (req, res) => {
    res.send("Hello world!");
});
app.get('/card', function (req, res) {
    res.send('You send request for card route!');
});
app.get('/client', function (req, res) {
    res.send('You send request for client route!');
});
app.get('/users', function (req, res) {
    res.send(
        users.map((user) => {
            return user
        })
    );
});

 
    app.get(`/users/:id`, function (req, res) {
     
       const a= users.find(item=>item.id==req.params.id)
        if(a){
            res.send(a)
        }else{
            res.send('bele istifadeci yoxdur')
        }

    });
    




app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);
});