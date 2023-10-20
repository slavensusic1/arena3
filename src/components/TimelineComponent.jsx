import React from "react";
import "./TimelineComponent.scss";
import g1 from "../assets/g1.svg"; // Import the image

const yearToIcon = {
  2018: 'fa-lightbulb',
  2019: 'fa-seedling',
  2020: 'fa-chart-bar',
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
    },
    {
      year: 2019,
      body: "2019 was a year of challenges and growth. We faced Bavaria ipsum dolor sit amet, but our spirits remained high as we climbed each Engelgwand. Milli ded Edlweiss...",
    },
    {
      year: 2020,
      body: "Noch da Giasinga Heiwog des wiad a Mordsgaudi de Obazda koa... 2020 marked a turning point as we realized that even in the face of adversity, there is always room for joy and celebration.",
    },
    {
      year: 2021,
      body: "As we ventured into 2021, our hearts were filled with passion and dedication. Noch da Giasinga Heiwog des wiad a Mordsgaudi de Obazda koa... We also welcomed new beginnings and opportunities symbolized by the g1 icon.",
     
    },
    {
      year: 2022,
      body: "The year 2022 was a continuation of our journey, marked by perseverance and a commitment to our goals. Noch da Giasinga Heiwog des wiad a Mordsgaudi de Obazda koa...",
    },
    {
      year: 2023,
      body: "In 2023, our efforts bore fruit as we expanded our horizons and explored new frontiers. Sog i Kuaschwanz Lewakaas Steckerleis wos Graudwiggal. Wuid is unbandig... The wild and uncharted territory of success beckoned, and we embraced the adventure.",
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

  React.useEffect(() => {
    setYearSelected(years_timeline[keySelected].year);
  }, [keySelected]);

  return (
    <section className="wrapper">
      <div className="text-center max-w-xl mx-auto">
        <h1 className="text-6xl md:text-7xl font-bold mb-5 text-gray-600">
          Put kroz vrijeme
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
      <div className="timeline">
  <ul>
    {years_timeline.map((item, key) => (
      <li key={key} className={item.year === yearSelected ? "active" : ""}>
        <a
          onClick={(e) => handleOnTimelineClick(e, item.year, key)}
          id={item.year}
        >
          <p className="text-2xl">{item.year}</p>
          <i className={`fa ${yearToIcon[item.year]}`}></i>
        </a>
      </li>
    ))}
  </ul>
</div>

      <div className="panel">
        <div className="arrows">
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
        <div className="content">
          {years_timeline.map((item, key) => (
            <div
              key={key}
              className={`tab ${yearSelected === item.year && "selected"}`}
            >
              <h4 className="text-center mx-auto">{item.year}</h4>
              {item.icon && <img src={item.icon} alt={`Year ${item.year}`} />}
              <p className="bg-gray-700 p-10 text-gray-100">
                {item.body}
              </p>
            </div>
          ))}
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
    </section>
  );
}

export default TimelineComponent;
