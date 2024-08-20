import React from 'react';
import './Card.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faInstagram} from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
const Card = (props) => {
  return (
    <div className="card-alumni">
        <div className="icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon className="delay1" icon={faFacebook} color='black' />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon className="delay2" icon={faInstagram} color='black'/>
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon className="delay3" icon={faGithub} color='black'/>
            </a>
        </div>
        <img src={props.image} alt="" />
        <div className="bottom">
            <h2>{props.name}</h2>
            <button></button>
        </div>
    </div>

  );
};

export default Card;