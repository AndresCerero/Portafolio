import "./Proyectcard.scss";

const Proyectcard = (props) => {
  
  return (
    <div className='Projects__Slider__Card'>
      <img src={props.img} className='Projects__Slider__Card__Img' />
      <a href={props.enlace} target="_blank" rel="noopener noreferrer">
        <button className='Projects__Slider__Card__Button'>Deploy</button>
      </a>
    </div>
  );
};

export default Proyectcard;
