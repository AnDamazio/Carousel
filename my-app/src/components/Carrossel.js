import React from 'react';

class Carrossel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {images: [], index: 0}
    }

    componentDidMount() {
        this.timer = setInterval(
            () => {
        
         if(this.props.images.length > this.state.index + 1) {
            this.setState({
                index: 1
            })
         }else {
             this.setState({
                 index: 0
             })
         }
            },
            2000
        )
    }


   render() {
    return (<img src={this.props.images[this.state.index]} alt='teste' />)
   }
}

export default Carrossel;