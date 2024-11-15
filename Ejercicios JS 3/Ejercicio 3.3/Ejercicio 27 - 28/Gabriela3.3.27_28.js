//Ejercicio 27
window.addEventListener('load', () => {
    const basicFileInput = document.getElementById('basicFileInput');
    const basicError = document.getElementById('basicError');
    const basicSuccess = document.getElementById('basicSuccess');
    const imagePreview = document.getElementById('imagePreview');
    const basicForm = document.getElementById('basicForm');

    const tamanyoMaximo = 1048576;

    basicFileInput.addEventListener('change', () => {

        basicError.textContent = '';
        basicSuccess.textContent = '';
        imagePreview.src = '';

        let file =  basicFileInput.files[0];

        if(!file) {
            basicError.textContent = 'Selecciona un archivo'
            return
        }

        if(!file.type.startsWith('image/')) {
            basicError.textContent = 'Solo se permite imagen'
            return
        }

        if(file.size > tamanyoMaximo) {
            basicError.textContent = 'El archivo excede el tamañao máximo'
            return
        }

        let reader = new FileReader();
        reader.onload = function(event) {
            imagePreview.src = event.target.result;
        };
        reader.readAsDataURL(file);

        basicSuccess.textContent = 'El archivo es válido';
    })

    basicForm.addEventListener('submit', (event) => {
        event.preventDefault();

        let file = basicFileInput.files[0];

        if(!file || !file.type.startsWith('image/') || file.size > tamanyoMaximo) {
            basicError.textContent = 'Selecciona un archivo que sea imagen y no exceda el 1MB de tamaño';
        }
        else {
            basicSuccess.textContent = 'Archivo valido, formulario enviado';
        }

    })

})



//Ejercicio 28
window.addEventListener('load', () => {
    const dropZone = document.getElementById('dropZone');
    const advancedFileInput = document.getElementById('advancedFileInput');
    const fileList = document.getElementById('fileList');
    const advancedError = document.getElementById('advancedError');
    const advancedSuccess = document.getElementById('advancedSuccess');
    const uploadProgress = document.getElementById('uploadProgress');
    const tamanioMaximo = 5 * 1024 * 1024;

    dropZone.addEventListener('click', function () {
        advancedFileInput.click();
    });

    dropZone.addEventListener('dragover', function (event) {
        event.preventDefault();
        dropZone.classList.add('dragover');
    });

    dropZone.addEventListener('dragleave', function () {
        dropZone.classList.remove('dragover');
    });

    dropZone.addEventListener('drop', function (event) {
        event.preventDefault();
        dropZone.classList.remove('dragover');
        manejarArchivos(event.dataTransfer.files);
    });

    advancedFileInput.addEventListener('change', function () {
        manejarArchivos(advancedFileInput.files);
    });

    function manejarArchivos(archivos) {
        fileList.innerHTML = '';
        advancedError.style.display = 'none';
        advancedSuccess.style.display = 'none';

        let archivosValidos = [];
        for (let i = 0; i < archivos.length; i++) {
            let archivo = archivos[i];
            let esValido = validarArchivo(archivo);
            mostrarInfoArchivo(archivo, esValido);
            if (esValido) {
                archivosValidos.push(archivo);
            }
        }

        if (archivosValidos.length > 0) {
            advancedSuccess.textContent = `${archivosValidos.length} archivo(s) válido(s) listo(s) para subir.`;
            advancedSuccess.style.display = 'block';
        }
    }

    function validarArchivo(archivo) {
        if (!archivo) {
            mostrarError('No se ha seleccionado ningún archivo');
            return false;
        }

        const tiposValidos = ['image/jpeg', 'image/png', 'application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
        if (!tiposValidos.includes(archivo.type)) {
            mostrarError(`El archivo ${archivo.name} no es un tipo permitido`);
            return false;
        }

        if (archivo.size > tamanioMaximo) {
            mostrarError(`El archivo ${archivo.name} supera el tamaño máximo de 5MB`);
            return false;
        }

        return true;
    }

    function mostrarInfoArchivo(archivo, esValido) {
        const divArchivo = document.createElement('div');
        divArchivo.classList.add('file-info');
        divArchivo.textContent = `${archivo.name} (${(archivo.size / 1024 / 1024).toFixed(2)} MB) - ${esValido ? 'Válido' : 'Inválido'}`;
        if (esValido) {
            divArchivo.classList.add('valid');
        } else {
            divArchivo.classList.add('invalid');
        }
        fileList.appendChild(divArchivo);
    }

    function mostrarError(mensaje) {
        advancedError.textContent = mensaje;
        advancedError.style.display = 'block';
    }

    window.subirArchivos = function () {
        const archivos = advancedFileInput.files;
        if (archivos.length === 0) {
            mostrarError('No hay archivos para subir');
            return;
        }
        uploadProgress.style.display = 'block';
        uploadProgress.value = 0;
        let progreso = 0;
        const intervalo = setInterval(function () {
            progreso += 10;
            uploadProgress.value = progreso;

            if (progreso >= 100) {
                clearInterval(intervalo);
                uploadProgress.style.display = 'none';
                advancedSuccess.textContent = 'Archivos subidos con éxito';
                advancedSuccess.style.display = 'block';
            }
        }, 100);
    }
})

/*

error

*/