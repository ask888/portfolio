import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import Particles from 'react-particles-js';






export default class App extends React.Component {



    render() {
        return (
            <div className="container">
                <Particles className='particles-block'
                           params = {{
                               particles: {
                                   line_linked: {
                                       shadow: {
                                           enable: true,
                                           color: "#3CA9D1",
                                           blur: 1
                                       }
                                   }
                               }
                           }}
                />
                <Header />
                <Main />


                <Footer />
            </div>
        )
    }
}
