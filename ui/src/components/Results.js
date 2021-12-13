import React, { useState } from "react";
import results from "../styles/results.css";
import CustomMap from "./CustomMap";

function Results({ dataLoaded, setDataLoaded }) {
  const [data, setData] = useState("");

  const sendData = (e) => {
    setData(e.target.value);
    alert("Data " + data + " has been submitted.");
  };

  const clearData = () => {
    setDataLoaded(null);
  };

  return (
    <div className="results">
      <div className="recommendations">
        <div className="title">입력한 데이터에 적합한 농작물 추천</div>
        <div className="recommend-inner">
          <div className="recommend">
            <p>농작물 추천</p>
            <h2>추천딸기</h2>
            <br />
            <p>적합한 환경기온</p>
            <h3>기온 : 2–29 °C</h3>
            <h3>풍량 : 0~10</h3>
            <h3>지형험준도: 5.5~6.5</h3>
            <br />
            <label htmlFor="text-input">Input</label>
            <br />
            <input
              type="text"
              name="text-input"
              placeholder="Input text here"
              onChange={(e) => {
                setData(e.target.value);
              }}
            />
          </div>
          <div className="buttons">
            <input type="button" value="Cancel" onClick={clearData} />
            <input type="button" value="Submit" onClick={sendData} />
          </div>
        </div>
      </div>
      <div className="recommendations_map">
        <div className="title">입력 데이터와 유사한 기후대 추천</div>
        <div className="map">
          <CustomMap />
        </div>
      </div>
    </div>
  );
}

export default Results;
