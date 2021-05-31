import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import "./index.css";

function OptionButton({ newHabit, setNewHabit, attr, val }) {
  return (
    <div
      className={`OptionButton ${newHabit[attr] === val && "selected"}`}
      onClick={(e) => setNewHabit({ ...newHabit, [attr]: val })}
    >
      {val}
    </div>
  );
}

function NewHabitView({ setHabitList, habitList }) {
  const [newHabit, setNewHabit] = useState({
    frequency: "",
    dailyFrequency: 0,
    timeOfDay: "",
    motivation: "",
  });

  const history = useHistory();

  return (
    <div className="Form">
      <div className="FormInputs">
        <div className="InputGroup">
          <div className="InputTitle">Goal Period</div>
          <div className="ButtonGroup">
            <OptionButton
              newHabit={newHabit}
              setNewHabit={setNewHabit}
              attr="frequency"
              val="Daily"
            />
            <OptionButton
              newHabit={newHabit}
              setNewHabit={setNewHabit}
              attr="frequency"
              val="Weekly"
            />
            <OptionButton
              newHabit={newHabit}
              setNewHabit={setNewHabit}
              attr="frequency"
              val="Monthly"
            />
          </div>
        </div>

        <div className="InputGroup HorizontalGroup">
          <div className="InputTitle">How many times per day?</div>
          <div className="FrequencySelector">
            <div
              className="FrequencySelectorButton"
              onClick={() =>
                setNewHabit({
                  ...newHabit,
                  dailyFrequency: newHabit.dailyFrequency - 1,
                })
              }
            >
              -
            </div>

            <div className="FrequencyValue">{newHabit.dailyFrequency}</div>

            <div
              className="FrequencySelectorButton"
              onClick={() =>
                setNewHabit({
                  ...newHabit,
                  dailyFrequency: newHabit.dailyFrequency + 1,
                })
              }
            >
              +
            </div>
          </div>
        </div>

        <div className="InputGroup">
          <div className="InputTitle">Time of Day</div>
          <div className="ButtonGroup">
            <OptionButton
              newHabit={newHabit}
              setNewHabit={setNewHabit}
              attr="timeOfDay"
              val="Anytime"
            />
            <OptionButton
              newHabit={newHabit}
              setNewHabit={setNewHabit}
              attr={"timeOfDay"}
              val={"Morning"}
            />
            <OptionButton
              newHabit={newHabit}
              setNewHabit={setNewHabit}
              attr={"timeOfDay"}
              val={"Afternoon"}
            />
            <OptionButton
              newHabit={newHabit}
              setNewHabit={setNewHabit}
              attr={"timeOfDay"}
              val={"Evening"}
            />
          </div>
        </div>

        <div className="InputGroup HorizontalGroup">
          <div className="InputTitle">Start Date</div>
          <div className="InputValue">May 28</div>
        </div>

        <div className="InputGroup HorizontalGroup">
          <div className="InputTitle">End Date</div>
          <div className="InputValue">None</div>
        </div>

        <div className="InputGroup HorizontalGroup">
          <div className="InputTitle">Reminders</div>
          <div className="InputValue">5:00 PM</div>
        </div>

        <div className="InputGroup">
          <div className="InputTitle">
            Write something to motivate yourself:
          </div>

          <textarea
            className="InputTextArea"
            rows="5"
            onChange={(e) =>
              setNewHabit({ ...newHabit, motivation: e.target.value })
            }
          />
        </div>
      </div>

      <button
        className="SubmitButton"
        onClick={() => {
          setHabitList([...habitList, newHabit]);

          history.push("/");
        }}
      >
        Next
      </button>
    </div>
  );
}

export default NewHabitView;
