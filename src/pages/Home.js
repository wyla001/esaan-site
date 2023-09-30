import React from 'react';
import homescreenImage from '../assets/esaan - homepage -2 1.png'
import homeStyling from './HomeStyling.css'

function Home() {

    return (
        <section className='main-body'> 
            <div className='main-image'> 
                <img src={homescreenImage} alt='Esaan dining room' />
            </div>
            <div className='home-info'>
                <div className='home-details'> 
                    
                    <div>
                        <ul> 
                            <h3> hours </h3>
                            <li> tuesday – sunday </li>
                            <li> 11am – 9pm </li>
                        </ul>
                    </div>
                    <div> 
                        <ul>
                            <h3> lunch </h3>
                            <li> 11am – 3pm </li>
                            <li className='special'> 15% off your whole order </li>
                        </ul>
                    </div>    
                    <div>
                        <ul> 
                            <h3> happy hour </h3>
                            <li> 3pm – 6pm </li>
                        </ul>
                    </div> 
                    <div>
                        <ul> 
                                <h3> location </h3>
                                <ul> 65 portland st. portland, me </ul>
                                <a className='link' href='https://goo.gl/maps/QrRT7PGQp2fbNWkH9' target='_blank' aria-label='address and google maps link'> need directions? </a>
                        </ul>
                    </div>   
                </div>

               
            </div>
        </section>
    )
}

export default Home;