import React from "react";

const Jumbotron = () => {
    return (
      <div className="container bg-light text-dark">
      <div className="jumbotron mt-4 mx-3" style={{height:'250px'}}>
        <h1 className="display-4">A Warm Welcome!</h1>
        <p className="lead">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod repellat suscipit omnis voluptatum optio incidunt mollitia provident at! At deleniti accusantium sint veritatis nisi! Tenetur blanditiis expedita ullam ad pariatur.</p>
        <button type="button" class="btn btn-primary">Call to action!</button>      
      </div>
    </div>
    );
};

export {Jumbotron}
