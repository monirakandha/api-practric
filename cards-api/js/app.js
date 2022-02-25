// button even handelaer setup 
// get input value 
//error handing for string value

const searchButtton = () =>{
    const input = document.getElementById('input-value');
    const error = document.getElementById('error');
    const inputValue = parseInt(input.value);
    if(isNaN(inputValue) || inputValue == ""){
        //isNaN check number or string or orthers
        alert('PLease Enter a NUmber');
        error.innerText = "PLease Give a Number"
        input.value="";
    }
    else if (inputValue <= 0){
        alert('PLease Give a Positive Number');
        error.innerText = "PLease Give a Positive Number"
        input.value="";
    }
    else if (inputValue >= 53){
        alert('Card limit in 52');
        error.innerText = "Card LImit 52"
        input.value="";
    }
    else{
        fetch(`https://deckofcardsapi.com/api/deck/new/draw/?count=${inputValue}`)
        .then(res => res.json())
        .then(data => cardsDisplay(data.cards))
        input.value="";
    }

}

const cardsDisplay = (cards) =>{
    for ( const card of cards){
        const main = document.getElementById("main");
        const div = document.createElement('div');
        div.classList.add("col-lg-4")
        div.classList.add("mb-5")
        console.log(card.image)
        div.innerHTML=`
        <div class="card" style="width: 18rem;">
        <img src="${card.image}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">Name :${card.suit}</h5>
            <p class="card-text">Value : ${card.value}</p>
            <p class="card-text">Code : ${card.code}</p>
        </div>
        </div>
        `;
        console.log(card);
        main.appendChild(div)
    }
    
}

