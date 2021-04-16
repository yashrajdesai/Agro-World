import React,{useState} from 'react';
import Carousel from 'react-bootstrap/Carousel';
import {Jumbotron,Container} from "react-bootstrap";

function Slides() {
  //   const [index, setIndex] = useState(0);

  // const handleSelect = (selectedIndex, e) => {
  //   setIndex(selectedIndex);
  // };
  // activeIndex={index} onSelect={handleSelect}

  return (
    <Carousel>
      <Carousel.Item interval={1000}>
            <Jumbotron fluid className="jumbotron slide1">
                <Container >                       
                    <h1 className="agroworld">Agro World</h1>
                </Container>
            </Jumbotron>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
            <Jumbotron fluid className="jumbotron slide2">
                <Container >                       
                     <h1 className="slide-text">Buy your daily food essentials with the best quality from the best producers

                    {/* <br/>Like waiting for queues in a market wasn't cliche already? */} 
                    </h1>
                </Container>
            </Jumbotron>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
            <Jumbotron fluid className="jumbotron slide3">
                <Container >                       
                    <h1 className="slide-text">Sell your agro products directly to your potential customers without any middleman!</h1>
                </Container>
            </Jumbotron>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slides
