let elementos = document.getElementsByClassName("miClase");

for (let i = 0; i < elementos.length; i++) {
    elementos[i].style.color = "green";
    elementos[i].style.backgroundColor = "black"
    elementos[i].style.fontFamily = "Consolas"
}

let caso = document.getElementsByClassName("miDiv");

for (let i = 0; i < caso.length; i++) {
    caso[i].style.color = "white";
    caso[i].style.border = "1px solid green"
    caso[i].style.margin = "4px"
    caso[i].style.backgroundColor = "black"
    caso[i].style.fontFamily = "Consolas"
    caso[i].style.textAlign="center"
}