import './home.css';
import img from '../props/img2.png';
import Buttons from '../button/button';

function Home() {
  return (
    <div id='home' className='container home-container'>
      <div className='logo'>
        <div className='hover-show active'>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
        </div>
        <img src={img} alt='' />

      </div>
      
      <Buttons />
    </div>
  );
  
}


export default Home;