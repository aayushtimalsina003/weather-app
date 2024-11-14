const App = () => {
  return (
    <div className="container">
      {/* Search Section */}
      <div className="search-section">
        <form action="#" className="search">
          <span className="material-symbols-rounded">search</span>
          <input
            type="search"
            placeholder="Enter a city name"
            className="search-input"
            required
          />
        </form>
        <button className="location-botton">
          <span className="material-symbols-rounded">my_location</span>
        </button>
      </div>

      <div className="weather-section">
        <div className="current-weather">
          <img src="icons/clouds.svg" alt="" />
          <h2 className="temperature">
            20 <span>°C</span>
          </h2>
          <p className="description">Partly Cloudy</p>
        </div>

        <div className="hourly-forecast">
          <ul className="weather-list">
            <li className="weather-item">
              
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default App;
