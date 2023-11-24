import "./App.css";

function App() {
  const drumElements = [
    {
      id: "Heater-1",
      label: "Q",
      name: "Heater 1",
      audio: "",
    },
    {
      id: "Heater-2",
      label: "W",
      name: "Heater 2",
      audio: "",
    },
    {
      id: "Heater-3",
      label: "E",
      name: "Heater 3",
      audio: "",
    },
    {
      id: "Heater-4",
      label: "A",
      name: "Heater 4",
      audio: "",
    },
    {
      id: "Clap",
      label: "S",
      name: "Clap",
      audio: "",
    },
    {
      id: "Open-HH",
      label: "D",
      name: "Open HH",
      audio: "",
    },
    {
      id: "Kick-n'-Hat",
      label: "Z",
      name: "Kick n' Hat",
      audio: "",
    },
    {
      id: "Kick",
      label: "X",
      name: "Kick",
      audio: "",
    },
    {
      id: "Closed-HH",
      label: "C",
      name: "Closed HH",
      audio: "",
    },
  ];
  return (
    <div className="drum-machine" id="drum-machine">
      <div className="pad-bank">
        {drumElements.map((el) => (
          <div className="drum-pad" id={el.id}>
            <audio src={el.audio} className="clip" id={el.label}></audio>
            {el.label}
          </div>
        ))}
      </div>
      <div className="controls-container">
        <div className="control power-control">
          <p>Power</p>
          <div className="select">
            <div className="inner"></div>
          </div>
        </div>
        <p id="display">Heater 1</p>
        <div className="volume-slider">
          <input max="1" min="0" step="0.01" type="range" value="0.54" />
        </div>
        <div className="control bank-control">
          <p>Bank</p>
          <div className="select">
            <div className="inner"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
