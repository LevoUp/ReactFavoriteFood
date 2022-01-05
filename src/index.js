import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const img = "https://picsum.photos/200";

ReactDOM.render(
  <div>
    <h1 className="heading" contentEditable="true" spellCheck="false">Favorite Foods</h1>,
    <div>
      <img className="food-image" alt="Pizza" src="https://www.simplyrecipes.com/thmb/8caxM88NgxZjz-T2aeRW3xjhzBg=/2000x1125/smart/filters:no_upscale()/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2019__09__easy-pepperoni-pizza-lead-3-8f256746d649404baa36a44d271329bc.jpg"></img>
      <img className="food-image" alt="Ramen" src="https://assets.bonappetit.com/photos/5e3c7a3c866b940008106763/6:9/w_2320,h_3480,c_limit/HLY-Veggie-Ramen-16x9.jpg"></img>
      <img className="food-image" alt="Random Image" src={img + "?grayscale"} />
    </div>
  </div>,  

  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();