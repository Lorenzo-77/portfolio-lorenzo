import './nav.css';
import {AiOutlineHome} from 'react-icons/ai';
import {AiOutlineUser} from 'react-icons/ai';
import {GiGears} from 'react-icons/gi';
import {BiMessageRoundedDots} from 'react-icons/bi';


function Navbar(){
    return(
        <div className='navigation'>
            <a href="#home">
               <AiOutlineHome className='icon active-nav'/>
            </a>
            <a href="#about">
               <AiOutlineUser className='icon '/>
            </a>
            <a href="#portfolio">
               <GiGears className='icon '/>
            </a>
            <a href="#contact">
               <BiMessageRoundedDots className='icon '/>
            </a>
        </div>
    );
}

let Icons = document.querySelectorAll('.navigation .icon');
Icons.forEach((icon)=>{
    icon.addEventListener('click',()=>{
        changeactive();
       icon.classList.add('active-nav');
    });
});
function changeactive(){
    Icons.forEach((icon)=>{
        icon.classList.remove('active-nav');
    });
}

export default Navbar;