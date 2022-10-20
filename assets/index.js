const router = require('express').Router();
const { Pet } = require('../models');
const withAuth = require('../utils/auth');

//write the html file
const fs = require("fs");


const petName = [];

function init() {
    buildHtml();
    addPet();
};

let addlInfotxt = "";

// Create an array of questions for user input 
function addPet() {

    router.get('/', withAuth, async (req, res) => {
        try {
            //get  pet name and exclude id/filename
            petName = await Pet.findAll({
                attributes: { exclude: ['id, filename'] },
                order: [['name']],
            })

            // Write to html file 
            for (let i = 0; i < petName.length; i++) {
                addHtml();
                // addHtml(addPet)
            };
} catch (err) {
    res.status(500).json(err);
  }
}
);
};

//build html header
function buildHtml() {
    const html = `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <script src="https://cdn.tailwindcss.com"></script>
        <link rel="stylesheet" href="https://unpkg.com/flowbite@1.5.2/dist/flowbite.min.css" />
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Amatic+SC&display=swap" rel="stylesheet">
        <script src="https://kit.fontawesome.com/fb81218133.js" crossorigin="anonymous"></script>
        <link rel="stylesheet" href="./public/style.css">
        <title>Fetch-a-pet!</title>
    </head>
    <!-- Header -->
    
    <body>
        <div class="header-container border border-neutral-900 mx-auto bg-green-100">
            <header>
                <div class="banner flex justify-right text-4xl italic h-0 my-4 mx-3 font-serif"><i><img
                            src="./public/images/dogcat.jpg" alt="a dog and a cat" /></i> Fetch-a-Pet <i>           
                </div>
                <div class="flex justify-center text-black-700 self-center font-serif">
                    <i>Start the Journey to friendship!</i>
                </div>
                <div class="flex justify-end">
                    <button
                        class="search-btn rounded-sm border-blue-700 border text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-blue-300 rounded-lg text-sm px-5 py-2.5 text-center mb-2 rounded-lg hover:bg-blue-800 my-8 mx-8 right-justify"><i
                            class=""> Login</i>
                    </button>
                    <button
                        class="search-btn rounded-sm border-blue-700 border text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-blue-300 rounded-lg text-sm px-5 py-2.5 text-center mb-2 rounded-lg hover:bg-blue-800 my-8 mx-3"><i
                            class=""> Sign Up!</i>
                    </button>
                </div>
                </i>
                <div class="flex justify-left font-bold text-purple-800 italic">Find your new best friend!</div>
    
            </header>
    
        </div>
        <!-- Main container -->
        <main>
            <div class=" grid grid-cols-4 gap-2 flex-row pr-2 p-3">`;

    fs.writeFile("../../index.html", html, function (err) {
        if (err) {
            console.log(err);
        }
    });
    console.log("Building the Html header");
}

//append to html
function addHtml(addPet) {
    const petName = addPet.getName();

    bodydata =
        `<div class=" flex-row rounded-md h-50 mx-3 my-5 right-5">
    <img src="./public/images/${petName}.jpg" alt="a corgi" class="rounded-md"/>
        </div>`;

    fs.appendFile("../../index.html", bodydata, function (err) {
        if (err) {
            console.log(err);
        }
    });

    console.log("Appending to Html:");
};

//write end of html
function endHtml() {
    const html = ` 
    </div>
    </div>
    </div>
</main>
<script src="./assets/script/script.js"></script>
<script src="https://unpkg.com/flowbite@1.5.2/dist/flowbite.js"></script>
<script src="./assets/script/googleMaps.js"></script>
<script async
    src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBDn0xjfckqD40txkDANthif7G5BFhGir4&libraries=places&callback=initMap&type=park"></script>

</body>

</html>`;

    fs.appendFile("../../index.html", html, function (err) {
        if (err) {
            console.log(err);
        };
    });

    console.log ("End writing Html");
};

init();