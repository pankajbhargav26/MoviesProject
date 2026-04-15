import "./list.css";

export default function List() {
  const lists = [
    {
      title: "10 Best Shraddha Kapoor Movies",
      count: "10 TITLES",
      img:  "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    },
    {
      title: "10 Best Patriotic Films You Can Watch Anytime",
      count: "10 TITLES",
      img:"https://image.tmdb.org/t/p/w500/6ELCZlTA5lGUops70hKdB83WJxH.jpg",
    },
    {
      title: "Best TV Shows For Toddlers & Preschoolers",
      count: "10 TITLES",
      img: "https://image.tmdb.org/t/p/w500/8UlWHLMpgZm9bx6QYh0NFoq67TZ.jpg",
    },
    {
      title: "Every Marvel Movie In MCU Phase 4",
      count: "7 TITLES",
      img: "https://image.tmdb.org/t/p/w500/r7vmZjiyZw9rpJMQJdXpjgiCOk9.jpg",
    },
    {
      title: "7 Best Pro Wrestling Films Of All Time",
      count: "7 TITLES",
      img: "https://image.tmdb.org/t/p/w500/9Gtg2DzBhmYamXBS1hKAhiwbBKS.jpg",
    },
  ];

  return (
    <div className="list-page">

      <h1 className="list-title">Public Lists</h1>

      <div className="list-container">
        {lists.map((item, index) => (
          <div key={index} className="list-row">

            {/* IMAGE SIDE */}
            <div className="list-img">
              <img src={item.img} alt={item.title} />
            </div>

            {/* TEXT SIDE */}
            <div className="list-content">
              <h2>{item.title}</h2>
              <p>{item.count}</p>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
}