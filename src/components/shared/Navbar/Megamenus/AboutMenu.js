import React from 'react'
import { FormattedMessage } from 'react-intl'
import { Link } from 'react-router-dom'
import './megamenu.scss'
import { AboutData, AboutData2 } from '../data'
import Carousel from 'react-elastic-carousel'

const AboutMenu = () => {

    return (
        <div className='nav-megamenu about-megamenu'>
            <div className="menu-links">
                <h5><FormattedMessage id='about' defaultMessage='About' /></h5>
                <div className="inner-links">
                    {AboutData.map((props) => {
                        return(
                            <Link to={props.to} className='menu-main-link'>
                                <div className="bg" style={{background: `${props.bg}`}}></div>
                                <div className="main">
                                    <div className="icon-container">
                                        <div className="icon" style={{content: `url(${props.icon})`}}></div>
                                    </div>
                                    <div className="block">
                                        <h6>{props.title}</h6>
                                    </div>
                                </div>
                            </Link>
                        )
                    })}
                </div>
            </div>

            <div className="right">
                <Carousel className="slider" 
                    itemsToShow={1}
                >
                    {AboutData2.map((props) => {
                        return(
                            <div className="slider-item">
                                <div className="icon-container">
                                    <div className="icon icon1" style={{content: `url(${props.icon})`}}></div>
                                    <div className="icon icon2" style={{content: `url(${props.iconGreen})`}}></div>
                                    <div className="icon icon3" style={{content: `url(${props.iconRed})`}}></div>
                                    <div className="icon icon4" style={{content: `url(${props.iconBlue})`}}></div>
                                    <div className="border"></div>
                                    <div className="circle"></div>
                                </div>
                                <h6>{props.title}</h6>
                                <p>{props.text}</p>
                            </div>
                        )
                    })}
                </Carousel>
            </div>
        
        </div>
    )
}

export default AboutMenu
