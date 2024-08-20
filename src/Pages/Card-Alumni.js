import React from 'react';
import './Card-Alumni.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faInstagram} from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Alumni from './Alumni';
const Card = (props) => {
  return (
    <div className="card-alumni">
        <img src={props.image} alt="" />
        <h2>{props.name}</h2>
        <div className="bottom-Alumni">
            <div className="items-Alumni">
              <div className="icons-Alumni">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon className="delay1" icon={faFacebook} color='white' />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon className="delay2" icon={faInstagram} color='white'/>
                </a>
                <a href="https://Linkedin.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon className="delay3" icon={faLinkedin} color='white'/>
                </a>
              </div>
            </div>
            <di className="button-Alumni"><button></button></di>
        </div>
    </div>

  );
};

export default Card-Alumni;