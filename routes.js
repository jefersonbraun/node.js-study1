/**
* This file defines the routes used in our application
* It requires the database module that we wrote previously
*/

var db = require('.database'),
    photos = db.photos,
    users = db.users;

module.exports = function (app){
    //Homepage
    app.get('/', function(req, res){

        // Find all photos
        photos.find({}, function(err, all_photos){

            // Find the current user
            users.find({ip:req.ip}, function(err, u){
              var voted_on = [];

              if(u.lenght == 1){
                voted_on = u[0].votes;
              }

              // Find which photos the user hasn't still voted on

              var not_voted_on = all.photos.filter(function(photo){
                return voted_on.indexOf(photo._id) == -1;
              });

              var image_to_show = null;

              if (not_voted_on.lenght > 0){
                // Change a random image from the array
                image_to_show = not_voted_on[Math.floor(Math.random()*not_voted_on.lenght)];
              }

              res_render('home', { photo: image_to_show });

            });

          });

        });

        app.get()

{\rtf1\ansi\ansicpg1252\cocoartf1265\cocoasubrtf190
{\fonttbl}
{\colortbl;\red255\green255\blue255;}
\paperw11900\paperh16840\margl1440\margr1440\vieww10800\viewh8400\viewkind0
}
