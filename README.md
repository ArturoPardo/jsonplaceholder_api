# Consultas Api Rest Externa
* https://jsonplaceholder.typicode.com/photos
* https://jsonplaceholder.typicode.com/posts

## Función
Consultas y llamadas a Api externa.

## Desarrollo
* Para las imágenes (photos): Obtenemos un número aleatorio entre 10 y 20. Será el numero de fotos a mostrar. Para cada valor de este numero asignamos otro valor aleatorio, esta vez un random entre 1 y 5000 (numero de fotos total del Api). Añadimos este resultado a un array y cogemos esos números como ids de photos a mostrar.
* Filtro de los posts y restaurar filtro.
* Funcion interna. De un array escondido obtiene 4 numeros sin que se repitan y extrae uno de ellos.