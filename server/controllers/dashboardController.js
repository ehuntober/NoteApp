const Note = require('../models/Notes')
const mongoose = require('mongoose')

/**
 * Get /
 * Home page
 */

exports.homepage = async (req,res) =>{
    // async function insertDymmCategoryData() {
    //     try {
    //       await Note.collection.insertMany([{
    //         title: "Simple Note",
    //         body: "a simple note for all of us",
    //         createdAt: "167494994949",
    //       },

    //       {
    //         title: "excessive Note",
    //         body: "all my life i have been grinding on my life",
    //         createdAt: "167494994949",
    //       },
    //       {
    //         title: "black and blue Note",
    //         body: "I design myself, I might get killed",
    //         createdAt: "167494994949",
    //       },

    //       {
    //         title: "Simple Note",
    //         body: "a simple note for all of us",
    //         createdAt: "167494994949",
    //       },
    //       {
    //         title: "Simple Note",
    //         body: "a simple note for all of us",
    //         createdAt: "167494994949",
    //       },
        
    //     ]);
    //       console.log("Data inserted successfully");
    //     } catch (error) {
    //       console.log(error);
    //     }
    //   }
      
    //   insertDymmCategoryData();
      
      

 
    const locals ={
        title: 'Dashboard',
        description: 'Free Notes App'
    }
    let perPage = 12;
    let page = req.query.page || 1

    try{
        Note.aggregate([
            {
                $sort:{
                    createdAt: -1,
                }
            },
            {}
        ])


      const notes = await Note.find({});

      res.render('dashboard/index.ejs',{
        locals,
        notes ,
        layout: '../views/layouts/dashboard'
    });


    }catch(error){
      
    }


}