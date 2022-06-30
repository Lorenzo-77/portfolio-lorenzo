import './footer.css';
import { AiOutlineLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
//import { AiOutlineLinkedin } from "react-icons/ai";
const Footer = () =>{
    return(
        <footer>
            <a href="#" className='footer_logo'> Lorenzo Muñoz</a>
            <ul className='permalinks'>
                <li><a href="#">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#Contact">contact</a></li>
            </ul>
            <div className='footer_socials'>
                <a href="https://www.linkedin.com/in/lorennzo-mu07/" target="_blank"><AiOutlineLinkedin className="option-icon"/></a>
                <a href="https://github.com/Lorenzo-77" target="_blank"><AiFillGithub className="option-icon"/></a>
            </div>
            <div className='footer_copyright'>
                <small>&copy; 2022
                </small>
            </div>
        </footer>

    )
}

export default Footer;