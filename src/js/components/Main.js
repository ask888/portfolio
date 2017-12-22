import React from 'react';
import AboutMe from './AboutMe';


// let path = '../../img/';
let path = '/portfolio/public/img/';
let portfolioLinks = [

    {
        backgroundUrl: 'img1',
        backgroundText: 'The page is basically made with CSS Framework - Bootstrap4. It is quiet responsive. The' +
        ' slider was made with JQuery',
        link: 'https://ask888.github.io/bootstrap/'
    },
    {
        backgroundUrl: 'img2',
        backgroundText: 'JQuery slider',
        link: 'https://ask888.github.io/gallery/'
    },
    {
        backgroundUrl: 'img3',
        backgroundText: 'This is a typical landing page. It is responsive. All iframes are included.',
        link: 'https://ask888.github.io/tourism/'
    },
    {
        backgroundUrl: 'img4',
        backgroundText: 'Simple page with all styles and animation',
        link: 'https://ask888.github.io/landing-page/'
    },
    {
        backgroundUrl: 'img5',
        backgroundText: 'Jquery TODO list',
        link: 'https://ask888.github.io/TODO-list/'
    },
    {
        backgroundUrl: 'img6',
        backgroundText: 'React/Node chat app that was created without Redux. It is fully resizable, because we created this app using Bootstrap-4',
        link: 'https://chat-test-snail.herokuapp.com/'
    },
    {
        backgroundUrl: 'img7',
        backgroundText: 'Created very simple paint using Canvas',
        link: 'https://ask888.github.io/canvas_paint/'
    },
    {
        backgroundUrl: 'img8',
        backgroundText: 'Teamwork: React/Redux Bookshop',
        link: 'https://ask888.github.io/canvas_paint/'
    }
]


export default class Main extends React.Component{
    render(){
        console.log(portfolioLinks[0].backgroundUrl);
        return(
            <main>
                <div id='portfolio-link' className="portfolio-wrapper">
                {portfolioLinks.map((item, index1) => {
                    var imgUrl = path + item.backgroundUrl + '.png';
                    console.log(imgUrl);
                    return(
                        <div className='img-wrapper'>
                            <a href={item.link}
                               key={index1} className='img-block'>
                                <img src={path + item.backgroundUrl +".png"} alt=""/>
                                <div className="portfolio-text">
                                    {item.backgroundText}
                                </div>
                            </a>
                        </div>
                    )
                } )}
                </div>
                <div id='skills-link' className="skills-wrapper">
                    <h2 className='skills-title'>I am good at ...</h2>
                    <ul className="skills-list">
                        <li>HTML5</li>
                        <li>CSS3</li>
                        <li>JavaScript</li>
                        <li>ReactJS</li>
                        <li>Redux</li>
                        <li>Bootstrap</li>
                        <li>Materialize</li>
                        <li>JQuery</li>
                        <li>Git</li>
                        <li>Webpack</li>
                        <li>Sass</li>
                        <li>&amp; more</li>


                    </ul>

                </div>
                <AboutMe />


            </main>
        )
    }
}