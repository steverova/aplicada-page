<div class="body">
DESPLIEGUE DE LA APLICACION EN GITHUB PAGES

1. Instalar el modulo <span style="color:green">npm install gh-pages --save-dev</span>

2. Agregar al package.json:

{
"homepage": "https://usuariogithub.github.io/nombre-repositorio/",
"name": "nombre-app",
"version": "0.1.0",
}

![image info](/src/assets/makdown-images/example01.png)

"scripts": {
"predeploy": "npm run build",
"deploy": "gh-pages -d build"
}

![image info](/src/assets/makdown-images/example02.png)

3. crear un repositorio en github.com
4. clonar el repositorio en la pc
5. crear proyecto o copiar los archivos del proyecto al repo local
6. hacerle push
7. Ejecutar <span style="color:green">npm run deploy</span>

</div>

