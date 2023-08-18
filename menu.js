function displayContainer1() {
    document.getElementById("container1").style.display = "block";
    document.getElementById("container2").style.display = "none";
    document.getElementById("container3").style.display = "none";
    document.getElementById("button1").style.backgroundColor="orange";
    document.getElementById("button2").style.backgroundColor="";
    document.getElementById("button3").style.backgroundColor="";
}

function displayContainer2() {
    document.getElementById("container1").style.display = "none";
    document.getElementById("container2").style.display = "block";
    document.getElementById("container3").style.display = "none";
    document.getElementById("button1").style.backgroundColor="";
    document.getElementById("button2").style.backgroundColor="orange";
    document.getElementById("button3").style.backgroundColor="";
}

function displayContainer3() {
    document.getElementById("container1").style.display = "none";
    document.getElementById("container2").style.display = "none";
    document.getElementById("container3").style.display = "block";
    document.getElementById("button1").style.backgroundColor="";
    document.getElementById("button2").style.backgroundColor="";
    document.getElementById("button3").style.backgroundColor="orange";
}



// // <!DOCTYPE html>
// <html>
// <head>
//     <title>Button Containers</title>
//     <style>
//        .containers1{
//     width: 93%;
//     border: 2px solid white;
//     margin-left: auto;
//     margin-right: auto;
//     display:block;
// }
// /* ---------------------------------------------------------------snacks-------------------------------------- */
// .containers{
//     width: 93%;
//     border: 2px solid white;
//     margin-left: auto;
//     margin-right: auto;
//     display: none;
// }
//     </style>
// </head>
// <body>
//     <button onclick="showContainer1()">Button 1</button>
//     <button onclick="showContainer2()">Button 2</button>
//     <button onclick="showContainer3()">Button 3</button>

//     <div id="container1" class="containers1">
//         <div.food></div>
//     </div>

//     <div id="container2" class="container">
//        <div.foods></div>
//     </div>

//     <div id="container3" class="container">
//        <div.fooded></div>
//     </div>

//     <script>
//         function showContainer1() {
//             var container1 = document.getElementById("container1");
//             var container2 = document.getElementById("container2");
//             var container3 = document.getElementById("container3");

//             container1.style.display = "block";
//             container2.style.display = "none";
//             container3.style.display = "none";
//         }

//         function showContainer2() {
//             var container1 = document.getElementById("container1");
//             var container2 = document.getElementById("container2");
//             var container3 = document.getElementById("container3");

//             container1.style.display = "none";
//             container2.style.display = "block";
//             container3.style.display = "none";
//         }

//         function showContainer3() {
//             var container1 = document.getElementById("container1");
//             var container2 = document.getElementById("container2");
//             var container3 = document.getElementById("container3");

//             container1.style.display = "none";
//             container2.style.display = "none";
//             container3.style.display = "block";
//         }
//     </script>
// </body>
// </html>








