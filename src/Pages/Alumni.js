import React from 'react'
import './Alumni.css'
import Card from '../Pages/Card.js'
import Wave from './Wave.js';
import './Wave.css';
import author  from '../Images/author.jpeg';
const Alumni = () => {
    const cardsData = [
        {  title: 'Name', image: author},
        {  title: 'Name', image: author},
        {  title: 'Name', image: author},
        {  title: 'Name',image: author},
        {  title: 'Name', image: author },
        {  title: 'Name' , image: author},
        {  title: 'Name' , image: author},
        {  title: 'Name' , image: author},
        {  title: 'Name' , image: author},

    ];
    // const rows = 20;
    // const cols = 20;
    // const cells = [];
  
    // for (let i = 0; i < rows; i++) {
    //   for (let j = 0; j < cols; j++) {
    //     cells.push(<div key={`${i}-${j}`} className="grid-cell"></div>);
    //   }
    // }
    return (
      <>
      <Wave/>
        <div class="container">
            <h1>Meet Our <span>Alumni</span></h1>
            
            <div className="cards">
            {cardsData.map(card => (
                <Card  name={card.title} image={card.image} />
            ))}
            </div>
        </div>
        </>
  );
};

export default Alumni
