form = document.querySelector("form")
cards_main = document.querySelector("#cards_main")
inputs = document.querySelectorAll(".input")

form.addEventListener ("submit" , function(e) {
    e.preventDefault()

    let card = document.createElement("div")
    card.classList.add("card")
    cards_main.appendChild(card)

    let picture = document.createElement("div")
    picture.classList.add("picture")
    card.appendChild(picture)

    let img = document.createElement("img")
    if(inputs[3].value === ""){
        img.setAttribute("src" , "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsCc5E-o4z6uPnn8qn_ITbrlxdJ5kdmbztmg&s")
    }else{
        img.setAttribute("src" , inputs[3].value )
    }
    picture.appendChild(img)

    let name = document.createElement("div")
    name.classList.add("name")
    name.innerText = inputs[0].value
    card.appendChild(name)

    let age = document.createElement("div")
    age.classList.add("age")
    age.innerText = inputs[1].value
    card.appendChild(age)

    let info = document.createElement("div")
    info.classList.add("info")
    info.innerText = inputs[2].value
    card.appendChild(info)

    inputs.forEach(function(val) {
        if (val.type !== "submit"){
            val.value = ""
        }
    })

})