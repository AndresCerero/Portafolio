import css from '../../public/Assets/CSS.svg'
import html from '../../public/Assets/Html.svg'
import js from '../../public/Assets/JS.svg'
import SASS from '../../public/Assets/Sass.svg'
import React from '../../public/Assets/React.svg'



import Tienda from '../../public/Assets/Tienda.png'
import TODO from '../../public/Assets/Todo.png'

const Data = [
  {
    name: "Tienda",
    descripcion:
      "Durante el Curso de React.js con Vite.js y TailwindCSS, desarrollé un proyecto educativo en el que exploré varias tecnologías y conceptos clave. Utilicé React Router DOM para implementar un enrutamiento eficiente y mejorar la navegación en la aplicación. Además, integré una Fake Store API para consultar datos y mostrar productos simulados. Para gestionar el estado global de la aplicación, implementé un contexto global, lo que me permitió compartir datos entre componentes de manera sencilla. En resumen, este proyecto me proporcionó una experiencia práctica valiosa en la construcción de aplicaciones web con React.js, Vite.js y TailwindCSS, junto con importantes conceptos como el enrutamiento, el consumo de una API y el uso de un contexto globa",
    imagen:
      Tienda,
    tecnologias: [
      css,
      html,
      js,
      React
    ],
    enlace:"https://andrescerero.github.io/Shopy/",
  },
  {
    name: "Todo",
    descripcion:
      "Durante el Curso de React.js, desarrollé un proyecto en el que exploré varios conceptos fundamentales. Utilicé el local storage para almacenar datos localmente y lograr persistencia en la aplicación de tareas. Además, implementé custom hooks para encapsular lógica reutilizable y mejorar la modularidad del código. En cuanto a la organización de archivos, adopté una estructura clara y escalable para facilitar el mantenimiento y la colaboración en el proyecto. Además, utilicé el contexto global de React con el fin de compartir datos entre componentes de forma eficiente. Para crear una experiencia fluida, también empleé React Portals para crear un modal de edición de tareas. En resumen, este proyecto me permitió adquirir experiencia práctica en el desarrollo de una aplicación de gestión de tareas con React.js, utilizando conceptos como local storage, custom hooks, organización de archivos, uso de contexto y React Portals",
    imagen:
      TODO,
    tecnologias: [
      css,
      html,
      js,
      React
    ],
    enlace:"https://andrescerero.github.io/PruebaTest/",
  },
];

export default Data;
