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
            <FontAwesomeIcon className="delay1" icon={faFacebook} />
            <FontAwesomeIcon className="delay2" icon={faInstagram} />
            <FontAwesomeIcon className="delay3" icon={faGithub} />
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