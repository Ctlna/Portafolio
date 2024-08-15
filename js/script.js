document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('.lateral .bl');
    const contents = document.querySelectorAll('.contenido');

    links.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            // Ocultar todos los divs
            contents.forEach(content => {
                content.classList.remove('active');
            });

            // Mostrar el div correspondiente
            const targetId = this.getAttribute('data-target');
            const targetDiv = document.getElementById(targetId);
            if (targetDiv) {
                targetDiv.classList.add('active');
            }
        });
    });
});
