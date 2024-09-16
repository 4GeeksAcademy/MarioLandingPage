import React from "react";

const Card = () => {

  //Dentro de la función flecha Card Se declara el array objeto cards para la cantidad de cartas que quiero con sus diferentes elementos (title, text,img)
  //Array cards: Contiene los datos de cada carta (título, texto y la URL de una imagen de ejemplo). Este array tiene 4 elementos, por lo que se renderizarán 4 cartas.
  const cards = [
    {
      title: 'Card title 1',
      text: 'This is the Lorem for card 1: Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod repellat suscipit omnis voluptatum optio incidunt mollitia provident at! At deleniti accusantium sint veritatis nisi! Tenetur blanditiis expedita ullam ad pariatur.',
      img: 'https://via.placeholder.com/500/325'
    },
    {
      title: 'Card title 2',
      text: 'This is the Lorem for card 2: Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod repellat suscipit omnis voluptatum optio incidunt mollitia provident at! At deleniti accusantium sint veritatis nisi! Tenetur blanditiis expedita ullam ad pariatur.',
      img: 'https://via.placeholder.com/500/325'
    },
    {
      title: 'Card title 3',
      text: 'This is the Lorem for card 3: Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod repellat suscipit omnis voluptatum optio incidunt mollitia provident at! At deleniti accusantium sint veritatis nisi! Tenetur blanditiis expedita ullam ad pariatur.',
      img: 'https://via.placeholder.com/500/325'
    },
    {
      title: 'Card title 4',
      text: 'This is the Lorem for card 4: Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod repellat suscipit omnis voluptatum optio incidunt mollitia provident at! At deleniti accusantium sint veritatis nisi! Tenetur blanditiis expedita ullam ad pariatur.',
      img: 'https://via.placeholder.com/500/325'
    }
  ];

// La función flecha devuelve el estilo de la carta de Boostrap5 y dentro el método maps 
// Para el método map: 1º se llama a la const card 2º .map(). Iteramos sobre el array cards usando map() para renderizar una carta por cada elemento del array.
// Por cada iteración, accedemos a las propiedades title, text e img para mostrar los datos correspondientes.
//Componente Card: Cada carta de Bootstrap está envuelta dentro de un div con la clase col-md-3 para que ocupe una cuarta parte del ancho en pantallas medianas (md).
//key: React necesita un key único cuando se generan componentes dinámicamente en un bucle. En este caso, usamos el índice (index) del array como key.
  return (
    <div className="container mt-4">
      <div className="row">
        {cards.map((card, index) => (
          <div className="col-md-3" key={index}>       
            
            <div className="card mb-4">
              <img src={card.img} className="card-img-top" alt={card.title} />
              <div className="card-body text-center">
                <h5 className="card-title">{card.title}</h5>
                <p className="card-text">{card.text}</p>
                <a href="#" className="btn btn-primary">Find Out More!</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


export {Card};





