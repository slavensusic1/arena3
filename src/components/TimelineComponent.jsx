import React from "react";
import { useEffect } from "react";
import "./TimelineComponent.scss";
import g1 from "../assets/idea.svg"; 
import g2 from "../assets/arrow.svg"; 
import g3 from "../assets/progr.svg"; 
import g4 from "../assets/code.svg"; 
import g5 from "../assets/plane.svg"; 
import g6 from "../assets/hand.svg"; 

const yearToIcon = {
  2018: 'fa-seedling',
  2019: 'fa-chart-line',
  2020: 'fa-chart-pie',
  2021: 'fa-trophy',
  2022: 'fa-handshake',
  2023: 'fa-rocket',
};




const fields = {
  title: "Naš put kroz",

  years_timeline: [
    {
      year: 2018,
      body: "In 2018, our journey began with a vision, a dream, and unwavering determination. Fei amoi Brezn, Buam a bissal mogsd a Bussal Obazda so...",
      pic: <img src={g2.src} alt="Year 2018" />,
    },
    {
      year: 2019,
      body: "2019 was a year of challenges and growth. We faced Bavaria ipsum dolor sit amet, but our spirits remained high as we climbed each Engelgwand. Milli ded Edlweiss...",
      pic: <img src={g2.src} alt="Year 2018" />,
    },
    {
      year: 2020,
      body: "Noch da Giasinga Heiwog des wiad a Mordsgaudi de Obazda koa... 2020 marked a turning point as we realized that even in the face of adversity, there is always room for joy and celebration.",
      pic: <img src={g3.src} alt="Year 2018" />,
    },
    {
      year: 2021,
      body: (
        <div>
          <p>
            As we ventured into 2021, our hearts were filled with passion and dedication. Noch da Giasinga Heiwog des wiad a Mordsgaudi de Obazda koa... We also welcomed new beginnings and opportunities symbolized by the g1 icon.
          </p>
        </div>
      ),
      pic: <img src={g4.src} alt="Year 2018" />,
    },
    {
      year: 2022,
      body: "The year 2022 was a continuation of our journey, marked by perseverance and a commitment to our goals. Noch da Giasinga Heiwog des wiad a Mordsgaudi de Obazda koa...",
      pic: <img src={g5.src} alt="Year 2018" />,
    },
    {
      year: 2023,
      body: (
        <div>
          <p>
            In 2023, our efforts bore fruit as we expanded our horizons and explored new frontiers. Sog i Kuaschwanz Lewakaas Steckerleis wos Graudwiggal. Wuid is unbandig... The wild and uncharted territory of success beckoned, and we embraced the adventure.
          </p>
        </div>
      ),
      pic: <img src={g6.src} alt="Year 2018" />,
    },
  ]
};

function TimelineComponent() {
  const [yearSelected, setYearSelected] = React.useState(2018);
  const [keySelected, setKeySelected] = React.useState(0);
  const { title, years_timeline } = fields;

  const handleOnTimelineClick = (e, year, key) => {
    setYearSelected(year);
    setKeySelected(key);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      // Calculate the next key
      const nextKey = keySelected < years_timeline.length - 1 ? keySelected + 1 : 0;
      setKeySelected(nextKey);
    }, 1000000); // Change year every 3 seconds

    return () => clearInterval(interval); // Clear the interval when the component unmounts
  }, [keySelected, years_timeline]);

  useEffect(() => {
    setYearSelected(years_timeline[keySelected].year);
  }, [keySelected, years_timeline]);

  return (
    <section className="wrapper">
      <div className="text-center max-w-2xl mx-auto">
        <h1 className="text-6xl whitespace-nowrap md:text-7xl font-bold mb-5 text-gray-600">
          Povijest digital arene
        </h1>
        <h3 className="text-xl mb-5 font-light">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </h3>
        <div className="text-center mb-10">
          <span className="inline-block w-1 h-1 rounded-full bg-green-500 ml-1"></span>
          <span className="inline-block w-3 h-1 rounded-full bg-green-500 ml-1"></span>
          <span className="inline-block w-40 h-1 rounded-full bg-green-500"></span>
          <span className="inline-block w-3 h-1 rounded-full bg-green-500 ml-1"></span>
          <span className="inline-block w-1 h-1 rounded-full bg-green-500 ml-1"></span>
        </div>
      </div>
      <div className="panel">
        <div className="arrows hi">
          <button
            onClick={() => {
              setKeySelected(
                keySelected > 0 ? keySelected - 1 : years_timeline.length - 1
              );
            }}
            aria-label="Left button"
          >
            ⬅
          </button>
        </div>

        <div className="content relative flex items-center justify-center">
          

          {years_timeline.map((item, key) => (
            <div
              key={key}
              className={`tab bg-opacity-80 p-6 rounded-lg flex items-center justify-center bg-gray-900  ${
                yearSelected === item.year && "selected"
              }`}
            >
              <h2 className="text-5xl flex max-w-lg mx-auto font-semibold mb-2 text-green-500 bg-gray-900">
                {item.year}
              </h2>
              <div className="flex flex-row-reverse w-full items-center justify-center gap-5 bg-gray-900"> 
          <div className="w-3/4 text-left mb-10 text-2xl text-gray-100 bg-gray-900"> {item.body}</div>
             <div className="w-1/4 mb-10">{item.pic}</div>  
              
            </div>
            </div>
          ))}
          <p className="absolute z-0 max-w-8xl mx-auto text-[20rem] top-[-50%] text-white/30 opacity-10 ">history</p>
          <div class="absolute inset-0 hidden h-max dark:block lg:my-auto">
                <div
                  aria-hidden="true"
                  class="grid grid-cols-2 -space-x-52 opacity-50 dark:opacity-70 2xl:mx-auto 2xl:max-w-6xl"
                >
                  <div
                    class="h-60 bg-gradient-to-br from-primary to-purple-400 blur-3xl dark:from-blue-700"
                  >
                  </div>
                  <div
                    class="h-72 rounded-full bg-gradient-to-r from-cyan-400 to-sky-300 blur-3xl dark:from-transparent dark:to-indigo-600"
                  >
                  </div>
                </div>
              </div>
        </div>
        
        <div className="arrows">
          <button
            onClick={() => {
              setKeySelected(
                keySelected < years_timeline.length - 1 ? keySelected + 1 : 0
              );
            }}
            aria-label="Right button"
          >
            ⮕
          </button>
        </div>
      </div>
      <div className="timeline z-10">
        <ul>
          {years_timeline.map((item, key) => (
            <li key={key} className={item.year === yearSelected ? "active" : ""}>
              <a
                onClick={(e) => handleOnTimelineClick(e, item.year, key)}
                id={item.year}
              >
                <p className="text-2xl pb-6 ">{item.year}</p>
              </a>
            </li>
          ))}
        </ul>
      </div>

      
    </section>
  );
}

export default TimelineComponent;