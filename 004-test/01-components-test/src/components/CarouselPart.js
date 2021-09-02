import React from 'react';
import { Carousel } from 'react-bootstrap';

import Img01 from '../images/Capa-1.png';
import Img02 from '../images/Capa-2.png';
import Img03 from '../images/Capa-3.png';

function CarouselPart() {

    // const Img01 = '';
    // const Img02 = '';
    // const Img03 = '';

    return (
        <div>
            <Carousel fade class='carousel'>
                <Carousel.Item>
                    <img
                        className="d-block w-100 carouselImgs"
                        src={Img01}
                        alt="First slide"
                    />
                    <Carousel.Caption >
                        <h1 class='carouselTitle'>Medical Center</h1>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 carouselImgs"
                        src={Img02}
                        alt="Second slide"
                    />

                    <Carousel.Caption >
                        <h1 class='carouselTitle'>Medical Center</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 carouselImgs"
                        src={Img03}
                        alt="Third slide"
                    />

                    <Carousel.Caption >
                        <h1 class='carouselTitle'>Medical Center</h1>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default CarouselPart
