
import { useEffect } from "react";
import "./App.css";
import { events, arhn_gallary, organizers } from "./Script";
import AOS from 'aos';
import 'aos/dist/aos.css'




function App() {

  useEffect(()=>{
    AOS.init({
      duration:1000,
      delay:200,
      
    })
  })

  return (
    <>
      <div class=" w-full  myCarousel">
        <div
          id="carouselExampleFade"
          class="carousel slide carousel-fade   w-full "
          data-bs-ride="carousel"
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
        <div class="  flex max-w-full flex-col  rounded-md  lg:flex-row mx-10 my-10 lg:mx-36 lg:my-28 lg:justify-between">
          <div class="h-full w-full lg:h-[400px] lg:w-[590px] ">
            <img
              src="https://images.pexels.com/photos/16070201/pexels-photo-16070201.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=600&amp;lazy=load"
              alt="Image"
              class="h-full w-full lg:h-[400px] lg:w-[590px] rounded-md object-center"
              data-aos="fade-right"
            />
          </div>

          <div class="lg:w-[600px]  mt-10 lg:mt-0 lg:ml-24">
            <h1
              class="flex items-center text-4xl text-[#ff0000] font-extrabold"
              data-aos="fade-right"
            >
              ABOUT AAROHAN
            </h1>
            <p class="mt-5 md:text-lg  text-base " data-aos="fade-up-left">
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
        <div class="  flex max-w-full flex-col  rounded-md  lg:flex-row-reverse mx-10 my-28 lg:mx-36 lg:my-28 lg:justify-between">
          <div class="h-full w-full lg:h-[400px] lg:w-[590px] ">
            <img
              src="https://images.pexels.com/photos/16070143/pexels-photo-16070143.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=600&amp;lazy=load"
              alt="Image"
              class="h-full w-full lg:h-[400px] lg:w-[590px] rounded-md object-center"
              data-aos="fade-left"
            />
          </div>

          <div class="lg:w-[600px]  mt-10 lg:mt-0 ">
            <h1
              class="flex items-center text-4xl text-[#ff0000] font-extrabold"
              data-aos="fade-left"
            >
              SAE IN AAROHAN
            </h1>
            <p
              class="mt-5 text-base md:text-lg md:mr-10 "
              data-aos="fade-up-right"
            >
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

      <div data-aos="fade-right">
        <h1 className="py-24 text-center text-5xl text-[#ff0000] font-extrabold">
          OUR EVENTS AND WORKSHOPS IN AAROHAN
        </h1>
      </div>
      <div className="w-full grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 px-10 lg:px-32 my-10 gap-5">
        {events.map((event) => (
          <div data-aos="fade-up">
            <div key={event.id} class="card w-full md:h-[400px] h-[400px]">
              <img src={event.image} alt="" className="w-full h-full" />
              <div class="card__content">
                <h2 class="card__title text-3xl text-[#bec4da] font-bold">
                  {event.name}
                </h2>
                <p class="card__description">{event.content}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* <div
        className=" w-full py-20 pb-10 text-center  text-5xl text-[#ff0000] font-extrabold"
        data-aos="fade-right"
      >
        <h1 className="">AAROHAN GALLERY</h1>
      </div> */}
      <div data-aos="fade-right">
        <h1 className="py-24 text-center text-5xl text-[#ff0000] font-extrabold">
          AAROHAN GALLERY
        </h1>
      </div>
      <div className="slider">
        <div className="slide-track">
          {arhn_gallary.map((arhn_img) => (
            <div
              key={arhn_img.id}
              className="single-slide w-[300px] h-[150px] md:w-[400px] md:h-[200px]"
            >
              <img src={arhn_img.image} alt="arhn_gallary" />
            </div>
          ))}
        </div>
        <div className="slide-track">
          {arhn_gallary.map((arhn_img) => (
            <div
              key={arhn_img.id}
              className="single-slide w-[300px] h-[150px] md:w-[400px] md:h-[200px]"
            >
              <img src={arhn_img.image} alt="arhn_gallary" />
            </div>
          ))}
        </div>
      </div>
      {/* <div
        className=" w-full py-20 pb-10 text-center  text-5xl text-[#ff0000] font-extrabold"
        data-aos="fade-right"
      >
        <h1 className="">AAROHAN ORGANIZERS</h1>
      </div> */}
      <div data-aos="fade-right">
        <h1 className="py-24 text-center text-5xl text-[#ff0000] font-extrabold">
          AAROHAN ORGANIZERS
        </h1>
      </div>
      <div class="w-full lg:px-28 flex flex-wrap mt-10 justify-center py-20 gap-5">
        {organizers.map((arhn_org) => (
          <div className="rotate">
            <div key={arhn_org.id} class="arhn_org_card" data-aos="fade-up">
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
