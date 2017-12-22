import React from 'react';



export default class Footer extends React.Component{
    render(){
        return(
            <footer id='contacts-link'>
                <h2 className="footer-title">Contact Me:</h2>
                <div className="contacts-wrapper">
                    <div className="contacts-block">
                        <h3 className="contacts-title">Phone: </h3>
                        <div className="contacts-text">+38 050 906 61 62</div>
                    </div>
                    <div className="contacts-block">
                        <h3 className="contacts-title">E-mail: </h3>
                        <div className="contacts-text email">maya.pogrebnyak@gmail.com</div>
                    </div>
                </div>




                <div className='socials-wrapper'>
                    <ul className="socials-block">
                        <li><a href="https://www.facebook.com/mia.bee.988" className='socials soc-fb'  target='_blank'><i className="fa fa-facebook-square" aria-hidden="true"></i></a></li>
                        <li><a href="https://github.com/ask888" className='socials soc-git' target='_blank'><i className="fa fa-github-square" aria-hidden="true"></i></a></li>
                        <li><a href="https://www.instagram.com/mia_bee_888/" className='socials soc-insta' target='_blank'><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                        <li><a href="https://www.linkedin.com/in/maya-pogrebnyak-919833a4/" className='socials soc-linkin' target='_blank'><i className="fa fa-linkedin-square" aria-hidden="true"></i></a></li>


                    </ul>
                </div>
                <div className="copyrights-wrapper">
                    <p className="copyrights">Copyrights &copy; 2017 All Rights Reserved by Maiia Pohrebniak </p>
                </div>

            </footer>
        )
    }
}