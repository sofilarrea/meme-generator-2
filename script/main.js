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
    if (modo === "dark"){
        modoButton.textContent = "Dark Mode";       
        heroSection.style.backgroundColor = "violet";
        sectionPart.style.backgroundColor = "violet";
        cuadrado.style.backgroundColor = "fuchsia";
        cuadradoDos.style.backgroundColor= "pink";
        download.style.backgroundColor = "violet";
        sectionPart.style.color = "black";
        modo = "claro";
    } else  {    
        modoButton.textContent = "Pink Mode";
        heroButton.style.color = "black";
        heroSection.style.backgroundColor = "black";
        sectionPart.style.backgroundColor = "black";
        cuadrado.style.backgroundColor = "black";
        cuadradoDos.style.backgroundColor = "grey";
        download.style.backgroundColor = "black";
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

/* Color Img */
const color = document.getElementById('color');
const containerImg = document.getElementById("cuadrado-dos");
const hexaColor = document.getElementById('hexa-color');
const blendModeFilter = document.getElementById('blendModeFilter');

color.addEventListener('input', ()=> {
    hexaColor.textContent = color.value;
    aplyBlendMode();
});

blendModeFilter.addEventListener('change', ()=> {    
    containerImg.style.backgroundImage =  aplyBlendMode();
});

function aplyBlendMode() {
if (blendModeFilter.value == 'ninguno'){
    containerImg.style.backgroundBlendMode = 'normal';
} else if (blendModeFilter.value == 'aclarar'){
    containerImg.style.backgroundBlendMode = 'lighten';
} else if (blendModeFilter.value == 'oscurecer'){
    containerImg.style.backgroundBlendMode = 'darken';
} else if (blendModeFilter.value == 'diferencia'){
    containerImg.style.backgroundBlendMode = 'difference';
} else if (blendModeFilter.value == 'luminucidad'){
    containerImg.style.backgroundBlendMode = 'luminosity';
} else if (blendModeFilter.value == 'multiplicar'){
    containerImg.style.backgroundBlendMode = 'multiply';
}

containerImg.style.backgroundColor = color.value;
};

/* Filtros Imágen */
const colorInput = document.getElementById("color_input_image");
const tipoColorSelect = document.getElementById("tipeColor");
const colorSection = document.querySelector(".color-section");

document.addEventListener("DOMContentLoaded", function() {
    const imagen = document.getElementById("cuadrado-dos");
    const brightnessRange = document.getElementById("brightnessRange");
    const opacityRange = document.getElementById("opacityRange");
    const contrastRange = document.getElementById("contrastRange");
    const blurRange = document.getElementById("blurRange");
    const grayscaleRange = document.getElementById("grayscaleRange");
    const sepiaRange = document.getElementById("sepiaRange");
    const hueRange = document.getElementById("hueRange");
    const saturateRange = document.getElementById("saturateRange");
    const invertRange = document.getElementById("invertRange");
    const clearFiltersButton = document.getElementById("clearFiltersButton");

    brightnessRange.addEventListener("input", updateFilters);
    opacityRange.addEventListener("input", updateFilters);
    contrastRange.addEventListener("input", updateFilters);
    blurRange.addEventListener("input", updateFilters);
    grayscaleRange.addEventListener("input", updateFilters);
    sepiaRange.addEventListener("input", updateFilters);
    hueRange.addEventListener("input", updateFilters);
    saturateRange.addEventListener("input", updateFilters);
    invertRange.addEventListener("input", updateFilters);

    clearFiltersButton.addEventListener("click", clearFilters);

    function updateFilters() {
        const brightnessValue = brightnessRange.value;
        const opacityValue = opacityRange.value;
        const contrastValue = contrastRange.value;
        const blurValue = blurRange.value;
        const grayscaleValue = grayscaleRange.value;
        const sepiaValue = sepiaRange.value;
        const hueValue = hueRange.value;
        const saturateValue = saturateRange.value;
        const invertValue = invertRange.value;

        imagen.style.filter = `brightness(${brightnessValue}%) opacity(${opacityValue}) contrast(${contrastValue}%) blur(${blurValue}px) grayscale(${grayscaleValue}%) sepia(${sepiaValue}%) hue-rotate(${hueValue}deg) saturate(${saturateValue}%) invert(${invertValue}%)`;
    }

    function clearFilters() {
        brightnessRange.value = 100;
        opacityRange.value = 1;
        contrastRange.value = 100;
        blurRange.value = 0;
        grayscaleRange.value = 0;
        sepiaRange.value = 0;
        hueRange.value = 0;
        saturateRange.value = 100;
        invertRange.value = 0;

        imagen.style.filter = "none";
    }
});




/* S e c t i o n  T e x t */
/* Agregar texto sup e inf */
const superiorInput = document.getElementById('text-input-sup');
const inferiorInput = document.getElementById('text-input-inf');
const textoUp = document.getElementById('textoUp');
const textoDown = document.getElementById('textoDown');

superiorInput.addEventListener('input', actualizarTexto);
inferiorInput.addEventListener('input', actualizarTexto);   

function actualizarTexto() {
    const textoSuperior = superiorInput.value;
    const textoInferior = inferiorInput.value;
   

    const textoSuperiorHTML = `<h2>${textoSuperior}</h2>`;
    const textoInferiorHTML = `<h2>${textoInferior}</h2>`;

    textoUp.innerHTML = textoSuperiorHTML;
    textoDown.innerHTML = textoInferiorHTML;
}


/* texto sacar sup e inf */
const hideTextCheckboxSup = document.getElementById('hideTextCheckboxSup');
const hideTextCheckboxInf = document.getElementById('hideTextCheckboxInf');

hideTextCheckboxSup.addEventListener('change', toggleTextoSup);
hideTextCheckboxInf.addEventListener('change', toggleTextoInf);

/* sup */
function toggleTextoSup() {
    if (textoUp.style.visibility === 'hidden') {
        textoUp.style.visibility = 'visible';
    } else {
        textoUp.style.visibility = 'hidden';
    }
}
/* inf */
function toggleTextoInf() {
    if (textoDown.style.visibility === 'hidden') {
        
        textoDown.style.visibility = 'visible';
    } else {
        
        textoDown.style.visibility = 'hidden';
    }
}