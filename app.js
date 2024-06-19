const express = require("express");
const mongoose = require("mongoose");
const app = express();
const Listing = require("./models/listing.js");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const exp = require("constants");

// DB CONNECTION 
const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

main()
    .then(() => {
        console.log("Connected to DB");
    })
    .catch((err) => {
        console.log(err);
    });
async function main() {
    await mongoose.connect(MONGO_URL);
}

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.engine('ejs', ejsMate);
app.use(express.static(path.join(__dirname,"/public")));





// ROOT ROUTE
app.get("/", (req, res) => {
    res.send("Hi,i am root");
});

// PORT SET
app.listen(8080, () => {
    console.log("Server is listening");
});


// INDEX ROUTE 
app.get("/listings", async (req, res) => {
    const allListing = await Listing.find({});
    res.render("listings/index.ejs", { allListing });
});

// NEW ROUTE
app.get("/listings/new", (req, res) => {
    res.render("listings/new.ejs");
});

//SHOW ROUTE
app.get("/listings/:id", async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id);
    res.render("listings/show.ejs", { listing });
});

// CREATE ROUTE 
app.post("/listings", async (req, res) => {
    // let { title, description, image, price, country, location } = req.body;
    const newListing = new Listing(req.body.listing);
    await newListing.save();
    res.redirect("/listings");
});

// EDIT ROUTE

app.get("/listings/:id/edit", async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id);
    res.render("listings/edit.ejs", { listing });
});


// UPDATE ROUTE 

app.put("/listings/:id", async (req, res) => {
    let { id } = req.params;
    await Listing.findByIdAndUpdate(id, { ...req.body.listing });
    res.redirect(`/listings/${id}`);
});



// DELETE ROUTE 
app.delete("/listings/:id", async (req, res) => {
    let { id } = req.params;
    let deletedListing = await Listing.findByIdAndDelete(id);
    console.log(deletedListing);
    res.redirect("/listings");

});



// testlisting

// app.get("/testlisting", async (req, res) => {
//     let samplelisting = new Listing({
//         title: "My new Villa",
//         discription: "by the beach",
//         price: 1200,
//         location: "calangute,Goa",
//         country: "india",
//     });

//     await samplelisting.save();
//     console.log("sample was save");
//     res.send("successful");
// });

