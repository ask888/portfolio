import React from 'react';
import Slider from './Slider'

let  sliderWords = ['HTML5', 'CSS3', 'JavaScript', 'ReactJS', 'Bootstrap', 'GitHub', 'Canvas'];

export default class Header extends React.Component{
    render(){
        return(
            <header>
                <div id='header-wrapper' className="header-wrapper">
                    <div className="logo"><a href="https://www.linkedin.com/in/maya-pogrebnyak-919833a4/">Maiia Pohrebniak</a></div>
                    <nav>
                        <ul className="nav-list">
                            <li><a href="#portfolio-link" className="scroll">Portfolio</a></li>
                            <li><a href="#skills-link" className="scroll">Skills</a></li>
                            <li><a href="#contacts-link" className="scroll">Contact Me</a></li>
                            <li><a href="#about-me-link" className="scroll">About Me</a></li>
                        </ul>
                    </nav>
                </div>

                <Slider sliderData={sliderWords} />

            </header>
        )
    }
}