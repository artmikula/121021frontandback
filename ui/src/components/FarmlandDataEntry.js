import React from "react";
import { useState } from "react";

function FarmlandDataEntry({ SubmitFarmData, error }) {
  const [farmData, setFarmData] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();
    // console.log(farmData);
    SubmitFarmData(farmData);
  };

  return (
    <div className="container">
      <div className="dataEntryTitle">
        <p>농지 데이터 입력</p>
      </div>
      <form id="farm-data-form" autoComplete="off" onSubmit={submitHandler}>
        {error !== "" ? <div className="error">{error}</div> : ""}
        <ul id="farm-data-table">
          <li className="farmList">
            <label htmlFor="air_temperature_min">기온</label>
            <input
              type="number"
              placeholder="0"
              name="air_temperature_min"
              onChange={(e) =>
                setFarmData({
                  ...farmData,
                  air_temperature_min: e.target.value,
                })
              }
            />
            <div>
              <p>-</p>
            </div>
            <input
              type="number"
              placeholder="0"
              name="air_temperature_max"
              onChange={(e) =>
                setFarmData({
                  ...farmData,
                  air_temperature_max: e.target.value,
                })
              }
            />
          </li>
          <li className="farmList">
            <label htmlFor="ground_temperature_min">지면온도</label>
            <input
              type="number"
              placeholder="0"
              name="ground_temperature_min"
              onChange={(e) =>
                setFarmData({
                  ...farmData,
                  ground_temperature_min: e.target.value,
                })
              }
            />
            <div>
              <p>-</p>
            </div>
            <input
              type="number"
              placeholder="0"
              name="ground_temperature_max"
              onChange={(e) =>
                setFarmData({
                  ...farmData,
                  ground_temperature_max: e.target.value,
                })
              }
            />
          </li>
          <li className="farmList">
            <label htmlFor="sunshine_min">일조</label>
            <input
              type="number"
              placeholder="0"
              name="sunshine_min"
              onChange={(e) =>
                setFarmData({
                  ...farmData,
                  sunshine_min: e.target.value,
                })
              }
            />
            <div>
              <p>-</p>
            </div>
            <input
              type="number"
              placeholder="0"
              name="sunshine_max"
              onChange={(e) =>
                setFarmData({
                  ...farmData,
                  sunshine_max: e.target.value,
                })
              }
            />
          </li>
          <li className="farmList">
            <label htmlFor="athmospheric_pressure_min">기압</label>
            <input
              type="number"
              placeholder="0"
              name="athmospheric_pressure_min"
              onChange={(e) =>
                setFarmData({
                  ...farmData,
                  athmospheric_pressure_min: e.target.value,
                })
              }
            />
            <div>
              <p>-</p>
            </div>
            <input
              type="number"
              placeholder="0"
              name="athmospheric_pressure_max"
              onChange={(e) =>
                setFarmData({
                  ...farmData,
                  athmospheric_pressure_max: e.target.value,
                })
              }
            />
          </li>
          <li className="farmList">
            <label htmlFor="wind_speed_min">바람</label>
            <input
              type="number"
              placeholder="0"
              name="wind_speed_min"
              onChange={(e) =>
                setFarmData({
                  ...farmData,
                  wind_speed_min: e.target.value,
                })
              }
            />
            <div>
              <p>-</p>
            </div>
            <input
              type="number"
              placeholder="0"
              name="wind_speed_max"
              onChange={(e) =>
                setFarmData({
                  ...farmData,
                  wind_speed_max: e.target.value,
                })
              }
            />
          </li>
          <li className="farmList">
            <label htmlFor="terrain_roughness_min">지형 험준도</label>
            <input
              type="number"
              placeholder="0"
              name="terrain_roughness_min"
              onChange={(e) =>
                setFarmData({
                  ...farmData,
                  terrain_roughness_min: e.target.value,
                })
              }
            />
            <div>
              <p>-</p>
            </div>
            <input
              type="number"
              placeholder="0"
              name="terrain_roughness_max"
              onChange={(e) =>
                setFarmData({
                  ...farmData,
                  terrain_roughness_max: e.target.value,
                })
              }
            />
          </li>
          <li className="farmList">
            <label htmlFor="ilsa_min">일사</label>
            <input
              type="number"
              placeholder="0"
              name="ilsa_min"
              onChange={(e) =>
                setFarmData({
                  ...farmData,
                  ilsa_min: e.target.value,
                })
              }
            />
            <div>
              <p>-</p>
            </div>
            <input
              type="number"
              placeholder="0"
              name="ilsa_max"
              onChange={(e) =>
                setFarmData({
                  ...farmData,
                  ilsa_max: e.target.value,
                })
              }
            />
          </li>
          <li className="farmList">
            <label htmlFor="humidity_min">습도</label>
            <input
              type="number"
              placeholder="0"
              name="humidity_min"
              onChange={(e) =>
                setFarmData({
                  ...farmData,
                  humidity_min: e.target.value,
                })
              }
            />
            <div>
              <p>-</p>
            </div>
            <input
              type="number"
              placeholder="0"
              name="humidity_max"
              onChange={(e) =>
                setFarmData({
                  ...farmData,
                  humidity_max: e.target.value,
                })
              }
            />
          </li>
          <li className="farmList">
            <label htmlFor="precipitation_min">강수</label>
            <input
              type="number"
              placeholder="0"
              name="precipitation_min"
              onChange={(e) =>
                setFarmData({
                  ...farmData,
                  precipitation_min: e.target.value,
                })
              }
            />
            <div>
              <p>-</p>
            </div>
            <input
              type="number"
              placeholder="0"
              name="precipitation_max"
              onChange={(e) =>
                setFarmData({
                  ...farmData,
                  precipitation_max: e.target.value,
                })
              }
            />
          </li>
        </ul>
        <div className="row">
          <input type="submit" value="검색하기" />
        </div>
      </form>
    </div>
  );
}

export default FarmlandDataEntry;
