import React from 'react';
import myImage from './Me.jpg'; 
import 'bootstrap-icons/font/bootstrap-icons.css';

const Card = () =>{
    return(
        <div class="card">
        <img src={myImage} class="card-img-top" alt="..."/>
        <div class="card-body">
            <h1 class="card-title">Priyanshi Prateek</h1>
            <p class="card-text">Lucknow, Uttar Pradesh</p>
            <h2>About Me</h2>
            <p class="card-text">Hello! I'm Priyanshi. I thrive on challenges and constantly set goals for myself, so I have something to strive towards. I'm not comfortable with settling, and I'm always looking for an opportunity to do better and achieve greatness.</p>
        </div>
        <div class="card-body">
            <a href="https://www.linkedin.com/in/priyanshi-prateek-7b7b3b1b3/" class="card-link"><i class="bi bi-linkedin"></i></a>
            <a href="https://github.com/PriyanshiPrateek812" class="card-link"><i class="bi bi-github"></i></a>
        </div>
        </div>
    )
}
export default Card;