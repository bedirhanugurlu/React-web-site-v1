import React from 'react';
import '../../App.css';
import ImageSlider from '../ImageSlider';
import { SliderData } from '../SliderData';
import Footer from '../Footer';
import Vector from '../Vector';
import Vectorr from '../Vectorr';
import Vectorr2 from '../Vectorr2';


function Services() {
    return (
        <>
           <ImageSlider slides={SliderData} />
           <Vector />
           <Vectorr />
           <Vectorr2 />
            <Footer />
        </>
    );
}

export default Services;