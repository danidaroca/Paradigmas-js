//muestra en consola el json de una api de jsonplaceholder
//utiliza metodo fetch
//utiliza async / await
//utiliza callback clasic


// 1. El Callback: Esta vez, además de la consola, lo mostramos en la web
function mostrarEnPantalla(datos) {
  // Lo mostramos en la consola como pediste
  console.log("¡Los datos llegaron del servidor!");
  console.log(datos);
  
  // Buscamos el espacio vacío que dejamos en el HTML
  const cajaResultado = document.getElementById('resultado');
  
  // Le metemos el texto del JSON adentro (por ejemplo, el título)
  cajaResultado.innerHTML = "<strong>Título recibido:</strong> " + datos.title;
}

// 2. La función que busca los datos (El Mensajero)
async function obtenerDatos(miCallback) {
  try {
    const respuesta = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    const json = await respuesta.json();
    
    // Entregamos los datos al callback
    miCallback(json);
  } catch (error) {
    console.error("Hubo un error:", error);
  }
}

// 3. Buscamos el botón en el HTML
const boton = document.getElementById('botonCargar');

// Le decimos: "Cuando te hagan 'click', ejecuta obtenerDatos y pásale el callback"
boton.addEventListener('click', function() {
  obtenerDatos(mostrarEnPantalla);
});



