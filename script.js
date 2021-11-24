const header = document.querySelector ("header")
const main = document.querySelector ("main")

fillHeader();
fillMain();

function fillHeader() {
    header.innerHTML= "<div class='um'> <h1>FELINOS</h1><h3>'Sua energia cura e sua companhia é encantadora'</h3></div>";
}
function fillMain() {
    main.innerHTML= " <div class='foto'><img id='gato' src='ravena.jpeg'></div>";
}
