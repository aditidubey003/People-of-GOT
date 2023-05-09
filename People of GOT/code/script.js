
let ul = document.querySelector('ul')
got.houses.forEach(house => {
    house.people.forEach(person =>{
        let li = document.createElement('li')
        li.classList.add('card')
        let div = document.createElement('div')
        div.classList.add('img-div')
        let image = document.createElement('img')
        image.src = person.image
        image.alt = person.name
        image.classList.add('image')
        let h2 = document.createElement('h2')
        h2.innerText = person.name
        div.append(image, h2)
        let p = document.createElement('p')
        p.innerText = person.description
        let buttton = document.createElement('button')
        buttton.innerText = "Learn More!"
        buttton.classList.add('button')
        li.append(div, p, buttton)
        ul.append(li)
    
    })
});
