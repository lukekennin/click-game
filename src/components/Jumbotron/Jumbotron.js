import React from 'react';
import "./Jumbotron.css";


const Jumbotron = () => (
  <div className="jumbotron jumbotron-fluid">
    <div className="container text-center">
      <h1 className="display-4">click game</h1>
      <p className="lead">click on an image to add points; don't click an image twice.</p>
    </div>
  </div>
);

export default Jumbotron;