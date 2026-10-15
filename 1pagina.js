document.getElementById('formulario-registro').addEventListener('submit', function(event) {
    event.preventDefault();

    const nombre = document.getElementById('nombre');
    const correo = document.getElementById('correo');
    const password = document.getElementById('comentario');
    const mensajeConfirmacion = document.getElementById('mensaje-confirmacion');

    document.getElementById('error-nombre').textContent = '';
    document.getElementById('error-correo').textContent = '';
    document.getElementById('error-comentario').textContent = '';
    mensajeConfirmacion.classList.add('oculto');

    let formularioValido = true;
    if (!nombre.checkValidity()) {
        document.getElementById('error-nombre').textContent = 'El Nombre/Nickname es obligatorio y debe tener al menos 3 letras.';
        formularioValido = false;
    }
 
    if (!correo.checkValidity()) {
        document.getElementById('error-correo').textContent = 'Por favor, ingresa un correo electrónico válido.';
        formularioValido = false;
    }
 
    if (!password.checkValidity()) {
        document.getElementById('error-comentario').textContent = 'El comentario debe tener una longitud mínima de 10 caracteres.';
        formularioValido = false;
    }
 
    if (formularioValido) {
        mensajeConfirmacion.textContent = `¡Envio exitoso! Gracias por los comentarios :D, ${nombre.value}`;
        mensajeConfirmacion.classList.remove('oculto');

        this.reset();
    }
});

document.addEventListener("DOMContentLoaded", function() {
    const tarjetas = document.querySelectorAll(".tarjecarru");
    const btnPrev = document.getElementById("btn-prev");
    const btnNext = document.getElementById("btn-next");
    const indicador = document.getElementById("carrusindi"); 
    
    if (tarjetas.length === 0) return;

    let indiceActual = 0;

    function actualizarCarrusel() {
        tarjetas.forEach(tarjeta => tarjeta.classList.remove("activo"));
        tarjetas[indiceActual].classList.add("activo");
        indicador.textContent = `${indiceActual + 1} / ${tarjetas.length}`;
    }

    btnNext.addEventListener("click", function() {
        indiceActual++;
        if (indiceActual >= tarjetas.length) {
            indiceActual = 0; 
        }
        actualizarCarrusel();
    });

    btnPrev.addEventListener("click", function() {
        indiceActual--;
        if (indiceActual < 0) {
            indiceActual = tarjetas.length - 1;
        }
        actualizarCarrusel();
    });
});


document.addEventListener("DOMContentLoaded", function() {
    const panelInteractivo = document.getElementById("panel-interactivo");
    const circulosPoder = document.querySelectorAll(".tarjeprota");
    const botoneraOriginal = document.querySelector(".contehab-cinco");
    
    const textoTitulo = document.getElementById("texto-titulo");
    const textoDesc = document.getElementById("texto-desc");
    const imgDinamica = document.getElementById("detalle-img-dinamica");
    const cuadroTexto = document.getElementById("cuadro-texto");

    if (circulosPoder.length === 0) return;

    circulosPoder.forEach(circulo => {
        circulo.addEventListener("click", function() {

            if (this.classList.contains("seleccionado")) {
                if (cuadroTexto) {

                    cuadroTexto.classList.add("desvanecer");
                }

                this.classList.remove("seleccionado");
                if (botoneraOriginal) botoneraOriginal.classList.remove("barra-superior-activa");

                setTimeout(() => {
                    panelInteractivo.classList.remove("modo-detalle");
                    if (cuadroTexto) cuadroTexto.classList.remove("desvanecer");
                    if (textoTitulo) textoTitulo.textContent = "";
                    if (textoDesc) textoDesc.textContent = "";
                }, 300);
                
                return; 
            }
L
            panelInteractivo.classList.add("modo-detalle");
            if (botoneraOriginal) {
                botoneraOriginal.classList.add("barra-superior-activa");
            }

            circulosPoder.forEach(c => c.classList.remove("seleccionado"));
            this.classList.add("seleccionado");

            const tituloNuevo = this.getAttribute("data-titulo");
            const descNueva = this.getAttribute("data-desc");
            const imgNueva = this.getAttribute("data-img");

            if (textoTitulo) textoTitulo.textContent = tituloNuevo;
            if (textoDesc) textoDesc.textContent = descNueva;
            if (imgDinamica) imgDinamica.src = imgNueva;

            if (cuadroTexto) {
                cuadroTexto.style.animation = 'none';
                cuadroTexto.offsetHeight; 
                cuadroTexto.style.animation = 'desplegarAbajo 0.4s cubic-bezier(0.25, 1, 0.5, 1) forwards';
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const panelInteractivo = document.getElementById("panel-interactivo");
    const circulosPoder = document.querySelectorAll(".tarjeprota");
    const botoneraOriginal = document.querySelector(".contehab-cinco");
    
    const textoTitulo = document.getElementById("texto-titulo");
    const textoDesc = document.getElementById("texto-desc");
    const imgDinamica = document.getElementById("detalle-img-dinamica");
    const cuadroTexto = document.getElementById("cuadro-texto");

    if (circulosPoder.length === 0) return;

    let poderFijo = null;

    circulosPoder.forEach(circulo => {
        circulo.addEventListener("click", function() {

            if (poderFijo === this) {
                poderFijo = null;
                
                if (cuadroTexto) cuadroTexto.classList.add("desvanecer");
                circulosPoder.forEach(c => c.classList.remove("seleccionado"));
                if (botoneraOriginal) botoneraOriginal.classList.remove("barra-superior-activa");

                setTimeout(() => {
                    if (!poderFijo) {
                        panelInteractivo.classList.remove("modo-detalle");
                        if (cuadroTexto) cuadroTexto.classList.remove("desvanecer");
                        if (textoTitulo) textoTitulo.textContent = "";
                        if (textoDesc) textoDesc.textContent = "";
                    }
                }, 300);
                return;
            }

            poderFijo = this;
            panelInteractivo.classList.add("modo-detalle");
            if (botoneraOriginal) botoneraOriginal.classList.add("barra-superior-activa");

            circulosPoder.forEach(c => c.classList.remove("seleccionado"));
            this.classList.add("seleccionado");

            const tituloNuevo = this.getAttribute("data-titulo");
            const descNueva = this.getAttribute("data-desc");
            const imgNueva = this.getAttribute("data-img");

            if (textoTitulo) textoTitulo.textContent = tituloNuevo;
            if (textoDesc) textoDesc.textContent = descNueva;
            if (imgDinamica) imgDinamica.src = imgNueva;

            if (cuadroTexto) {
                cuadroTexto.classList.remove("desvanecer");
                cuadroTexto.style.animation = 'none';
                cuadroTexto.offsetHeight; 
                cuadroTexto.style.animation = 'desplegarAbajo 0.4s ease forwards';
            }
        });
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const botones = document.querySelectorAll(".filbtn");
    const tarjetas = document.querySelectorAll(".cuadricuatro .tarjetec");

    let filtroActivo = null;
    function normalizar(texto) {
        return texto
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .trim();
    }
    botones.forEach(boton => {
        boton.addEventListener("click", function () {
            const filtro = normalizar(this.getAttribute("data-fil") || "");
            filtroActivo = filtroActivo === filtro ? null : filtro;
            botones.forEach(btn => {
                const categoriaBoton = normalizar(
                    btn.getAttribute("data-fil") || ""
                );

                btn.classList.toggle(
                    "activo",
                    filtroActivo !== null && categoriaBoton === filtroActivo
                );
            });
            tarjetas.forEach(tarjeta => {
                const etiqueta = tarjeta.querySelector(".badgetipo");
                const categorias = etiqueta
                    ? normalizar(etiqueta.textContent)
                        .split(/[;,]/)
                        .map(tipo => tipo.trim())
                    : [];
                const mostrar =
                    filtroActivo === null ||
                    categorias.includes(filtroActivo);
                tarjeta.style.display = mostrar ? "" : "none";
            });
        });
    });
});




document.addEventListener("DOMContentLoaded", () => {
    const elementosCopiar = document.querySelectorAll(".itemcopiar");

    elementosCopiar.forEach(elemento => {
        elemento.addEventListener("click", () => {
            const textoParaCopiar = elemento.getAttribute("data-copiar");
            navigator.clipboard.writeText(textoParaCopiar).then(() => {
                elemento.classList.add("activocopia");
                setTimeout(() => {
                    elemento.classList.remove("activocopia");
                }, 2000);
            }).catch(error => {
                console.error("Hubo un error al intentar copiar el texto: ", error);
            });
        });
    });


    const tarjetaEmma = document.querySelector(".tarjeta-error");
    if (tarjetaEmma) {
        tarjetaEmma.addEventListener("click", () => {
            document.body.classList.add("colapso-sistema");
            setTimeout(() => {
                document.body.classList.remove("colapso-sistema");
            }, 3000);
        });
    }

    const triggerFotoKlein = document.getElementById("fotoklein");
    const contenedorLugar = document.querySelector(".contenedorlugar");

        if (triggerFotoKlein && contenedorLugar) {
            triggerFotoKlein.addEventListener("click", () => {
            contenedorLugar.classList.toggle("foto-encogida");
        });
    }

})
