const db = require("../db");

// Create a model from the schema
const Ad = db.model("Ad", {  
   ServiceRequest: { type: String },
   Desc:       { type: String, required: true },
   DatePosted: { type: String, default: Date.now },  
   JobCategory: { type: String },
   DateNeeded: { type: Date, default: Date.now }, 
   TimeSlot: { type: String },
   Email:  { type: String, required: true },
   City:  { type: String },
   ZipCode:  { type: String },
});

module.exports = Ad;