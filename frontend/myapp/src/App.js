import './App.css';
import Navbar from './Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './Footer';
import Home from './Home';
import Articles from './Articles';
import Diet from './Diet';
import Register from './Register';
import Activity from './Activity';
import Goal from './Goal';
import Start from './Start';
import Myactivity from './Myactivity';
import Progress from './Progress';
import End from './End';
import { createContext, useState } from 'react';
export const global = createContext();
function App() {
  const [newperson, setPerson] = useState([]);
  const [newgoal, setGoal] = useState([]);
  function getperson(person) {
    setPerson(...newperson, person)
  }
  function getfromgoal(goal) {
    setGoal(...newgoal, goal)
  }
  function getfrommyactivity(progress) {
    var activity = {
      ...newperson,
      ...newgoal,
      ...progress,
    }
    createData(activity);
  }

  //save new activity
  const createData = async (activity) => {
    await fetch("http://localhost:8000/create",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },

        body: JSON.stringify(activity)
      });
      console.log(activity)
  }

  return (
    <div>
      <Router>
        <Navbar />
        <global.Provider value={{
          getperson: getperson,
          getfromgoal: getfromgoal,
          getfrommyactivity: getfrommyactivity,
          createData: createData
        }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/articles" element={<Articles />} />
            <Route path="/diet" element={<Diet />} />
            <Route path="/register" element={<Register />} />
            <Route path="/activity" element={<Activity />} />
            <Route path="/goal" element={<Goal />} />
            <Route path="/start" element={<Start />} />
            <Route path="/myactivity" element={<Myactivity />} />
            <Route path="/progress" element={<Progress />} />
            <Route path="/end" element={<End />} />
          </Routes>
        </global.Provider>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
