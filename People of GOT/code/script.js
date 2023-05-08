
let ul = document.querySelector('ul')
got.houses.forEach(house => {
    house.people.forEach(person =>{
        let li = document.createElement('li')
        li.classList.add('card')
        let div1 = document.createElement('div')
        div1.classList.add('img-div')
       let div2 = document.createElement('div')
       div2.classList.add('circle')
        let image = document.createElement('img')
        image.src = person.image
        image.alt = person.name
        image.classList.add('image')
       div2.append(image)
        let h2 = document.createElement('h2')
        h2.innerText = person.name
        div1.append(div2, h2)
        let p = document.createElement('p')
        p.innerText = person.description
        let buttton = document.createElement('button')
        buttton.innerText = "Learn More!"
        buttton.classList.add('button')
        li.append(div1,div2, p, buttton)
        ul.append(li)
    
    })
});