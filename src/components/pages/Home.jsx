import React, { useEffect, useState } from 'react';
import Lottie from 'lottie-react';
import { scroll, animate } from 'https://cdn.skypack.dev/motion@10.13.1';
import './Home.css';
import cloudAnimation from '../../Cloud.json';
import engineAnimation from '../../Engine1.json';
import ReactPlayer from 'react-player';
import AOS from 'aos'
import 'aos/dist/aos.css'
import {motion} from 'framer-motion'


AOS.init({
  duration: 500, 
  delay:100,
  easing: 'ease-out', 
});

const API = "AIzaSyBH3S2BoDSqAQt2LSbic_GTifvQn8qgqDQ";
const channelId= "UC9H4onmkThYbMHrce2PceQg";

const fetchurl = `https://www.googleapis.com/youtube/v3/search?key=${API}&channelId=${channelId}&part=snippet,id&order=date&maxResults=43`;

export const Home = () => {
  const [allvideos, setAllvideos] = useState([]);

  const[isFlipped, setIsFlipped] = useState(false)
  const[isAnimating, setIsAnimating] = useState(false)

  function handleFlip () {
    if(!isAnimating) {
      setIsFlipped(!isFlipped)
      setIsAnimating(true)
    }
  }

  useEffect(() => {
    fetch(fetchurl).then((response) => response.json()) .then((responseJson) => {
        const result = responseJson.items.map(doc => ({
          ...doc,
          Videolink: "https://www.youtube.com/embed/" + doc.id.videoId
        }));
        setAllvideos(result);
      })
      .catch((error) => {
        console.error("Error fetching YouTube videos:", error);
      });
     console.log(allvideos)
    const $cardsWrapper = document.querySelector('#cards');
    const $cards = document.querySelectorAll('.card');
    
    const numCards = $cards.length;

    $cards.forEach(($card, index0) => {
      const index = index0 + 1;
      const reverseIndex = numCards - index0;
      const reverseIndex0 = numCards - index;

      $card.style.paddingTop = `calc(${index} * var(--card-top-offset))`;
    
      scroll(
        animate($card, {
          scale: [1, 1 - (0.1 * reverseIndex0)],
        }), {
          target: $cardsWrapper,
          offset: [`${index0 / numCards * 100}%`, `${index / numCards * 100}%`],
        }
      );
    });
  }, []); 
  return (
    <div className="home-container">
     
      <section className="main">
        <div id="particles-js">
        <div className="home-content">
          <Lottie 
              animationData={engineAnimation} 
              loop={true} 
              className="responsive-lottie-hi" 
            />
          </div> 
          <div className="heading">
            <h1>SAENITD</h1>
            <p>We are the society of Automotive Engineers Collegiate Club of National Institute of Technology Durgapur</p>
          </div>
        </div>
      </section>

      <div className="animated-line"></div>

      <section className="boxes">
        <div id="testimonial-box" className="container">
          <div className="subheading">
            <h2>We are present at</h2>
            <p>
              Various events and fests and numerous competitions and projects, we are not tires but enthusiast enough to achieve the sky
            </p>
          </div>
          
          <div className="card-container">
            <div className="card">
              <div className="content">
                <div className="back">
                  <div className="back-content">
                    <h2>TEDx</h2>
                    <br />
                    <strong>International Event</strong>
                  </div>
                </div>
                <div className="front">
                  <div className="front-content">
                    <div className="title-1">
                    The TEDx event, hosted at NIT Durgapur annually by SAE in partnership with LC, is a globally recognized platform where motivational speakers share their transformative experiences, inspiring students to expand their worldview and ignite their passions, providing actionable insights and fresh outlooks
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="content">
                <div className="back">
                  <div className="back-content">
                    <h2>SDV</h2>
                    <br />
                    <strong>Flagship Event</strong>
                  </div>
                </div>
                <div className="front">
                  <div className="front-content">
                    <div className="title-2">
                    The Self-Driving Workshop offers a practical learning experience in autonomous robotics and self-driving technology, focusing on robotic navigation and intelligent algorithms, and equips participants with the skills to build obstacle-sensing robots and apply theoretical knowledge in real-world scenarios
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="content">
                <div className="back">
                  <div className="back-content">
                    <h2>Aarohan</h2>
                    <br />
                    <strong>Annual Fest</strong>
                  </div>
                </div>
                <div className="front">
                  <div className="front-content">
                    <div className="title-3">
                    SAE-NITD and Team Aavishkar host Aarohan, Eastern India's second-largest techno-management festival, featuring innovation, technology, and creativity through competitions and expert talks, including SAE-organised events like Flying the UAV and Roboliga
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="props">
        <div id="testimonial-box" className="container">
          <div className="props-heading" >
            <h1 >Our Professors</h1>
          </div>
          <div class="hi-container">
              <div class="hi" data-aos="fade-right">
                <div class="hi-photo-apurba"></div>
                <div class="hi-title">PROF(DR.) APURBA LAYEK
                  <br/>
                  <span>Department of Mechanical Engineering</span></div>
              </div>
              <div class="hi" data-aos="fade-up">
                <div class="hi-photo-niloptal"></div>
                <div class="hi-title">PROF(DR.) NILOPTAL BANERJEE
                  <br />
                  <span>Department of Mechanical Engineering</span></div>
              </div>
              <div class="hi" data-aos="fade-left">
                <div class="hi-photo-tapas"></div>
                <div class="hi-title">PROF(DR.) TAPAS KUMAR SAHA
                  <br />
                  <span>Department of Electrical Engineering</span></div>
              </div>
            </div>
        </div>  
      </section>

      <section className="about">
        <div id="container-fluid">
          <div className="about-content">
          <Lottie 
              animationData={cloudAnimation} 
              loop={true} 
              className="responsive-lottie" 
            />
            <div className="about-sae" data-aos="fade-up-left">
              <h1 data-aos="fade-right">About SAE</h1>
              <p>
                The <span>SAE</span> Collegiate Club of NIT Durgapur, the only automotive club of its kind, organizes a diverse range of innovative events, interactive workshops, and enlightening lectures throughout the year, including F.I.S.T., webinars, SDV workshops, Drag and Drift Competition, and TEDX Talks.
                As a pivotal force, SAE being a part of Team Aavishkar coordinates Aarohan, the second-largest techno-management festival in Eastern India, held at NIT Durgapur.
                The club maintains a robust online presence through platforms like Instagram, LinkedIn, Facebook, and YouTube, regularly sharing technology-related content to engage automobile enthusiasts.
              </p>
            </div>

          </div>
        </div>
      </section>

      <section className="events-section data">
        <div className="hlo-sae" data-aos="fade-right">
                <h1>Events</h1>
        </div>
      </section>
      <section className='events-section-data'>
        <div id="container-fluid">
          <div className="event-content">
          <div className="fist-image ">
            <img
              src="https://github.com/Suke2004/Birthday-django-/blob/main/IMG-20240821-WA0048.jpg?raw=true"
              alt="Image"
              data-aos="fade-right"
            />
          </div>
            <div className="about-fist" data-aos="fade-up-left">
              <h1 data-aos="fade-right">F.I.S.T</h1>
              <p>
              Team SAE NIT Durgapur's "Forum for Ideas on Science and Technology" (F.I.S.T.) fosters a research-oriented culture through webinars and workshops on advanced topics like generative AI. By inviting experts, FIST bridges knowledge gaps, stimulates innovation, and empowers students to develop technology-driven solutions to real-world challenges.
              </p>
            </div>
          </div>
        </div>
         
        <div id="container-fluid">
          <div className="event-content">
          
            <div className="about-baja" >
              <h1 data-aos="fade-left">BAJA</h1>
              <p data-aos="fade-up-right">Baja SAEINDIA is a national event where university students design, build, and compete with off-road vehicles, promoting collaboration and engineering excellence.
                  NIT Durgapur's Team NDORS, comprising 25 students, achieved 38th position nationwide and 7th position among IITs and NITs. </p>
            </div>
            
            <div className="baja-image">
            <img
              src="https://saenitdgp-self.vercel.app/static/media/fullvehicle.72e6f860c848885980de.png"
              alt="Image"
              data-aos="fade-left"
            />
          </div>

          </div>
        </div>

        <div id="container-fluid">
          <div className="event-content">
          <div className="aiml-image">
            <img
              src="https://github.com/Suke2004/Birthday-django-/blob/main/IMG-20240821-WA0076.jpg?raw=true"
              alt="Image"
              data-aos="fade-right"
            />
          </div>
            <div className="about-aiml" >
              <h1 data-aos="fade-right">AI ML Workshop</h1>
              <p data-aos="fade-up-left">The workshop offers participants practical experience with AI and ML technologies, focusing on CNNs and deep learning models, to tackle real-world challenges and acquire hands-on expertise in designing neural network architectures and understanding their contemporary applications.</p>
            </div>

          </div>
        </div>
        
      </section>
      
      <section className="ytr">
        <div className="yt-sae" >
          <h1>Cryptech</h1>
        </div>
      </section>
      <section className="vid">
      <div className="video-container">
        <ReactPlayer
          className="react-player"
          controls
          url="https://youtu.be/XhYBorFI3Tg?si=aueHXYsFgZ3YdMn9"
          width="100%"
          height="100%"
        />
      </div>
    </section>

    <section>
    
    <div className="slider-container">
      <div className="slider">
        <div className="slide-track">
          <div className="slide">
          <iframe width="240" height="200" src="https://www.youtube.com/embed/j_6sNtASHgU?si=IbQz4KJwbiowu9wI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
          <div className="slide">
          <iframe width="240" height="200" src="https://www.youtube.com/embed/o7fcf5chrTo?si=-o2btWUyjNVbmeHo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
          <div className="slide">
          <iframe width="240" height="200" src="https://www.youtube.com/embed/JrXKyNwJAvQ?si=hUynYrzmMYso9Vkm" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
          <div className="slide">
          <iframe width="240" height="200" src="https://www.youtube.com/embed/-C2yRvTJ7Ss?si=94ToXJICUr0Gzd18" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
          <div className="slide">
          <iframe width="240" height="200" src="https://www.youtube.com/embed/wjw50oAJZao?si=PSfbh5MKMTMmwg53" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
          <div className="slide">
          <iframe width="240" height="200" src="https://www.youtube.com/embed/h_Qjiqtd3Vw?si=ffcTkgdxLCigK4mM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
          <div className="slide">
          <iframe width="240" height="200" src="https://www.youtube.com/embed/P1XK8_ZumVI?si=PjX1PZu-sqwigzPv" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
          <div className="slide">
          <iframe width="240" height="200" src="https://www.youtube.com/embed/1W2jI4JDNtE?si=71nlATzes1F1m8EW" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
          <div className="slide">
          <iframe width="240" height="200" src="https://www.youtube.com/embed/aTdqZOGJPDw?si=Ph8zi2VgDnVJd9GO" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
          <div className="slide">
          <iframe width="240" height="200" src="https://www.youtube.com/embed/2rcmR7O06hc?si=ynJE29GVTJ6sxE0B" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
          <div className="slide">
          <iframe width="240" height="200" src="https://www.youtube.com/embed/foSz511p7tE?si=Dl6vgwt15Q0ydxNa" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
          <div className="slide">
          <iframe width="240" height="200" src="https://www.youtube.com/embed/WkhQnTcLZ8Q?si=UVJQE3bBsssoBVbo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
          <div className="slide">
          <iframe width="240" height="200" src="https://www.youtube.com/embed/eaUhJIWH0oI?si=98LbB1BLy1P3aJyP" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
          <div className="slide">
          <iframe width="240" height="200" src="https://www.youtube.com/embed/mcDlaE0yk-Q?si=OF_2FiYEYb0v-SGX" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
          <div className="slide">
          <iframe width="240" height="200" src="https://www.youtube.com/embed/yXN0HLjVojg?si=nB0LUJHnz-lzlREC" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
          <div className="slide">
          <iframe width="240" height="200" src="https://www.youtube.com/embed/E99fiTPv1-c?si=F4chPUxpZfEi6Xgm" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
          <div className="slide">
          <iframe width="240" height="200" src="https://www.youtube.com/embed/EmUIaWFRwB4?si=JGK9MIJMyxjGpGc0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
          <div className="slide">
          <iframe width="200" height="200" src="https://www.youtube.com/embed/HgZD2Ud_5rM?si=jk0JwOEyaC0_bp2y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
        </div>
      </div>
    </div>
    </section>


    </div>
  );
};







