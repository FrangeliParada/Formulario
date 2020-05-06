(function(){
			var formulario = document.getElementsByName('formulario'),
				enlementos = formulario.elements,
				boton = document.getElementById('guardar'),
				eliminar = document.getElementById('eliminar');
		var cedula = document.getElementById("cedula"),
		 nombre = document.getElementById('nombre'),
		 apellido = document.getElementById('apellido'),
		 correo = document.getElementById('correo'),
		 tlf = document.getElementById("telefono");
		
		let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+).(\.\w{2,3})+$/;

		var aviso = function(e){

			if( tlf.value==0 ||nombre.value == 0 || apellido.value == 0 || correo.value==0 || cedula.value==0){
				alert("complete todos los campos para que sus datos sean guardados");
				e.preventDefault();
			}

			if (nombre.value.length>25||apellido.value.length>25||tlf.value.length>14||cedula.value.length>10) {
				alert("Hay algo mal en tus datos, verifícalos o vuelvelos a escribir");
				alert("Probablemente escribiste con letras o números de más");
				e.preventDefault()

			}

			if (nombre.value.length<25 && apellido.value.length<25 && tlf.value.length<14 && cedula.value.length<10 && tlf.value!=0 && nombre.value != 0 && apellido.value != 0 && !regexEmail.text(correo.value)&& cedula.value!=0 ) {
				alert("Sus todos se han guadado con éxito");
			}
		};

		boton.addEventListener("click",aviso);

		
		var eliminando = function(){
			if (nombre.value != 0||apellido.value != 0 || correo.value != 0) {
					nombre.value = null;
					apellido.value = null;
					correo.value = null;
					cedula.value = null;
					tlf.value = null;
				}

			if (formulario.radio[0]== true || formulario.radio[1]== true) {
				formulario.radio[0]= !true;
				formulario.radio[1]= !true;
			}
		};

		eliminar.addEventListener("click",eliminando);

			}())