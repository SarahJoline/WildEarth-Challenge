import React from "react";
import { Link } from "react-router-dom";
import PlusIcon from "../../icons/addBtn.svg";
import HomeIcon from "../../icons/home.svg";
import StatsIcon from "../../icons/stats.svg";
import PlusIcon2 from "../../icons/+.svg";

import "./index.css";

/* Components used in HabitListPageView */
function EmptyHabitList() {
  return (
    <div className="emptyHabitList">
      <div>You have not set any habits yet.</div>
    </div>
  );
}

function HabitList({ habitList }) {
  return (
    <div className="HabitList">
      {habitList.map((habit) => (
        <div className="Habit">
          <div>
            <div className="HabitTitle">Do yoga</div>
            <div>TODAY: 0 / {habit.dailyFrequency}</div>
          </div>
          <img src={PlusIcon2} alt="plus" />
        </div>
      ))}
    </div>
  );
}

function DateButton({ day, date, isActive }) {
  return (
    <div className={`DateButton ${isActive && "Active"}`}>
      <div className="DateButtonDay">{day}</div>
      <div className="DateButtonDate">{date}</div>
    </div>
  );
}

/* The main page component */
function HabitListPage({ habitList }) {
  return (
    <div className="PageContainer">
      <div className="PageContent">
        <div className="Calendar">
          <DateButton day={"MON"} date={24} />
          <DateButton day={"TUES"} date={25} />
          <DateButton day={"WEDS"} date={26} />
          <DateButton day={"THURS"} date={27} />
          <DateButton day={"FRI"} date={28} />
          <DateButton day={"SAT"} date={29} />
          <DateButton day={"SUN"} date={30} isActive />
        </div>

        {habitList.length === 0 ? (
          <EmptyHabitList />
        ) : (
          <HabitList habitList={habitList} />
        )}
      </div>

      <div className="BottomNav">
        <div className="BottomNavItem Selected">
          <img src={HomeIcon} alt="home" className="BottomNavItemIcon" />
        </div>

        <Link to="/form" className="BottomNavItem">
          <img src={PlusIcon} alt="New Habit" className="BottomNavItemIcon" />
        </Link>

        <div className="BottomNavItem">
          <img src={StatsIcon} alt="stats" className="BottomNavItemIcon" />
        </div>
      </div>
    </div>
  );
}

export default HabitListPage;
