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

const closeImg = document.getElementById('close-img');

closeImg.addEventListener('click', () => {
    asideImg.style.display = 'none';

});
const closeText = document.getElementById('close-text');

closeText.addEventListener('click', () => {
    asideText.style.display = 'none';

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
const asideContainer = document.getElementById("aside-text-container")
const footer = document.getElementById("footer")

let modo = "claro";
modoButton.addEventListener("click", () => {
    if (modo === "dark"){
        modoButton.textContent = "Dark Mode";
        heroSection.style.backgroundColor = "#4d194d";
        sectionPart.style.backgroundColor = "#4d194d";
        cuadrado.style.backgroundColor = "#1b3a4b";
        cuadradoDos.style.backgroundColor= "#006466";
        download.style.backgroundColor = "#4d194d";
        footer.style.backgroundColor = "#4d194d";
        sectionPart.style.color = "black";
        modo = "claro";
    } else  {
        modoButton.textContent = "Violet Mode";
        heroButton.style.color = "black";
        heroSection.style.backgroundColor = "black";
        sectionPart.style.backgroundColor = "black";
        cuadrado.style.backgroundColor = "black";
        cuadradoDos.style.backgroundColor = "grey";
        download.style.backgroundColor = "black";
        footer.style.backgroundColor = "black";
        sectionPart.style.color = "white";
        modo = "dark";
    }
});


/* Cargar Url Imagen */
const imgInput = document.getElementById("img_input");
const squareDos = document.getElementById("cuadrado-dos");

imgInput.addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
        const urlImagen = imgInput.value.trim();

        if (urlImagen) {
            squareDos.style.backgroundImage = `url('${urlImagen}')`;
            squareDos.style.backgroundSize = "cover";
            squareDos.style.backgroundPosition = "center";
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

superiorInput.addEventListener('keyup', actualizarTexto);
inferiorInput.addEventListener('keyup', actualizarTexto);

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

/* Texto cambiar de  color */
const colorInputText = document.getElementById("color_input_texto");

colorInputText.addEventListener('input', ()=> {
    console.log("dentro de la funcion")

    textoUp.style.color = colorInputText.value;
    textoDown.style.color = colorInputText.value;
});


/* Fondo cambiar de color */
const colorInputFondo = document.getElementById("color_input_fondo");

colorInputFondo.addEventListener('input', cambioColorFondo);
function cambioColorFondo() {
    cuadrado.style.backgroundColor = colorInputFondo.value;
}


/* Cambio de fuente */
const fontFamilyP = document.getElementById('font-family-p');

// Font family, size and text direction
fontFamilyP.addEventListener('change', fontFamilyChange);

fontFamilyP.addEventListener('change', () => {
    fontFamilyChange();
});
  function fontFamilyChange(){
    if (fontFamilyP.value == 'impact'){
        textoDown.style.fontFamily = 'impact';
        textoUp.style.fontFamily = 'impact';
    } else if (fontFamilyP.value == 'arial'){
        textoDown.style.fontFamily = 'Arial';
        textoUp.style.fontFamily = 'Arial';
    } else if (fontFamilyP.value == 'arialBlack'){
        textoDown.style.fontFamily = 'Arial Black';
        textoUp.style.fontFamily = 'Arial Black';
    } else if (fontFamilyP.value == 'americanTypewriter'){
        textoDown.style.fontFamily = 'American Typewriter';
        textoUp.style.fontFamily = 'American Typewriter';
    } else if (fontFamilyP.value == 'andaleMono'){
        textoDown.style.fontFamily = 'andale mono';
        textoUp.style.fontFamily = 'andale mono';
    } else if (fontFamilyP.value == 'comicSans'){
        textoDown.style.fontFamily = 'Comic Sans MS';
        textoUp.style.fontFamily = 'Comic Sans MS';
    } else if (fontFamilyP.value == 'helvetica'){
        textoDown.style.fontFamily = 'Helvetica';
        textoUp.style.fontFamily = 'Helvetica';
    } else if (fontFamilyP.value == 'verdana'){
        textoDown.style.fontFamily = 'Verdana';
        textoUp.style.fontFamily = 'Verdana';
    } else if (fontFamilyP.value == 'timesNewRoman'){
        textoDown.style.fontFamily = 'Times New Roman';
        textoUp.style.fontFamily = 'Times New Roman';
    }
};


const fontSize = document.getElementById('font-size');
fontSize.addEventListener('input', () => {
 textoDown.style.fontSize = `${fontSize.value}px`;
 textoUp.style.fontSize = `${fontSize.value}px`;
 });



/* fontSize.addEventListener('change', function() {
    const selectedFontSize = fontSize.value;

    textoUp.style.fontSize = selectedFontSize + 'px';
    textoDown.style.fontSize = selectedFontSize + 'px';
});
 */

/* Alineado de texto */
// Obtener referencias a los elementos de botón y texto
const textAlignLeft = document.getElementById('text-align-left');
const textAlignCenter = document.getElementById('text-align-center');
const textAlignRight = document.getElementById('text-align-right');


// Agregar event listeners a los botones para cambiar la alineación
textAlignLeft.addEventListener('click', () => {
    textoUp.style.textAlign = 'left';
    textoDown.style.textAlign = 'left';
});

textAlignCenter.addEventListener('click', () => {
    textoUp.style.textAlign = 'center';
    textoDown.style.textAlign = 'center';
});

textAlignRight.addEventListener('click', () => {
    textoUp.style.textAlign = 'right';
    textoDown.style.textAlign = 'right';
});


/* Contorn */
const contornNone = document.getElementById('contorn-none');
const contornLight = document.getElementById('contorn-light');
const contornDark = document.getElementById('contorn-dark');

if (contornNone && contornLight && contornDark) {
    contornNone.addEventListener('click', () => {
        textoUp.style.textShadow = '0 0 transparent';
        textoDown.style.textShadow = '0 0 transparent';
    });

    contornLight.addEventListener('click', () => {
        textoUp.style.textShadow ='rgb(255, 255, 255) 2px 2px, rgb(255, 255, 255) -2px 2px, rgb(255, 255, 255) 2px -2px, rgb(255, 255, 255) -2px -2px';
        textoDown.style.textShadow ='rgb(255, 255, 255) 2px 2px, rgb(255, 255, 255) -2px 2px, rgb(255, 255, 255) 2px -2px, rgb(255, 255, 255) -2px -2px';
    });

    contornDark.addEventListener('click', () =>{
        textoUp.style.textShadow = "black 2px 2px, black -2px 2px, black 2px -2px, black -2px -2px"
        textoDown.style.textShadow = "black 2px 2px, black -2px 2px, black 2px -2px, black -2px -2px"
    });
} else {
    console.error("Uno o más elementos con IDs 'contorn-none', 'contorn-light' o 'contorn-dark' no fueron encontrados.");
}


/* Padding */
const paddingInput = document.getElementById('padding-');

paddingInput.addEventListener('input', () => {
    const paddingValue = paddingInput.value;

    textoUp.style.padding = `${paddingValue}px`;
    textoDown.style.padding = `${paddingValue}px`;
});


/* Line Hegiht */
const lineHeightSelect = document.getElementById('line-height');

lineHeightSelect.addEventListener('change', () => {
    const selectedLineHeight = lineHeightSelect.value;

    textoUp.style.lineHeight = selectedLineHeight;
    textoDown.style.lineHeight = selectedLineHeight;
});





/* download */
/* Descargar Meme */
document.getElementById("download-button").addEventListener("click", function () {
  const section = document.getElementById("section");

  const config = {
      quality: 1
  };

  domtoimage.toJpeg(section, config).then(function (dataUrl) {

      const link = document.createElement("a");
      link.download = "meme.jpeg";
      link.href = dataUrl;


      link.click();
  }).catch(function (error) {
      console.error("Error al convertir el contenido a JPEG:", error);
  });
});
