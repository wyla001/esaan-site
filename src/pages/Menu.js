import React from 'react';
import { useState } from 'react';
import menuStyling from './MenuStyling.css';
import menuImage1 from '../assets/esaan - photo 1 1.png';
import menuImage2 from '../assets/esaan - photo 2 1.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faFilePdf } from '@fortawesome/free-regular-svg-icons';
import Item from '../components/item/Item.js';
import data from '../dinnerdata.js';
import Bevitem from '../components/item/Bevitem.js';
import bevdata from '../beveragedata.js';


function Menu () {

    const [toggleState, setToggleState] = useState(1);
    const toggleTab = (index) => {
        setToggleState(index);
    };

    const drafts = bevdata.map (item => {
        if (item.category === "drafts") {
            return (
                <Bevitem 
                    key={item.id}
                    {...item}
                />
            )
        }
    })

    const wines = bevdata.map (item => {
        if (item.category === "wine") {
            return (
                <Bevitem
                    key={item.id}
                    {...item}
                />
            )
        }
    })

    const bottles = bevdata.map (item => {
        if (item.category === "bottle") {
            return (
                <Bevitem
                    key={item.id}
                    {...item}
                />
            )
        }
    })

    const softdrinks = bevdata.map (item => {
        if (item.category === "beverages") {
            return (
                <Bevitem
                    key={item.id}
                    {...item}
                />
            )
        }
    })






    const appetizers = data.map (item => {
        if (item.category === "appetizers") {
            return (
                <Item 
                    key={item.id}
                    {...item}
                />
            )
        }
    })

    const salads = data.map (item => {
        if (item.category === "salads") {
            return (
                <Item 
                    key={item.id}
                    {...item}
                />
            )
        }
    })

    const soup = data.map (item => {
        if (item.category === "soup") {
            return (
                <Item 
                    key={item.id}
                    {...item}
                />
            )
        }
    })

    const noodles = data.map (item => {
        if (item.category === "noodles") {
            return (
                <Item 
                    key={item.id}
                    {...item}
                />
            )
        }
    })

    const signature = data.map (item => {
        if (item.category === "signature") {
            return (
                <Item 
                    key={item.id}
                    {...item}
                />
            )
        }
    })

    const entrees = data.map (item => {
        if (item.category === "entrees") {
            return (
                <Item 
                    key={item.id}
                    {...item}
                />
            )
        }
    })

    

    return (
        <main className='menu__page'> 

            <section className='menu__image__container'> 
                <div className='menu__image sub__image'> 
                    <img src={menuImage1} alt="pork dish with fried rice, broccoli, and carrots" /> 
                </div>
                <div className='menu__image'>
                    <img src={menuImage2} alt="salad being mixed in large wooden bowl with tomatoes, sprouts, and green beans" /> 
                </div>
            </section>
            
            <section className='menu__selection__list'>
                <div>
                    <h1> menus </h1>
                </div>
                <div className='menu__selection__item'>
                    <a href='#menuclick' className={toggleState=== 1 ? 'menu__button active-tab' : 'menu__button'} onClick={() => toggleTab(1)} aria-label='dinner menu'> dinner </a>
                    <a href='#menuclick' className={toggleState=== 2 ? 'menu__button active-tab' : 'menu__button'} onClick={() => toggleTab(2)} aria-label='lunch menu'> lunch </a>
                    <a href='#menuclick' className={toggleState=== 3 ? 'menu__button active-tab' : 'menu__button'} onClick={() => toggleTab(3)} aria-label='drink menu'> drinks </a>
                </div>
                <div className='spice__level__description'> 
                    <p> we are happy to accommodate your spice level! please let us know if you'd prefer mild, medium, or hot.</p>
                </div>
            </section>

            <section id='menuclick' className='menu'>
                <div className='menu__container'> 

                    <div className={toggleState=== 1 ? 'dinner__menu menu-content active-content' : "dinner__menu menu-content"}> 
                        <div className='menu__category'> 
                            <h2> dinner </h2>
                        </div>

                        <div className='menu__section'>
                            <p className='menu__section__title'> appetizers </p>
                                {appetizers}
                        </div>
                        <div className='menu__section'>
                            <p className='menu__section__title'> salads </p>
                                {salads}
                        </div>
                        <div className='menu__section'>
                            <p className='menu__section__title'> soup </p>
                                {soup}
                        </div>
                        <div className='menu__section'>
                            <p className='menu__section__title'> noodles </p>
                                <div className='protein'> 
                                    <p> chicken, pork, tofu, or vegetables </p>
                                    <p> 18 </p>
                                </div>
                                <div className='protein'> 
                                    <p> beef, duck, shrimp, or crispy chicken </p>
                                    <p> 21 </p>
                                </div>
                                {noodles}
                        </div>
                        <div className='menu__section'>
                            <p className='menu__section__title'> signature </p>
                                {signature}
                        </div>
                        <div className='menu__section'>
                            <p className='menu__section__title'> entrees </p>
                                <div className='protein'> 
                                    <p> chicken, pork, tofu, or vegetables </p>
                                    <p> 18 </p>
                                </div>
                                <div className='protein'> 
                                    <p> beef, duck, shrimp, or crispy chicken </p>
                                    <p> 21 </p>
                                </div>
                                {entrees}
                        </div>

                        <div className='menu__symbols'> 
                            <p> v – vegetarian </p>
                            <p> gf – gluten free </p>
                            <p> <FontAwesomeIcon icon={faClock}> </FontAwesomeIcon> – extra prep time </p>
                        </div>
                    </div>

                    <div className={toggleState=== 2 ? 'lunch__menu menu-content active-content' : "lunch__menu menu-content"}> 
                        <div className='menu__category'> 
                            <h2> lunch </h2>
                        </div>

                        <div className='lunch__menu__section'>
                            <li className='lunch-offer'> a new lunch menu will be coming soon. for the time being, we are offering 15% off your total order! </li>
                            <li> tuesday – sunday  </li>
                            <li> 11am – 3pm </li> 
                        </div>
                    </div>

                    <div className={toggleState=== 3 ? 'drink__menu menu-content active-content' : "drink__menu menu-content"}> 
                        <div className='menu__category'> 
                            <h2> wine & beer </h2>
                        </div>
                        <div className='menu__section'>
                            <p className='menu__section__title'> draft </p>
                                {drafts} 
                        </div>

                        <div className='menu__section'>
                            <p className='menu__section__title'> wine </p>
                                {wines}
                        </div>

                        <div className='menu__section'>
                            <p className='menu__section__title'> bottle </p>
                                {bottles}
                        </div>

                        <div className='menu__section'>
                            <p className='menu__section__title'> soft drinks </p>
                                {softdrinks}
                        </div>

                        <div className='happyhour__section'> 
                            <div> 
                                <h2> happy hour </h2>
                                <li className='italics'> 3pm – 6pm </li>
                            </div>
                            <div> 
                                <li> $1 off drafts </li>
                                <li> $2 off bottles </li>
                                <li> $6 wine pours </li>
                                <li> $4 prosecco </li> 
                            </div>
                        </div>
                    </div>
                    {/* <div className='download__container'> 
                        <a href='' aria-label='pdf document of menu'> <FontAwesomeIcon size='lg' icon={faFilePdf}> </FontAwesomeIcon> </a>
                    </div> */}
                </div>
            </section>
            
        </main>

        
    )
} 

export default Menu; 
