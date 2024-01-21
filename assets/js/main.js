
// const url = 'https://free-to-play-games-database.p.rapidapi.com/api/games?category=shooter';
// const options = {
//     method: 'GET',
//     headers: {
//         'X-RapidAPI-Key': 'f933d125bdmsh8ba28456d8d82a2p1bbf89jsn473451910cbb',
//         'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
//     }
// };
// (async function () {
//     const response = await fetch(url, options);
//     const result = await response.json();
//     console.log(result);
// })()







// ********** loading ***********
// *** الفانكشن ديه بتستنى لحد ما كل البانات و الصور تحمل
// window.addEventListener('load', function () {
//     $('.loadingScreen').fadeOut(500, function () {
//         $('body').css('overflow', 'auto')
//     })
// })
// *** الفانكشن ديه بتشتغل لما الكود يتقرأ فقط لكن مش بتستنى لما الصور تحمل
$(document).ready(function(){
    $('.loadingScreen').fadeOut(500, function () {
        $('body').css('overflow', 'auto')
    })
})


// ---------------------
const links = document.querySelectorAll(".nav-link")
// const gamePage = document.querySelector(".games__card .row")

// ********** class active *********
for (const cate of links) {
    cate.addEventListener('click', function () {
        for (const active of links) {
            active.classList.remove("active")
        }
        cate.classList.add("active")
    })
}


import { DisplayGames } from "./game-module-display.js"

const cateName = new DisplayGames("mmorpg")
cateName.display()



for (const cate of links) {
    cate.addEventListener("click", function () {
        const val = cate.innerText
        cateName.category = val
        cateName.display()
    })
}

