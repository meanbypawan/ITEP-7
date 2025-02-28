import { useEffect, useRef, useState } from "react";

function App() {
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(true);
  const [time, setTime] = useState(0);
  const [lapList,setLapList] = useState([]);
  let hour = useRef(0);
  let minute = useRef(0);
  let second = useRef(0);
  const [timer,setTimer] = useState("");;
  useEffect(() => {
    let interval = null;
    if (isActive && isPaused === false) {
      interval = setInterval(() => {
        setTime((time) => time + 10);
        if(time >= 100){
          second.current = second.current+ 1;
          setTime(0);
        }
        if(second.current >=60){
          minute.current = minute.current+1;
          second.current = 0;
        }
        if(minute.current>=60){
          hour.current = hour.current + 1;
          minute.current = 0;
        }
        setTimer(hour.current+" : "+minute.current+" : "+second.current);
      }, 10);
    } else {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  }, [isActive, isPaused]);

  const handleStart = () => {
    setIsActive(true);
    setIsPaused(false);
  };

  const handlePauseResume = () => {
    setIsPaused(!isPaused);
  };

  const handleReset = () => {
    setIsActive(false);
    setTime(0);
  };

  return <>
    <div className="d-flex  justify-content-center align-items-center bg-danger text-white text-center" style={{ height: "50px" }}>
      <label style={{ fontWeight: "bold" }}>Stop Watch App</label>
    </div>
    <div className="mt-5 d-flex flex-column justify-content-center align-items-center">
      <label>{timer}</label>
      <div>
        {lapList.map((lapInfo, index) => <p key={index}>{lapInfo}</p>)}
        <button className="btn btn-secondary">Lap</button>
        <button onClick={handleStart} className="btn btn-primary ml-2">Start</button>
        <button onClick={handlePauseResume} className="btn btn-primary ml-2">Stop</button>
        <button onClick={handleReset} className="btn btn-primary ml-2">Reset</button>
      </div>
    </div>
  </>
}

export default App;