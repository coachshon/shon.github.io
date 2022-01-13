var card1, card2, card3, leftSlider, centerSlider, rightSlider, cardsPosition;
var projectsData;
var currentIndex = 0

function initCarousel(data){
    card1 = document.getElementById('left_card');
    card2 = document.getElementById('center_card');
    card3 = document.getElementById('right_card');
    leftSlider = document.getElementById('left_slider');
    centerSlider = document.getElementById('center_slider');
    rightSlider = document.getElementById('right_slider');
    cardsPosition = [{'card':card1, 'slider':leftSlider}, {'card':card2, 'slider':centerSlider}, {'card':card3, 'slider':rightSlider}];

    card1.onclick = function() {checkClick(card1)};
    card2.onclick = function() {checkClick(card2)};
    card3.onclick = function() {checkClick(card3)}; 
    console.log(data);
    updateCard(cardsPosition[1]['card'], data[0]);
    updateCard(cardsPosition[2]['card'], data[1]);
}
    

function updateCard(card, data){
    card.children[0].textContent = data['title'];
    card.children[1].src = data['logo'];
    card.children[2].textContent = data['description'];
    card.children[3].onclick = function() {
        window.open(data['url'], '_blank').focus();
    }
}

function checkClick(card) {
    switch (card) {
        case cardsPosition[0]['card']:
            leftClick(card);
            cardsPosition = rotateRight(cardsPosition);
            break;
        case cardsPosition[2]['card']:
            rightClick(card);
            cardsPosition = rotateLeft(cardsPosition);
            break;
        default:
            break;
    }
}

function leftClick(card){
    console.log("left");
}

function rightClick(card){
    console.log("right");
}

function rotateLeft(arr){
    let first = arr.shift();
    arr.push(first);
    return arr;
}

function rotateRight(arr){
    let last = arr.pop();
    arr.unshift(last);
    return arr;
}