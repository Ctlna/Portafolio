function mostrarInfo(class) {
    var div = document.querySelector('.' + clase);
    var info = div.querySelector('.info');
    if (info.style.display === 'none') {
        div.style.height = 'auto';  // Agranda el div para acomodar el contenido
        info.style.display = 'block';
    } else {
        div.style.height = '100px';  // Restaura el tamaño inicial del div
        info.style.display = 'none';
    }
}

function agrandarImagen(img) {
    if (img.classList.contains('imagen-pequena')) {
        img.classList.remove('imagen-pequena');
        img.classList.add('imagen-grande');
    } else {
        img.classList.remove('imagen-grande');
        img.classList.add('imagen-pequena');
    }
}