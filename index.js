const personArray = [
    {
        id: 1,
        name: "Brooklyn Simons",
        picture: "./assets/images/character_1.b8cf9c50.png"
    },

    {
        id: 2,
        name: "Sandra Simons",
        picture: "./assets/images/character_2.6859fefd.png"
    },

    {
        id: 3,
        name: "Sandra Simons",
        picture: "./assets/images/character_3.a7f4a59a.png"
    },

    {
        id: 4,
        name: "Sandra Simons",
        picture: "./assets/images/character_4.1fd020f5.png"
    },

    {
        id: 5,
        name: "Sandra Simons",
        picture: "./assets/images/character_5.2316ee86.png"
    },

    {
        id: 6,
        name: "Sandra Simons",
        picture: "./assets/images/character_6.839b5ded.png"
    },

    {
        id: 7,
        name: "Sandra Simons",
        picture: "./assets/images/character_7.fadfa678.png"
    },

    {
        id: 8,
        name: "Sandra Simons",
        picture: "./assets/images/character_8.341f1453.png"
    },

    {
        id: 9,
        name: "Sandra Simons",
        picture: "./assets/images/character_9.d1414f7c.png"
    },

]



const getId =  document.getElementById("hello-text")

console.log(getId)

getId.textContent = "Good afternoon"

const getButtonClick = document.getElementById("button-click")

console.log(getButtonClick)

const getGreeting = document.getElementById("greeting")

console.log(getGreeting)

const goodClass = document.getElementsByClassName("good")

console.log(goodClass)

goodClass[2].textContent = "Good ever"

goodClass[1].innerHTML = `<section>wonderful</section>`

const all = document.getElementsByTagName("p")

console.log(all)

getGoodDay = document.getElementsByClassName("good-day")

console.log(getGoodDay[1].textContent)

getGoodDay[1].textContent = "Good evening" 

console.log(getGoodDay[1].textContent)

const getUl = document.createElement("ul")
document.body.appendChild(getUl)

getUl.innerHTML = `<li>Rice</li>
<li>Beans</li>
<li>Yam</li>`

const getMainBox = document.getElementsByClassName("main-box")


personArray.map((eachItem, index, array) => {
    return getMainBox[0].innerHTML += `<div class="each-div"><div class="image-box">
            <img src="${eachItem.picture}" 
            alt="" 
            width="100%"/>
        </div>
        <p class="text-box">${eachItem.name}</p>
        </div>`
})