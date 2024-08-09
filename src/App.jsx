import { useEffect } from "react";
import "./App.css";
import { events } from "./Script";
import { arhn_gallary } from "./Script";
import { organizers } from "./Script";
import { scroll, animate } from "https://cdn.skypack.dev/motion@10.13.1";

// import "./Script.jsx";

function App() {

  useEffect(()=>{
    const $cardsWrapper = document.querySelector("#cards");
  const $cards = document.querySelectorAll(".stackCard");

  const numCards = $cards.length;

  $cards.forEach(($card, index0) => {
    const index = index0 + 1;
    const reverseIndex = numCards - index0;
    const reverseIndex0 = numCards - index;

    // Extra padding per card, so you can see the other stacked cards underneath at the top
    $card.style.paddingTop = `calc(${index} * var(--card-top-offset))`;

    // Scroll-Linked Animation
    scroll(
      animate($card, {
        // Earlier cards shrink more than later cards
        scale: [1, 1 - 0.1 * reverseIndex0], 
      }),
      {
        // Each card should only shrink when it’s at the top.
        // We can’t use exit on the els for this (as they are sticky)
        // but can track $cardsWrapper instead.
        target: $cardsWrapper,
        offset: [
          `${(index0 / numCards) * 100}%`,
          `${(index / numCards) * 100}%`,
        ],
      }
    );
  });
  })

  return (
    <>
      <div class=" w-full  myCarousel">
        <div
          id="carouselExampleFade"
          class="carousel slide carousel-fade   rounded-lg w-full "
        >
          <div class="carousel-inner">
            <div class="carousel-item active md:h-[700px]">
              <img
                src="https://www.saenitdgp.com/static/media/arhn7.968ac25a7e273c7ce5d4.jpg"
                class="d-block w-100 c-img"
                alt="..."
              />
            </div>
            <div class="carousel-item md:h-[700px]">
              <img
                src="https://www.saenitdgp.com/static/media/arhn11.1f8159d7fa04a4d7a037.jpg"
                class="d-block w-100 c-img"
                alt="..."
              />
            </div>
            <div class="carousel-item md:h-[700px]">
              <img
                src="https://www.saenitdgp.com/static/media/akb.0c06ac78ae18ac08e4a7.JPG"
                class="d-block w-100 c-img"
                alt="..."
              />
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      <div className="my-20 lg:mt-0">
        <div class="  flex max-w-full flex-col  rounded-md  lg:flex-row mx-20 my-10 lg:mx-36 lg:my-28 lg:justify-between">
          <div class="h-full w-full lg:h-[400px] lg:w-[590px] ">
            <img
              src="https://images.pexels.com/photos/16070201/pexels-photo-16070201.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=600&amp;lazy=load"
              alt="Image"
              class="h-full w-full lg:h-[400px] lg:w-[590px] rounded-md object-center"
            />
          </div>

          <div class="lg:w-[600px]  mt-10 lg:mt-0 lg:ml-24">
            <h1 class="flex items-center text-4xl text-[#ff0000] font-extrabold">
              ABOUT AAROHAN
            </h1>
            <p class="mt-5 md:text-lg  text-base ">
              National Institute of Technology, Durgapur has been a pioneering
              educational institute for above 50 years. It boasts of students
              who have achieved par excellence in the field of academics and
              organization. Aarohan is the Annual Techno-management fest of NIT
              Durgapur, the 2nd Largest of its kind in the whole of eastern
              India. It is organised by a group of young enthusiasts under the
              supervision of highly responsible faculties. This festival has
              been constantly fostering the enthusiastic students to showcase
              their talents and uplifting their spirits by taking parts in
              various events, and imbibing in them a sense of belonging to the
              competitive world that lies ahead,
            </p>
          </div>
        </div>
        <div class="  flex max-w-full flex-col  rounded-md  lg:flex-row-reverse mx-20 my-28 lg:mx-36 lg:my-28 lg:justify-between">
          <div class="h-full w-full lg:h-[400px] lg:w-[590px] ">
            <img
              src="https://images.pexels.com/photos/16070143/pexels-photo-16070143.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=600&amp;lazy=load"
              alt="Image"
              class="h-full w-full lg:h-[400px] lg:w-[590px] rounded-md object-center"
            />
          </div>

          <div class="lg:w-[600px]  mt-10 lg:mt-0 ">
            <h1 class="flex items-center text-4xl text-[#ff0000] font-extrabold">
              SAE IN AAROHAN
            </h1>
            <p class="mt-5 text-lg   ">
              National Institute of Technology, Durgapur has been a pioneering
              educational institute for above 50 years. It boasts of students
              who have achieved par excellence in the field of academics and
              organization. Aarohan is the Annual Techno-management fest of NIT
              Durgapur, the 2nd Largest of its kind in the whole of eastern
              India. It is organised by a group of young enthusiasts under the
              supervision of highly responsible faculties. This festival has
              been constantly fostering the enthusiastic students to showcase
              their talents and uplifting their spirits by taking parts in
              various events, and imbibing in them a sense of belonging to the
              competitive world that lies ahead,
            </p>
          </div>
        </div>
      </div>

      <div className="main mb-0">
        <div className="header  text-5xl text-[#ff0000] font-extrabold">
          <h1 className="">Our Events And Workshop In Aarohan</h1>
        </div>
        <ul id="cards">
          {events.map((event) => (
            <li key={event.id} class="md:card stackCard">
              <div class="card__content">
                <div>
                  <h2 className="text-[#bec4da] font-extrabold text-4xl ">
                    {event.name}
                  </h2>
                  <p className="text-lg">{event.content}</p>
                </div>
                <figure>
                  <img src={event.image} alt={event.name} />
                </figure>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className=" w-full py-20 pb-10 text-center  text-5xl text-[#ff0000] font-extrabold">
        <h1 className="">AAROHAN GALLERY</h1>
      </div>
      <div className="slider">
        <div className="slide-track">
          {arhn_gallary.map((arhn_img) => (
            <div key={arhn_img.id} className="single-slide">
              <img src={arhn_img.image} alt="arhn_gallary" />
            </div>
          ))}
        </div>
        <div className="slide-track">
          {arhn_gallary.map((arhn_img) => (
            <div key={arhn_img.id} className="single-slide">
              <img src={arhn_img.image} alt="arhn_gallary" />
            </div>
          ))}
        </div>
      </div>
      <div className=" w-full py-20 pb-10 text-center  text-5xl text-[#ff0000] font-extrabold">
        <h1 className="">AAROHAN ORGANIZERS</h1>
      </div>
      <div class="w-full px-28 flex flex-wrap mt-10 justify-center py-20 gap-5">
        {organizers.map((arhn_org) => (
          <div className="rotate">
            <div key={arhn_org.id} class="arhn_org_card">
              <div class="front">
                <img
                  src={arhn_org.organizer_img}
                  alt="image"
                  class="card__img"
                />
              </div>
              <div class="back">
                <p class="back-heading">{arhn_org.organizer_name}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
