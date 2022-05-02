let container = document.querySelector('.GOT-container');

got.houses.forEach(eachHouse=>{
    eachHouse.people.forEach(eachCharacter=>{
        let card = document.createElement('div');
        card.classList.add('card');
        container.append(card);

        let imageCharName = document.createElement('div');
        imageCharName.classList.add('characterImageName');
        card.append(imageCharName);

        let charImage = document.createElement('img');
        charImage.src = eachCharacter.image;
        imageCharName.append(charImage);

        let charName = document.createElement('h4');
        charName.innerText = eachCharacter.name;
        imageCharName.append(charName);

        let charDescription = document.createElement('p');
        charDescription.classList.add('character-description');
        charDescription.innerText= eachCharacter.description;
        card.append(charDescription);

        let cardBtn = document.createElement('a');
        cardBtn.classList.add('btn');
        cardBtn.innerText = "Learn More";
        card.append(cardBtn);
    });
}); 

