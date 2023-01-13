import * as React from 'react';
import MuiImageSlider from 'mui-image-slider';
import './Home.css';

const images = [
    './images/pic2.jpg',
    './images/pic4.jpg',
    './images/pic5.jpg',
];
export default function ImageSlider() {
    return(
        <>
        <div className='topdiv1'>
        <MuiImageSlider className='topdiv1' images={images}/>
        </div>
        </>
    );
}
