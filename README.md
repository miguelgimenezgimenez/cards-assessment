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



# Prueba logica:


### Tarjetas de fidelidad:

Las funcionalidades que implementaria para la aplicacion son :

1) Opcion de localizar mediante GPS la posicion del usuario, y mostrar  Supermercado/s que se encuentren en las proximidades.

2) Introduccion manual del nombre del supermercado con autocomplete mostrando matches de las tiendas disponibles.


### Lecturas Tiendeo.

En España se leen 12 millones de catalogos al mes , de los cuales el 10% son comprados , por lo que suponemos que se producen 10.8 millones de lecturas organicas.
En España hay una poblacion de 46.56 millones de habitantes, por lo que se producen 0.23 lecturas organicas de catalogos por habitante al mes. 

## Hipotesis 1

Suponiendo un crecimiento lineal del numero de lecturas y que no importa el sexo del lector una forma de calcular los lectores seria la siguiente:

Se han conseguido 0.23  lecturas por habitante en 6 años que Tiendeo esta en España.

Suponiendo un crecimiento lineal esto supone que se consigue un incremento de 0.03833 lectores al año.

Por lo que si en Japon se consigue el mismo crecimiento lineal, suponiendo que Tiendeo lleva 4 años en Japon obtendremos una cira  0.153 lecturas de catalogos por habitante.

Japon tiene 127 millones de habitantes por lo que esta sencilla y probablemente incorrecta hipotesis tendriamos una cifra de **19.47 millones** de lecturas de catalogos al mes.

## Hipotesis 2

Una hipotesis mas real se conseguiria calculando el crecimiento real del numero de lecturas ( esta curva dependeria mucho del marketing, y de si el numero de personas que leen catalogos va a dejar de crecer o va a continuar creciendo si se aplican las tecnicas adecuadas de marketing y publicidad).

Tambien tendriamos que calcular cual es la demografia de la poblacion que lee los catalogos en españa para poder realizar un calculo mas exacto estableciendo un ratio entre la demografia de Japon y España.

**Ejemplo de calculo para mujeres de 18-25 años:**

Suponiendo que en España que se lean 0.04 catalogos por mujer de entre 18-25 años 

suponiendo que la curva de crecimiento para este grupo demografico fuese: **f(años)= K * ln(1 + años)**

en 6 años : 0.04 = K * ln(1 + 6) => K = 0.022324
en 4 años:   X = 0.022324 * ln(1 + 4) => X = 0.0359 lecturas por mujer de 18-25 años en Japon en 4 años.

Este calculo se repetiria para todos los grupos demograficos dando a un resultado mas preciso que la hipotesis 1.




