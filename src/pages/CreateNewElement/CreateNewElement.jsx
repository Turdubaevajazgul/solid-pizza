
import { useEffect, useState } from 'react';
import PizzaCard from '../../components/pizzaCard/PizzaCard';

function CreateNewElement() {
 
    return (
        <div className="container page" >
            <h1 className="text-center">Create new Element</h1>
            <form className='CreatePage'>
                <input type="text" placeholder="title" />
                <input type="text" placeholder="price" />
                <input type="text" placeholder="https://cdn.dodostatic.net/static/Img/Products/c940c5751e6d420e997d86c26a8ba16f_366x366.jpeg" />
                <textarea placeholder="description" ></textarea>
                <input type="radio" />
                <input type="radio" />
                <button  className="btn"> create</button>
        
            </form>
        </div>

    )
}
export default CreateNewElement;
