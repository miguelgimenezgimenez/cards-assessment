#  PRUEBA TIENDEO


**Instalar dependencias:**


    $ yarn 
    o
    $ npm install


**Ejecutar en modo Development**

    $ nvm use
    $ npm run dev
 
Ir a ``http://localhost:8080/``




# Descripcion

Al final he realizado las dos pruebas.
Para el Frontend he usado react , redux y una configuracion muy simple de Webpack.
En este proyecto he guardado la mayoria del estado de la aplicacion en el store de redux, guardando el estado de la aplicacion en el localStorage de la siguiente manera :

	``store.subscribe(() => {
	  localStorage.setItem('cardList', JSON.stringify(store.getState()))
	}) ``

La prueba de backend se puede encontrar en la carpeta de utils.

# Arquitectura:

He utilizado una arquitectura atomica para la estructura del proyecto, debido a que el proyecto es muy pequeño
solo he utilizado molecules y organisms.

### molecules

Componentes simples que estan compuestos de otros componentes sencillos

### organisms

Components que estan compuestos de molecules y componentes sencillos.


# Testing:

Para los tests unitarios he utilizado jest, testeando simplemente las acciones ,los reducers, y el componente de la prueba de backend. No he tenido tiempo para testear los componentes.

