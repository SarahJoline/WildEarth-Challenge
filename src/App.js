import "./App.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import HabitListPage from "./components/HabitListPage";
import NewHabitView from "./components/NewHabitView";

function App() {
  const [habitList, setHabitList] = useState([]);

  return (
    <Router>
      <div className="MobileContainer">
        <NavBar />
        <Switch>
          <Route exact path="/form">
            <NewHabitView setHabitList={setHabitList} habitList={habitList} />
          </Route>
          <Route path="/">
            <HabitListPage habitList={habitList} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
