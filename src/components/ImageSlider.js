import React, {useState}  from 'react'
import { SliderData } from './SliderData';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';

const ImageSlider = ({ slides }) => {
const [current, setCurrent] = useState(0);
const length = slides.length;

const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
};

const prevSlide = () => {
    setCurrent(current === 0  ? length - 1 : current - 1);
};

console.log(current)

if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
}

  return (
    <section className='aboutus'>
        <section className='slider'>
        <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide} />
        <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide} />
    {SliderData.map((slide, index) => {
        return (
            <div className={index === current ? 'slide active' : 'slide'} key={index}>
            {index === current && (<img src={slide.image} alt="travel image" className='image' />)}   
            </div>
        )
        
    })}
        </section>
        <section className='blog'>
            <h1>BLOG TITLE</h1>
            <h2>Category Name</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, esse aspernatur. Assumenda, laboriosam libero omnis eius eligendi aspernatur! Alias, provident odio reiciendis nemo ut doloribus beatae ratione id, perspiciatis dolorem voluptatibus blanditiis accusamus maiores necessitatibus aliquid sequi? Modi, mollitia! Esse autem mollitia ea id expedita vero dolor debitis eos officia, quasi voluptatem dolore incidunt sed nemo possimus, quidem eius sequi. <br /> <br /></p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora consequatur molestiae quas fugit voluptates qui corporis commodi aut, inventore aliquam neque voluptatum quae, quo iusto. At adipisci quisquam aspernatur eveniet beatae illo accusantium magnam. Hic, veniam! Adipisci dolor explicabo, omnis est deserunt nam tempora natus, voluptatum ipsum autem non expedita.<br /> <br /></p>
            <div className='social'>
            <h3>Paylaş : </h3> <i class="fab fa-facebook"></i> <i class="fab fa-twitter"></i>
            </div>
        </section>
    </section>
  );
};

export default ImageSlider;