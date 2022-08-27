<div class="body">
DESPLIEGUE DE LA APLICACION EN GITHUB PAGES

1. Instalar el modulo <span class="npm-module">npm install gh-pages --save-dev</span>

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
7. Ejecutar <span class="npm-module">npm run deploy</span>

</div>


<style>

    *{
        font-family: Menlo, Monaco, "Courier New", monospace;
        color: white;
  font-family: "Courier New";
  line-height: 1.45;
  max-width: 48rem;
  padding: .25rem;
   background-color: #222;
  min-height: 100%;
    }

    .npm-module{
        color: green
    }
   
    </style>

