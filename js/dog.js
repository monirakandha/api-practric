const loadDog = () =>{
    fetch('https://api.thedogapi.com/v1/breeds')
    .then(res => res.json())
    .then(data => displayDog(data))
}

const displayDog = (doglist) => {
    console.log(doglist);
    const main = document.getElementById('main');
    // const firstTenData = doglist.slice(0,10);
    for(const dog of doglist){
        const div = document.createElement("div")
        div.className = "col-lg-4"
        div.innerHTML = `
            <h2>${dog.name}</h2>
            <p>${dog.temperament}</p>
            <h4>${dog.weight.imperial}</h4>
            <img width="400px" height="250px" src="${dog.image.url}">
        `
        main.appendChild(div)
    }

}