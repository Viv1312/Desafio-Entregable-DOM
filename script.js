//Cada  mochila y su contenido 





class Mochila{
    constructor(id, titulo, imagen, contenido,){
        this.id = id
        this.titulo = titulo
        this.imagen = imagen
        this.contenido = contenido
    }   
}

const mochila1 = new Mochila(1,"Mochila inicial","./assets/img/mochilainicial.jpg", ["Hojas canson blancas" , "Papel Crepé" , "Plasticola Grande" , "Papel Afiche" , "Crayones Largos"])
const mochila2 = new Mochila(2, "Mochila Prescolar","./assets/img/mochilaPrescolar.jpg", ["Hojas canson tipo color" , "Plasticola Grande", "Tijera Punta redondeada", "Cartulina Azul", "Tijera punta Redondeada"])
const mochila3 = new Mochila(3, "Mochila Primaria","./assets/img/mochilaprimaria.jpg", ["Cuaderno de Notificaciones", "Carpeta A4" ,"Plasticola Grande", "Lápiz HB", "Sacapuntas"])
const mochila4 = new Mochila(4,"Mochila PreInicial", "./assets/img/mochilapreInicial.jpg",["Hojas el Nene" , "Papel metalico", "Papel secante", "Crayones al agua"])
const mochila5 = new Mochila(5, "Mochila Guarderia", "./assets/img/mochilaGuarderia.jpg", ["Set Babita", "Pañalero", "Toallitas Humedas"])
const mochila6 = new Mochila(6, "Mochila Escolar", "./assets/img/mochilaEscolar.jpg", ["Cuaderno cuadricula", "Block de Hojas", "Regla","Escuadra"])



const mochilas = [mochila1, mochila2, mochila3, mochila4, mochila5, mochila6]

const divMochilas = document.getElementById("divMochilas")


for(let  mochila of mochilas){
    divMochilas.innerHTML += `
    <div class ="div-mochilas">
    <h3> ${mochila.titulo}</h3>
    <img src="${mochila.imagen}" alt=""></img>
    <ul id="ul${mochila.id}">

    </ul>
    </div>
    `
}

const ul1 = document.getElementById("ul1")
for (let i = 0 ; i<mochilas[0].contenido.length; i++){
    ul1.innerHTML += `
    <li>${mochilas[0].contenido[i]}</li>
    `
}

const ul2 = document.getElementById("ul2")
for (let i = 0 ; i<mochilas[1].contenido.length; i++){
    ul2.innerHTML += `
    <li>${mochilas[1].contenido[i]}</li>
    `
}

const ul3 = document.getElementById("ul3")
for (let i = 0 ; i<mochilas[2].contenido.length; i++){
    ul3.innerHTML += `
    <li>${mochilas[2].contenido[i]}</li>
    `
}


const ul4 = document.getElementById("ul4")
for (let i = 0 ; i<mochilas[3].contenido.length; i++){
    ul4.innerHTML += `
    <li>${mochilas[3].contenido[i]}</li>
    `
}

const ul5 = document.getElementById("ul5")
for (let i = 0 ; i<mochilas[4].contenido.length; i++){
    ul5.innerHTML += `
    <li>${mochilas[4].contenido[i]}</li>
    `
}

const ul6 = document.getElementById("ul6")
for (let i = 0 ; i<mochilas[5].contenido.length; i++){
    ul6.innerHTML += `
    <li>${mochilas[5].contenido[i]}</li>
    `
}

/*
console.log(mochilas[0].contenido)
console.log(mochilas[0].contenido.lenght)
console.log(mochilas[0].contenido[0])
const ul = document.getElementById("ul")
for(let i = 0 ; i<mochilas[0].contenido.lenght; i++){
    ul.innerHTML +=`
    <li>${mochila.contenido[i]}</li>
    `
}*/  

/*
 for (let mochila of mochilas){
    divMochilas.innerHTML += `
    <div class ="div-plato">
    <h3> ${mochila.titulo }</h3>
    <img src=> "${mochila.imagen}" alt="">
    <ul id= "ul"> `
    const ul = document.getElementById("ul")
    for(let suContenido of mochila.contenido){
        ul.innerHTML += `
        <li> ${suContenido}</li>
        `
    }
    `</ul>

    </div>  
    `
}*/
/*
for (let mochila of mochilas){
    divMochilas.innerHTML += `
    <div class="div-mochila">
    <h3>${mochila.titulo}</h3>
    <img src="${mochila.imagen}" alt="">
    <ul id="ul"></ul>
    </div>
    ` 
    const ul = document.getElementById("ul")
    for (let i = 0; i< mochila.contenido.length; i++){
        ul.innerHTML +=`
        <li>${mochila.contenido[i]}</li>
        `
    }
} 
*/
