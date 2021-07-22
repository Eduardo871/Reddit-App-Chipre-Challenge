# Reddit-App-Chipre-Challenge
<br> </br>
![proyect](https://github.com/Eduardo871/Landing-Page-Coca-Cola/blob/main/images/Screenshot%20from%202021-07-01%2011-17-39.png?raw=true)


## Sobre el proyecto

Aplicación desarrollada a lo largo de 3 dias, como prueba de desarrollo de [Chiper](www.chiper.co). 

En este desafío, he creado una aplicación básica de Reddit con React Native

Reddit es un sitio web de noticias donde los usuarios registrados pueden enviar publicaciones o enlaces a contenido que otros usuarios pueden votar y comentar. Cada una de estas publicaciones se agrupa en categorías conocidas como "subreddits".

La aplicación web debe enumerar las últimas publicaciones del subreddit r/pics.

Para obtener la lista de publicaciones de un subreddit, estuve usando la siguiente URL: https://api.reddit.com/r/pics/hot.json

Para obtener más información sobre la estructura JSON, he consultado: https://github.com/reddit/reddit/wiki/JSON 

## Tecnologías utilizadas

Algunas de las tecnologías y librerías utilizadas:

- React Native
- Express
- Css

## Concluciones
Esta es la primera vez que he trabajado con react native por eso este desafío me ha dejado un gran aprendizaje.

Al principio del proyecto me encontraba perdido y desorientado pero intenté mantener la calma para poder aprender mas sobre la api de Reddit. 
Investigué un poco en la [documentación](https://www.reddit.com/dev/api/) de Reddit y en el [enlace](https://github.com/reddit/reddit/wiki/JSON) que se me proporcionó. 
Lo primero que descubrí fue  los parametros y querys que necesito para poder realizar la tarea https://api.reddit.com/r/${Subreddit}/${Category}?limit=${Limit}&after={id del posterior al actual} & before={id del anterior al actual}

- Subreddit indica que subreddit quiero traerme de la api (cars, pics, food, etc).
- Category es la categoria a la que pertenecen las publicaciones (hot, controversial, top, new).
- Limit es la cantidad de publicaciones que quiero que me devuelava la api.
- After se le debe pasar el id de la pagina posterior a la actual (este query se usa para hacer paginación)
- Berfore se le debe pasar el id de la página anterior a la actual (este query se usa para hacer paginación)

Luego de que entendí un poco mejor la api pude empezar a realizar los componentes que iba a utilizar la app. Me costo un poco de trabajo aprender a usar los componentes de react native ya que nunca los había usado. Pero al final pude lograr terminar el proyecto con éxito.


## Instrucciones para ejecutar el proyecto
- Clone el repositorio con  *git clone https://github.com/Eduardo871/Reddit-App-Chipre-Challenge.git*
- En la carpeta Reddit-App-Chipre-Challenge ejecute *npm start*
- Se le abrirá una página web en donde le indicará en donde lo puede correr
- Para probar la App debe tener un celular que ejecute el códgo o un emulador en su computadora.
- Para ejecutarlo con el celular debemos tener la App de Expo y apuntar la cámara al código QR que nos proporciona la página web
- Para ejecutarlo en un emulador debe oprimir en donde dice # Run on Android device/emulator o #Run on iOS simulator.

