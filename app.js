
const div = document.querySelector('#app');
const url = "https://digimon-api.vercel.app/api/digimon/";

// sending request
fetch(url).then((response) => {
    return response.json();  // converting byte data to json
}).then(data => {
    console.log(data);
    console.log();
    displaycard(data);
}).catch(error => {
    // logging error
    console.log(error);
})

const main = document.getElementById("main");
const cardDiv = document.getElementById("cardDiv");
function displaycard(data) {
    for (let i = 0; i < 20; i++) {
        let divCol = document.createElement("div");
        divCol.className = "col-sm-3";
        cardDiv.append(divCol);
        let card = document.createElement("div");
        card.className = "card";
        divCol.append(card);

        let imgCard = document.createElement("img");
        imgCard.className = "card-img-top w-100";
        imgCard.style.width = "100px";
        imgCard.src = data[i].img;
        card.append(imgCard);

        let cardBody = document.createElement("div");
        cardBody.className = "card-body";
        card.append(cardBody);
        let cardTitle = document.createElement("h5");
        cardTitle.className = "card-title";
        cardTitle.textContent = data[i].name;
        cardBody.append(cardTitle);

        let cardText = document.createElement("p");
        cardText.className = "card-text";
        cardText.setAttribute('style', 'white-space: pre;');
        cardText.textContent = "- level: " + data[i].level;
        cardBody.append(cardText);
    }
}