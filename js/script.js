var botonesVer = document.querySelectorAll('.botonV');
        var infDivs = document.querySelectorAll('.inf');

        botonesVer.forEach((boton, indice) => {
            boton.addEventListener('click', () => {
                infDivs[indice].classList.toggle('abrir');
                console.log("hola")
            })
        });

        document.addEventListener('click', function(event) {
            const imagenes = document.querySelectorAll('.toggle-imagen');
            let clickedOnImage = false;
        
            imagenes.forEach(img => {
                if (img.contains(event.target)) {
                    clickedOnImage = true;
                    img.classList.toggle('imagen-grande');  
                } else {
                    img.classList.remove('imagen-grande');  
                }
            });
            if (!clickedOnImage) {
                imagenes.forEach(img => {
                    img.classList.remove('imagen-grande');
                });
            }
        });

(function() {
    emailjs.init("service_eotxffn");
})();

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    emailjs.sendForm('service_eotxffn', '__ejs-test-mail-service__', this)
        .then(function() {
            alert('Correo enviado correctamente!');
        }, function(error) {
            alert('Fallo en el envío del correo:', error);
        });
});