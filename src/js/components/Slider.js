import  React from 'react'

export default class Slider extends React.Component{
    state = {
        indexWords: 0,
        timer: 0
    }

    componentDidMount(){
        this.state.timer = setTimeout(() => {
            this.setState({indexWords : 1})
        }, 2000)

    }
    componentDidUpdate(){
        clearTimeout(this.state.timer);
        if(this.state.indexWords == this.props.sliderData.length){
            this.setState({indexWords : 0})
        }
        this.state.timer = setTimeout(() => {
            this.setState({indexWords : this.state.indexWords+1})
        }, 2000)

    }

    render(){
        return(
            <div className="main-text">
                <h1>
                    <span className= {this.state.indexWords % 2 == 0 ? "green" : "purple"}><a href="#">{this.props.sliderData[this.state.indexWords]}</a></span>

                </h1>
            </div>
        )
    }
}