console.log('Hello from script')
/* Open and close aside */
const asideImg = document.getElementById('aside-image')
const asideText = document.getElementById('aside-text')
const asideButtonImg = document.getElementById('openSidebarButtonImg')
const asideButtonText = document.getElementById('openSidebarButtonText')

asideButtonImg.addEventListener('click', () => {
    asideImg.style.display = 'block';
    asideText.style.display = 'none';
});

asideButtonText.addEventListener('click', () => {
    asideImg.style.display = 'none';
    asideText.style.display = 'block';
});  

/* Variable útiles */
const heroSection = document.getElementById("hero-section")
const modoButton = document.getElementById("modo")
const sectionPart = document.getElementById("section")
const cuadrado = document.getElementById("square")
const cuadradoDos = document.getElementById("cuadrado-dos")
const download = document.getElementById("download")
const downloadButton = document.getElementById("download-button")
const heroButton = document.getElementById("hero-section")
const asideContainer = document.getElementById("aside-container")


let modo = "claro"; 
modoButton.addEventListener("click", () => {
    console.log("dentro del boton dark")
    if (modo === "dark"){
       modoButton.textContent = "Dark Mode";       
        heroSection.style.backgroundColor = "violet";
        sectionPart.style.backgroundColor = "violet";
        cuadrado.style.backgroundColor = "fuchsia";
        cuadradoDos.style.backgroundColor= "pink";
        download.style.backgroundColor = "violet";
        asideContainer.style.backgroundColor = "violet"; // No funciona
        sectionPart.style.color = "black";
        modo = "claro";
    } else  {
        console.log("dentro del else")
        modoButton.textContent = "Pink Mode";
        heroButton.style.color = "black";
        heroSection.style.backgroundColor = "black";
        sectionPart.style.backgroundColor = "black";
        cuadrado.style.backgroundColor = "black";
        cuadradoDos.style.backgroundColor = "grey";
        download.style.backgroundColor = "black";
        asideContainer.style.backgroundColor = "black"; // No funciona
        sectionPart.style.color = "white";
        modo = "dark";
    }
});


/* Cargar Url Imagen */
const imgInput = document.getElementById("img_input");
const squareDos = document.getElementById("cuadrado-dos");

imgInput.addEventListener("keyup", function (event) {
    console.log("dentro de la funcion")
    if (event.key === "Enter") {
        const urlImagen = imgInput.value.trim();

        if (urlImagen) {
            squareDos.style.backgroundImage = `url('${urlImagen}')`;
            squareDos.style.backgroundSize = "cover";
            squareDos.style.backgroundPosition = "center";
            squareDos.style.backgroundRepeat = "no-repeat";
            imgInput.value = ""; // Saco la url deel input
        } else {
            console.log("No se proporcionó una URL válida para la imagen.");
        }
    }
});

