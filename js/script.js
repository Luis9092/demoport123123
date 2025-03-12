 


const header = document.querySelector("header");

window.addEventListener("scroll", function () {
    header.classList.toggle("sticky", window.scrollY > 50);
})

let menuIcon = document.querySelector("#menu-icon");
let navlist = document.querySelector(".navlist");


// toggle navbar

menuIcon.onclick = () => {
    menuIcon.classList.toggle("bx-x");
    navlist.classList.toggle("open");
}

window.onscroll = () => {
    menuIcon.classList.remove("bx-x");
    navlist.classList.remove("open");
}

// PARALLAX OBSERVER
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show-items");
        } else {
            entry.target.classList.remove("show-items");
        }
    })
})

const scrollScale = document.querySelectorAll(".scroll-scale");
scrollScale.forEach((el) => observer.observe(el));

const scrollBottom = document.querySelectorAll(".scroll-bottom");
scrollBottom.forEach((el) => observer.observe(el));

const scrollTop = document.querySelectorAll(".scroll-top");
scrollTop.forEach((el) => observer.observe(el));


// NUEVAS FUNCIONES

function obtenerHoraActual() {
    let fecha = new Date();
    let horas = fecha.getHours();
    return horas;
}

 
 





// SLIDER VIEWCARDS










// luisfer123
// fernando123
// Casa_123










// INICIOOO
window.onload = function () {
    // inicioAlerta(); 

    horaTerminal();
  
    hackerBinari();
   
};


function loadingweb() {
    const loadingContainer = document.querySelector('.loading');
    const loadingText = document.getElementById('loading-text');
    const messages = [
        "Iniciando sistema...",
        "Conectando a la red...",
        "Analizando datos...",
        "Acceso concedido..."
    ];

    let index = 0;
    const textInterval = setInterval(() => {
        loadingText.textContent = messages[index];
        index = (index + 1) % messages.length;
    }, 800);

    setTimeout(() => {
        loadingContainer.classList.add('hidden');
        clearInterval(textInterval);
    }, 4600);

}





let timerInterval;

function inicioAlerta() {
    Swal.fire({
        title: "Hackeando Cuentas De Banco (⊙ˍ⊙)",
        html: "Reenviando Datos Confidenciales En <b style='color: var(--primary-color)' ></b> Milisegundos.",
        timer: 9000,
        timerProgressBar: true,
        showCloseButton: true,
        showCancelButton: true,
        cancelButtonColor: '#e80049',
        confirmButtonText: 'Terminar Ahora',
        didOpen: () => {
            Swal.showLoading();
            const timer = Swal.getPopup().querySelector("b");
            timerInterval = setInterval(() => {
                timer.textContent = `${Swal.getTimerLeft()}`;
            }, 100);
        },
        willClose: () => {
            clearInterval(timerInterval);
        }
    }).then((result) => {
        if (result.isConfirmed) {
            console.log("La alerta fue cerrada manualmente.");
        } else if (result.dismiss === Swal.DismissReason.timer) {
            console.log("Se cerró automáticamente por el temporizador.");
        }
    });
}




//ENVIAR CORREO ELECTRONIC



function hackerBinari() {
    initMatrix('matrix');

}

function initMatrix(containerId, options = {}) {
    const {
        columnWidth = 46,
        animationSpeed = 500,
        changeCharProbability = 0.1,
        minLength = 15,
        maxLength = 30,
        minSpeed = 0.2,
        maxSpeed = 0.5
    } = options;

    const container = document.getElementById(containerId);
    let columns = [];

    // Función para crear o actualizar las columnas
    function createOrUpdateColumns() {
        const width = container.offsetWidth;
        const newColumnsCount = Math.floor(width / columnWidth);

        // Si el número de columnas no ha cambiado, no hacemos nada
        if (newColumnsCount === columns.length) return;

        // Limpiamos el contenedor
        container.innerHTML = '';

        // Creamos las nuevas columnas
        columns = [];
        for (let i = 0; i < newColumnsCount; i++) {
            const column = document.createElement('div');
            column.className = 'matrix';
            column.style.width = columnWidth + 'px';
            column.style.left = (i * columnWidth) + 'px';
            column.style.position = 'absolute';
            container.appendChild(column);

            let delay = Math.random() * 2;
            animateColumn(column, delay, {
                animationSpeed,
                changeCharProbability,
                minLength,
                maxLength,
                minSpeed,
                maxSpeed
            });

            columns.push(column);
        }
    }

    // Crear columnas iniciales
    createOrUpdateColumns();

    // Escuchar cambios en el tamaño de la ventana
    window.addEventListener('resize', createOrUpdateColumns);
}

function animateColumn(column, delay, options) {
    const {
        animationSpeed,
        changeCharProbability,
        minLength,
        maxLength,
        minSpeed,
        maxSpeed
    } = options;

    let length = Math.floor(Math.random() * (maxLength - minLength + 1)) + minLength;
    let chars = [];
    let speeds = [];

    for (let i = 0; i < length; i++) {
        chars.push(Math.random() < 0.5 ? '0' : '1');
        speeds.push(Math.random() * (maxSpeed - minSpeed) + minSpeed);
    }

    setTimeout(() => {
        setInterval(() => {
            let html = '';
            for (let i = 0; i < length; i++) {
                const char = chars[i];
                const opacity = Math.max(0, 1 - (i / length));
                html = `<span style="opacity: ${opacity}; color: ${colorChange};">${char}</span><br>` + html;

                if (Math.random() < changeCharProbability) {
                    chars[i] = Math.random() < 0.5 ? '0' : '1';
                }
            }
            column.innerHTML = html;
        }, animationSpeed);
    }, delay * 1000);
}



// HORA

function obtenerFechaHoraActualConDia() {
    const fechaHoraActual = new Date();
    // Opciones para formatear la fecha
    const opciones = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false };
    return fechaHoraActual.toLocaleString('es-ES', opciones); // Devuelve la fecha y hora formateada en español
}

// Ejemplo de uso
function horaTerminal() {
    const horaactual = document.querySelector("#horaactual");
    horaactual.textContent = obtenerFechaHoraActualConDia();
}