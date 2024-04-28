import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faMapMarkerAlt, faFileAlt } from '@fortawesome/free-solid-svg-icons';
import TiktokImage from './assets/Tiktok.svg';
import InstagramImage from './assets/Instagram.svg';
import FacebookImage from './assets/Facebook.svg';


 
export default function Footer(){
  return(
    <footer>
      <div className="group">
        <div className='footerSection'>
          <div>
          <h2><FontAwesomeIcon icon={faPhone} /> <i>Contact</i></h2>
          <p>Telephone: 0123 456 789</p>
          <p>Email: BookLandFake@hotmail.com</p>
        </div>
        <div className='middle'>
          <h2><FontAwesomeIcon icon={faMapMarkerAlt} /> <i>Head Office</i></h2>
          <p>Head Office: 21 Jump Street</p>
          <p>Post Code: B88 619</p>
        </div>
        <div>
          <h2><FontAwesomeIcon icon={faFileAlt} /> <i>Terms and Condition</i></h2>
          <p><a href="#">Click and Colloct</a></p>
          <p><a href="#">Payment Methods</a></p>
          <p><a href="#">Online delivery</a></p>
        </div>
        </div>
        <div className='iconsgroup'>
          <h2><i>Follow Us</i></h2>
          <div className='Icon'><a href="#"><img src={FacebookImage} alt="facebook" height="30px" /></a></div>
          <div className='Icon'><a href="#"> <img src={InstagramImage} alt="instagram" height="30px" /></a></div>
          <div className='Icon'><a href="#"><img src={TiktokImage} alt="Cart" height="30px" /></a></div>
        </div>
      </div>
      <div className='copyright'>&copy; {new Date().getFullYear()} BookLand. All rights reserved.</div>
    </footer>
  )
}
