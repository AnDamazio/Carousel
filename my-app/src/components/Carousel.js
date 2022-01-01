import React from 'react';
import Logo from './Logo';
import './Carousel.css';
import img1 from '../images/img1.svg';
import img2 from '../images/img2.svg';
import img3 from '../images/img3.svg';
import triangleTop1 from '../images/triangleTop1.svg';
import triangleTop2 from '../images/TriangleTop2.svg';
import triangleTop3 from '../images/TriangleTop3.svg';
import triangleBottom1 from '../images/triangleBottom1.svg';
import triangleBottom2 from '../images/TriangleBottom2.svg';
import triangleBottom3 from '../images/TriangleBottom3.svg';
import square1 from '../images/Square1.svg';
import square2 from '../images/Square2.svg';
import square3 from '../images/Square3.svg';
import rectangle1 from '../images/Rectangle1.svg';
import rectangle2 from '../images/Rectangle2.svg';
import rectangle3 from '../images/Rectangle3.svg';

let images = [img1, img2, img3];
let trianglesTop = [triangleTop1, triangleTop2, triangleTop3];
let trianglesBottom = [triangleBottom1, triangleBottom2, triangleBottom3];
let squares = [square1, square2, square3];
let rectangles = [rectangle1, rectangle2, rectangle3];

class Carousel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {images: images, index: 0}
    }

    componentDidMount() {
        
        this.timer = setInterval(

            () => {
         
         if(this.state.images.length > this.state.index + 1) {
            this.setState({
                index: this.state.index + 1
            });
         }else {
             this.setState({
                 index: 0
             });
         }
            },
            5000
        );

        for (let index = 0; index < this.state.images.length; index++) {
            let bubble = document.createElement("div")
            bubble.setAttribute('class', 'bubble')
            bubble.setAttribute('id', index)
            document.getElementById("bubbleGroup").setAttribute('class', 'bubbleGroup')
            document.getElementById("bubbleGroup").appendChild(bubble)
            console.log('oi')
           }          
        
    }

    componentWillUnmount() {
        document.getElementById('bubbleGroup').innerHTML = "";
    }

    componentDidUpdate() {
        let children = Array.from(document.getElementById("bubbleGroup").children);

        console.log(this.state.index)

        children.forEach((value)=> {
            

            if(value.getAttribute('id') == this.state.index) {
                value.style.border = "1px solid #000000"
                value.style.background = "#555555"
            }else {
                value.style.border = "1px solid #555555"
                value.style.background = ""
            }
        })
    }


   render() {
    return (
        <>
            <div style={{position: "relative"}}>
            <img className="triangleTop" src={trianglesTop[this.state.index]} alt='carrousel'/>
            <img className="carouselImage" src={this.state.images[this.state.index]} alt='Imagem em carrossel' />
            <img className="triangleBottom" src={trianglesBottom[this.state.index]} alt=''/>
            <img className='squareBottom' src={squares[this.state.index]} alt=''/>
            <img className='rectangleBottom' src={rectangles[this.state.index]} alt=''/>
            <Logo />
            </div>
        </>
    )
   }
}

export default Carousel;
