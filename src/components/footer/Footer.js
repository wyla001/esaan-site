import React from 'react';
import spoon from '../../assets/spoon 1.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import FooterStyles from "./FooterStyles.css"


function Footer() {
    return (
            <footer>

                <div className='footer__container'> 
                    <div className='footer__info hide__mobile'> 
                        <p> 65 portland st. portland, me </p>
                        <p> thaiesaanportland@gmail.com </p>
                        <p> 207-536-0752 </p>
                            <div className='footer__socials'>
                                <a href="https://www.instagram.com/thaiesaanportland/" aria-label='instagram link' style={{paddingRight: ".8rem"}} target='_blank'> <FontAwesomeIcon size='lg' icon={faInstagram}> </FontAwesomeIcon> </a>
                                <a href="https://www.facebook.com/thaiesaanportland" aria-label="facebook link" style={{paddingRight: ".8rem"}} target='_blank'> <FontAwesomeIcon size='lg' icon={faFacebook}> </FontAwesomeIcon> </a>
                                <a href="mailto: thaiesaanportland@gmail.com" aria-label="email Esaan" target='_blank'> <FontAwesomeIcon size='lg' style={{paddingRight: ".8rem"}} icon={faEnvelope}> </FontAwesomeIcon> </a>
                                <a href="tel:12075360752" aria-label="call Esaan"> <FontAwesomeIcon size='lg' style={{paddingRight: ".8rem"}} icon={faPhone}> </FontAwesomeIcon>  </a>
                            </div>
                    </div>
                        <div className='footer__image'> 
                            <img className='spoon' alt='cartoon spoon logo' src={spoon} />
                        </div>
                </div> 
            </footer>
    )
}

export default Footer;