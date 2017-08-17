// app.js

// [LOAD PACKAGES]
var express     = require('express');
var app         = express();
var bodyParser  = require('body-parser'); // To parse by json type
var mongoose    = require('mongoose');
var formidable = require('formidable'); // To bring Form tag data
var fs = require('fs-extra'); // To copy file or directory
var path = require('path'); // Import path module(packaged with Node.js)
var mongodb = require('mongodb');
var mongojs = require('mongojs');

// CONNECT TO MONGODB SERVER
mongoose.connect('mongodb://localhost/facebook');
mongoose.Promise = global.Promise;
var db = mongoose.connection;

db.on('error', console.error.bind(console,'connection error:'));
db.once('open', function callback(){
    // CONNECTED TO MONGODB SERVER
    console.log("Connected to mongod server");
});
// When disconnected, connect in 5 seconds again
db.on('disconnected',function(){
  console.log("Server is disconnected. Connect in 5 seconds again");
  setInterval(connectDB,5000);
});
// DEFINE MODEL
var Book = require('./models/book');

var book = new Book({
profile: {data:1010, contentsType:'profile'},
username : 'Taeyang',
headline : 'Fire Emergency',
location : 'Tikkurila',
image : {data:1010101, contentsType:'picture' },
description : 'Building in London got big fire',
});

var showPage = function(page){
  return db.books.find();
}

book.save(function(err){
  if(err)
  console.log('error ocurr='+err);
});

// [CONFIGURE APP TO USE bodyParser]
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); // Parsing part

// APIs for save data to database

app.get('/',function(req,res){
    res.render(path.join(__dirname, 'views/index.ejs'));
  //res.render('routes/index'); // show index.ejs file
});

app.post('/api/books', function(req, res){
    var book = new Book();
    book.profile = req.body.profile;
    book.username = req.body.username;
    //book.published_date = new Date(req.body.published_date);
    book.headline = req.body.headline;
    book.location = req.body.location;
    book.image = req.body.image;
    book.description = req.body.description;

    book.save(function(err){
        if(err){
            console.error(err);
            res.json({result: 0});
            return;
        }
        res.json({result: 1});
    });

});

// GET ALL BOOKS , API searching all data
app.get('/api/books', function(req,res){
    Book.find(function(err, books){
        if(err) return res.status(500).send({error: 'database failure'});
        res.json(books);
    });
    //showPage();
});


// GET SINGLE BOOK , find ID to print out book documnet from database
app.get('/api/books/:book_id', function(req, res){
    Book.findOne({_id: req.params.book_id}, function(err, book){
        if(err) return res.status(500).json({error: err});
        if(!book) return res.status(404).json({error: 'book not found'});
        res.json(book);
    })
});

// GET BOOKS BY username: , find user name and print it
app.get('/api/books/username/:username', function(req, res){
    Book.find({username: req.params.username}, {_id: 0, username:1,published_date: 1},  function(err, books){
        if(err) return res.status(500).json({error: err});
        if(books.length === 0) return res.status(404).json({error: 'book not found'});
        res.json(books);
    })
});

// UPDATE THE BOOK , find book id and correct documnet
app.put('/api/books/:book_id', function(req, res){
    Book.findById(req.params.book_id, function(err, book){
        if(err) return res.status(500).json({ error: 'database failure' });
        if(!book) return res.status(404).json({ error: 'book not found' });

        if(req.body.profile) book.profile = req.body.profile;
        if(req.body.username) book.username = req.body.username;
        //if(req.body.published_date) book.published_date = req.body.published_date;
        if(req.body.headline) book.headline = req.body.headline;
        if(req.body.location) book.location = req.body.location;
        if(req.body.image) book.image = req.body.image;
        if(req.body.description) book.description = req.body.description;
        book.save(function(err){
            if(err) res.status(500).json({error: 'failed to update'});
            res.json({message: 'book updated'});
        });
    });
});

// DELETE BOOK, find book id and delete it
app.delete('/api/books/:book_id', function(req, res){
    Book.remove({ _id: req.params.book_id }, function(err, output){
        if(err) return res.status(500).json({ error: "database failure" });
        /* ( SINCE DELETE OPERATION IS IDEMPOTENT, NO NEED TO SPECIFY )
        if(!output.result.n) return res.status(404).json({ error: "book not found" });
        res.json({ message: "book deleted" });
        */
        res.status(204).end();
    })
});

// [CONFIGURE SERVER PORT]
var port = process.env.PORT || 8080;

// [CONFIGURE ROUTER]
var router = require('./routes')(app,Book);

// [RUN SERVER]
var server = app.listen(port, function(){
 console.log("Express server has started on port " + port)
});
