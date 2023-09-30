import React from 'react';
import infoStyling from './InfoStyling.css'
import infoPhoto from '../assets/Siwaporn & Ben - Portland Press Herlad - photo by Gabe Souza  1.png'

function Info () {


    const boldStyle1 = {
        fontWeight: '600'
    }

    return (
        <main className='info__main'> 
            <section className='info__about'>
                <div className='info__about__image'> 
                    <img src={infoPhoto} alt='Chef Siwaporn & son Ben Boonseng cooking in the kitchen' />
                </div>
                <div className='info__about__text'> 
                <div className='info__title'>
                    <h1> info & hours </h1>
                </div>
                    <div className='info__about__details'>
                        <p style={boldStyle1}> a family owned restaurant with origins from northeast thailand </p>
                        <p> started by chef siwaporn roberts and her son, ben boonseng, esaan provides an authentic thai experience with dishes that evoke a home cooked meal. </p>
                        <p> each of our recipes were crafted by chef roberts’ and her mother after numerous years of cooking in local restaurants. </p>
                        <p> keeping with tradition, we serve all the beloved thai dishes, but strive to incorporate new specials rarely found at your typical thai restaurant. </p>
                        <p> in 2023, we were lucky enough to expand to a new location in the downtown portland area. </p>
                        <p> we now offer a uniquely selected wine & beer menu and invite guests to dine with us for lunch and dinner in our new relaxed space. </p>
                    </div>
                </div>
            </section>
            <section className='info__hours'> 
                <div className='info__hours__text'> 
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
                            <h3> contact </h3>
                            <li> 207-536-0752 </li>
                            <li> thaiesaanportland@gmail.com </li>
                        </ul> 
                    </div>
                    <div> 
                        <ul> 
                            <h3> location </h3>
                            <li> 65 portland st. portland, me</li>
                            <div className='directions'> 
                                <a className='link' href='https://goo.gl/maps/QrRT7PGQp2fbNWkH9' target='_blank' aria-label='google maps'> need directions? </a>
                            </div>
                        </ul>
                    </div>
                </div>
            </section>
            
            
        </main>
    )
}

export default Info