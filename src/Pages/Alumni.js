import React from 'react'
import './Alumni.css'
import Cardalumni from './Cardalumni.js'
import Wave from './Wave.js';
import './Wave.css';
const Alumni = () => {
    const cardsData = [
        {
            "image":"https://live.staticflickr.com/65535/52768996893_caf48d783b_n.jpg",
            "name":"Divas Gupta",
            "instalink":"https://www.instagram.com/divas__gupta/",
            "linkedinlink":"https://www.linkedin.com/in/divas-gupta-a23501125/",
            "facebooklink":"/"
        },
        {
            image:"https://live.staticflickr.com/65535/52768499151_e754bb1b90_n.jpg",
            name:"Anurag Singh",
            instalink:"https://www.instagram.com/anurag1857/",
            linkedinlink:"https://www.linkedin.com/in/anurag1857/",
            facebooklink:"/"
        },
        {
            image:"https://live.staticflickr.com/65535/52768931815_807e7fd6f3_m.jpg",
            name:"Aniket Panigrahi",
            instalink:"https://www.instagram.com/iamaniketpanigrahi16/",
            linkedinlink:"https://www.linkedin.com/in/aniketpanigrahi/",
            facebooklink:"/"
        },
        {
            image:"https://live.staticflickr.com/65535/52767981077_c0293c8bee_n.jpg" ,
            name:"Satyam Shorya Jha",
            instalink:"https://www.instagram.com/ssj11___/",
            linkedinlink:"https://www.linkedin.com/in/satyam-shorya-jha-520a19194/",
            facebooklink:"/"
        },
        {
            image:"https://live.staticflickr.com/65535/52768940625_2bb0d6208a_n.jpg" ,
            name:"S. Hemanth",
            instalink:"https://www.instagram.com/hemanthsanagavarapu/",
            linkedinlink:"https://www.linkedin.com/in/hemanth-sanagavarapu-7a70161b2/",
            facebooklink:"/"
        },
        {
            image:"https://live.staticflickr.com/65535/52768790894_9e57425f04_n.jpg" ,
            name:"Suryadip Mondal",
            instalink:"https://www.instagram.com/s.u.r.j.o__/",
            linkedinlink:"https://www.linkedin.com/in/suryadip-mondal-1534921b1/",
            facebooklink:"/"
        },
        {
            image:"https://live.staticflickr.com/65535/52768794844_9406bd0899_n.jpg" ,
            name:"Sukanya dutta",
            instalink:"https://www.instagram.com/_sukanyadutta_/",
            linkedinlink:"https://www.linkedin.com/in/sukanya-dutta-72a45219a/",
            facebooklink:"/"
        },
        {
            image:"https://live.staticflickr.com/65535/52768004002_1a11c68c93_n.jpg" ,
            name:"Soumyadeep Das",
            instalink:"https://instagram.com/sd.soumya_deep?igshid=YmMyMTA2M2Y=",
            linkedinlink:"https://www.linkedin.com/in/soumyadeepdas-20/",
            facebooklink:"/"
        },
        {
            image:"https://live.staticflickr.com/65535/52769035693_6ac2ab53bd_n.jpg" ,
            name:"Anik Mondal",
            instalink:"/",
            linkedinlink:"/",
            facebooklink:"/"
        },
        {
            image:"https://live.staticflickr.com/65535/52768572636_b17a8a9e2f_n.jpg" ,
            name:"Vishal Jaiswal",
            instalink:"https://www.instagram.com/tynnision_vishal/",
            linkedinlink:"https://www.linkedin.com/in/vishal-jaiswal-4b103a199/",
            facebooklink:"/"
        },
        {
            image:"https://live.staticflickr.com/65535/52768989855_507cd697f9_n.jpg" ,
            name:"Souptik Das",
            instalink:"https://instagram.com/soda_o_0_?igshid=YmMyMTA2M2Y=",
            linkedinlink:"https://www.linkedin.com/in/souptik-das-2760ab14a/",
            facebooklink:"/"
        },
        {
            image:"https://live.staticflickr.com/65535/52768581316_5e948bbcc6_w.jpg" ,
            name:"V. Sivaji Ganesh Naidu",
            instalink:"https://instagram.com/sivajiganeshnaidu_v?igshid=YmMyMTA2M2Y=",
            linkedinlink:"https://www.linkedin.com/in/sivaji-ganesh-naidu-vemulapalli-4bb14b1b9/",
            facebooklink:"/"
        },
        {
            image:"https://live.staticflickr.com/65535/52768838999_c9a8ecaf6f_w.jpg" ,
            name:"Ayush Kumar",
            instalink:"https://www.instagram.com/hashtag_aayush/",
            linkedinlink:"https://www.linkedin.com/in/aayush-kumar-827976199/",
            facebooklink:"/"
        },
        {
            image:"https://live.staticflickr.com/65535/52769075718_9f16b7d0b9_w.jpg" ,
            name:"Arpan Das",
            instalink:"https://www.instagram.com/the_mystic_shadow/",
            linkedinlink:"https://www.linkedin.com/in/arpan-das-217a731b3/",
            facebooklink:"/"
        },
        {
            image:"https://live.staticflickr.com/65535/52768845264_139784be57_w.jpg" ,
            name:"Subham Gupta",
            instalink:"https://www.instagram.com/subhamgupta173/",
            linkedinlink:"https://www.linkedin.com/in/subham-gupta-2398361a9/",
            facebooklink:"/"
        },
        {
            image:"https://live.staticflickr.com/65535/52769081713_12c71e61df_w.jpg" ,
            name:"Anshika Chaudhary",
            instalink:"https://www.instagram.com/anshi__kaaaaa/",
            linkedinlink:"https://www.linkedin.com/in/anshika-chaudhary-3399561b5/",
            facebooklink:"/"
        },
        {
            image:"https://live.staticflickr.com/65535/52768596866_b3c5844682_n.jpg" ,
            name:"Arani Gangopadhyay",
            instalink:"https://www.instagram.com/arani_008/",
            linkedinlink:"https://www.linkedin.com/in/arani-gangopadhyay-7642b6243/",
            facebooklink:"/"
        },
        {
            image:"https://live.staticflickr.com/65535/52769134248_ab505e843d_n.jpg" ,
            name:"Ankita Mondal",
            instalink:"https://www.instagram.com/miss__shady/",
            linkedinlink:"https://www.linkedin.com/in/ankita-mandal-b173411ab/",
            facebooklink:"/"
        },
        {
            image:"https://live.staticflickr.com/65535/52768599596_ca63fa83dd.jpg" ,
            name:"Souham Bnaerjee",
            instalink:"https://instagram.com/souhambanerjee?igshid=YmMyMTA2M2Y=",
            linkedinlink:"https://www.linkedin.com/in/souham-banerjee-a407b5185/",
            facebooklink:"/"
        },
        {
            image:"https://live.staticflickr.com/65535/53126268392_96da2b46cf_b.jpg"  ,
            name:"Koena Saha"
    ,        instalink:"https://instagram.com/_mistalee_koena?igshid=YmMyMTA2M2Y=",
            linkedinlink:"https://www.linkedin.com/in/koena-saha-869920200/",
            facebooklink:"/"
        },
        {
            image:"https://live.staticflickr.com/65535/52769130293_712c2ea392_n.jpg" ,
            name:"Shivam Kumar",
            instalink:"https://www.instagram.com/k21shivam/",
            linkedinlink:"https://www.linkedin.com/in/shivam-kumar21/",
            facebooklink:"/"
        },
        {
            image:"https://live.staticflickr.com/65535/52769023890_c737f51ed5_w.jpg" ,
            name:"Sneha Chattopadhya",
            instalink:"https://www.instagram.com/sneha._.chattopadhyay/",
            linkedinlink:"https://www.linkedin.com/in/sneha-chattopadhyay/",
            facebooklink:"/"
        },
        {
            image:"https://live.staticflickr.com/65535/52769101123_a53708378e_z.jpg" ,
            name:"V. Manish Yadav",
            instalink:"/",
            linkedinlink:"https://www.linkedin.com/in/manish-veerla/",
            facebooklink:"/"
        },
        {
            image:"https://live.staticflickr.com/65535/52769028900_6d35be9ed8_n.jpg" ,
            name:"Abhishek Sharma",
            instalink:"https://www.instagram.com/_sharma_ab/",
            linkedinlink:"https://www.linkedin.com/in/abhishek-sharma-nitdgp23/",
            facebooklink:"/"
        },
        {
            image:"https://live.staticflickr.com/65535/52769031690_f62cbffc28_n.jpg" ,
            name:"Rahul Mondal"
    ,        instalink:"https://instagram.com/r.a.h.u.l_mondal?igshid=YmMyMTA2M2Y=",
            linkedinlink:"https://www.linkedin.com/in/rahul-mondal-86241b200/",
            facebooklink:"/"
        },
        {
            image:"https://live.staticflickr.com/65535/52768881894_0b1741aa1e_n.jpg" ,
            name:"P. Venkatesh"
    ,        instalink:"https://instagram.com/venky_9010?igshid=YmMyMTA2M2Y=",
            linkedinlink:"https://www.linkedin.com/in/perepureddy-venkatesh-ab3420192/",
            facebooklink:"/"
        },
        {
            image:"https://live.staticflickr.com/65535/52769045905_2ec72118d6_w.jpg" ,
            name:"P. Chandra Sekhar",
            instalink:"https://instagram.com/sekhar_691?igshid=YmMyMTA2M2Y=",
            linkedinlink:"https://www.linkedin.com/in/chandrasekharnaidu/",
            facebooklink:"/"
        },

        {
            image:"https://live.staticflickr.com/65535/52768634016_8ba58bf81e_n.jpg" ,
            name:"Leela Prasad",
            instalink:"/",
            facebooklink:"/",
            linkedinlink:"/",
        },
        {
            image:"https://live.staticflickr.com/65535/52769919127_c24b8a862b_n.jpg" ,
            name:"J. sri Chandana",
            instalink:"/",
            linkedinlink:"/",
            facebooklink:"/"
        },
        

    ];
    return (
      <>
      <Wave/>
        <div class="container-alumni">
            <h1>Meet Our <span>Alumni</span></h1>
            <div className="content-alumni">
                <p>The 2023 and 2024 alumni have significantly contributed to the club's esteemed reputation through their diligent efforts in hosting a range of successful events, including SDV, TEDx, Aarohan, Drag & Drift, F.I.S.T., webinars, and various interactive workshops.
                Their involvement in the club's Annual Magazine, Autopia, and videos on cutting-edge technology for Cryptech has been remarkable.
                Furthermore, their participation in national events such as Baja India has been noteworthy.
                Their contributions have played a crucial role in the club's exceptional achievements during their tenure, thereby ensuring the perpetuation of its legacy.</p>
            </div>
            <div className="cards-Alumni">
            {cardsData.map(card => (
                <Cardalumni  name={card.name} image={card.image} instalink={card.instalink} facebooklink={card.facebooklink} linkedinlink={card.linkedinlink}/>
            ))}
            </div>
        </div>
        </>
  );
};

export default Alumni
