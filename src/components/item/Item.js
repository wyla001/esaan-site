import React from "react";
import menuStyles from "../../pages/MenuStyling.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';

function Item(props) {

    let vegSpec
    if (props.vegetarian === true) {
        vegSpec = "(v)"
    } else {
        vegSpec = "";
    }

    let gfSpec 
    if (props.glutenFree === true) {
        gfSpec = "(gf)"
    } else {
        gfSpec = "";
    }

    let extraTime 
    if (props.extraTime === true) {
        extraTime = <FontAwesomeIcon size='sm' icon={faClock}> </FontAwesomeIcon>;
    } else {
        extraTime= "";
    }

    let price 
    if (props.price === 0) {
        price = "";
    } else {
        price = props.price;
    }
    
    return (
        <div className='menu__item'> 
        <div className='menu__bulk'> 
             <p className='title'> {props.title} <span className='specification'> {vegSpec} </span> <span className='specification'> {gfSpec} </span>  <span className='specification'> {extraTime} </span> </p> 
             <p className='description'> {props.description} </p>
        </div> 
        <div className='price'> 
            <span> {price} </span>
        </div>  
    </div>
    )
}

export default Item;