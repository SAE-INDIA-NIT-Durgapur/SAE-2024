import React from 'react'
import './Alumni.css'
import Card from '../Pages/Card.js'
import Wave from './Wave.js';
import './Wave.css';
import author  from '../Images/author.jpeg';
const Alumni = () => {
    const cardsData = [
        {  title: 'Name', image: author, link:'#'},
        {  title: 'Name', image: author, link:'#'},
        {  title: 'Name', image: author, link:'#'},
        {  title: 'Name',image: author, link:'#'},
        {  title: 'Name', image: author , link:'#'},
        {  title: 'Name' , image: author, link:'#'},
        {  title: 'Name' , image: author, link:'#'},
        {  title: 'Name' , image: author, link:'#'},
        {  title: 'Name' , image: author, link:'#'},

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
            <div className="content">
                <p>The 2023 and 2024 alumni have significantly contributed to the club's esteemed reputation through their diligent efforts in hosting a range of successful events, including SDV, TEDx, Aarohan, Drag & Drift, F.I.S.T., webinars, and various interactive workshops.
                Their involvement in the club's Annual Magazine, Autopia, and videos on cutting-edge technology for Cryptech has been remarkable.
                Furthermore, their participation in national events such as Baja India has been noteworthy.
                Their contributions have played a crucial role in the club's exceptional achievements during their tenure, thereby ensuring the perpetuation of its legacy.</p>
            </div>
            <div className="cards">
            {cardsData.map(card => (
                <Card  name={card.title} image={card.image} link={card.link}/>
            ))}
            </div>
        </div>
        </>
  );
};

export default Alumni
