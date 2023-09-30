import React from "react";
import menuStyles from "../../pages/MenuStyling.css";

function Bevitem(props) {

    let description = props.description;

    let glassPrice = props.price

    let bottlePrice = props.priceBottle 

    if (props.priceBottle === 0) {
        bottlePrice = ""
    } else {
        bottlePrice = "/ " + props.priceBottle;
    }



    return (
        <div className='menu__item'> 
            <div className='menu__bulk'> 
                <p className='title'> {props.title}  </p> 
                <p className='bev__description'> {description} </p>
            </div> 
            <div className='price'> 
                <span> {glassPrice} {bottlePrice} </span>
            </div>  
        </div>
    )    
}

export default Bevitem;