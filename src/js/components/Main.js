import React from 'react';
import AboutMe from './AboutMe';

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
        backgroundText: 'Some text',
        link: 'https://ask888.github.io/landing-page/'
    }
]


export default class Main extends React.Component{
    render(){
        console.log(portfolioLinks[0].backgroundUrl);
        return(
            <main>
                <div id='portfolio-link' className="portfolio-wrapper">
                {portfolioLinks.map((item, index1) => {
                    var imgUrl = '../../img/' + item.backgroundUrl + '.png';
                    console.log(imgUrl);
                    return(
                        <div className='img-wrapper'>
                            <a href={item.link}
                               key={index1} className='img-block'>
                                <img src={"../../img/"+ item.backgroundUrl +".png"} alt=""/>
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