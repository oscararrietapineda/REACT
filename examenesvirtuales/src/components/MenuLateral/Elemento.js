import React from 'react';
 
function Elemento(props) {
    return (
      <div>
          <a href="posts.html" className="list-group-item">
          <span className="glyphicon glyphicon- " aria-hidden="true"></span> {props.Titulo} 
          <span className="badge"></span> {props.Cantidad}</a>
      </div>
    );
  }
  
export default Elemento;
