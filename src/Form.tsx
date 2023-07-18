import React, { useState } from "react";
import "./Form.css";

const HomingCompassForm: React.FC = () => {
  const [seatNo, setSeatNo] = useState("");
  const [floorNo, setFloorNo] = useState("");
  const [message, setMessage] = useState("");

  const locate = () => {
    if (!seatNo || !floorNo) {
      setMessage("Yeh need to enter both a floor number and a seat number!");
    } else if (!isNaN(+seatNo) && !isNaN(+floorNo)) {
      const destinationFloor = "TkE9PQ==";
      const destinationSeat = "TVRVMw==";

      if (+floorNo > +atob(atob(destinationFloor))) {
        setMessage(
          "Oh dear, yeh've gone higher than me humble abode. Come on down, me hut's down below!"
        );
      } else if (+floorNo < +atob(atob(destinationFloor))) {
        setMessage(
          "No need to go diggin' deeper, me friend! Me hut's up above, so head on up!"
        );
      } else {
        const seatDifference = Math.abs(+seatNo - +atob(atob(destinationSeat)));

        if (seatDifference > 30) {
          setMessage(
            "Yer on the right floor, but yeh still need to wander a bit farther, me friend!"
          );
        } else if (seatDifference <= 30 && seatDifference > 0) {
          setMessage(
            "Well now, yeh're on the right floor and gettin' mighty close to me seat! Keep goin'!"
          );
        } else if (seatDifference == 0) {
          setMessage(
            "Blimey, yeh've found me! Yer standin' right outside me cozy hut. Welcome!"
          );
        }
      }
    }
  };

  return (
    <div>
      <div className="scene">
        <div className="harry-potter">
          <div className="form-header">
            <img
              src="https://l3vi-7.github.io/escape-TH/MadMazeFinal.png"
              alt="Logo"
              className="logo"
            />
            <h1 className="form-heading">Adobe Mad Maze</h1>
            <h2 className="form-subheading">Homing Compass</h2>
          </div>
          <div className="homing-compass-form">
            <label htmlFor="floorNo">Floor No.</label>
            <input
              type="number"
              id="floorNo"
              value={floorNo}
              onChange={(e) => {
                setFloorNo(+e.target.value as any);
              }}
              placeholder="Enter a floor number. Eg: 5"
            />

            <label htmlFor="seatNo">Seat No.</label>
            <input
              type="number"
              id="seatNo"
              value={seatNo}
              onChange={(e) => {
                setSeatNo(+e.target.value as any);
              }}
              placeholder="Enter a seat number. Eg: 42"
            />

            <button type="button" onClick={locate}>
              Locate
            </button>
          </div>

          {message && (
            <div className="message-card">
              <p>{message}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HomingCompassForm;
