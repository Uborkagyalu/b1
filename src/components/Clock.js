
import { useState, useEffect } from 'react';

function Clock(props){

  const [date, setDate] = useState(new Date());

  function refreshClock() {
    setDate(new Date());
  }
  useEffect(() => {
      //clock time for every second
    const timerId = setInterval(refreshClock, 1000);
    return function cleanup() {
      clearInterval(timerId);
    };
  }, []);
  return (
    <span className="clock">
        {//displaying hours and minutes and adding 0 if it's for example 9am to get 09am etc.
        //also displaying time based on timezone
        }
      {date.getUTCHours()+(props.timezone/60/60) < 10 ? "0"+date.getUTCHours()+(props.timezone/60/60) : date.getUTCHours()+(props.timezone/60/60)}
      :
      {date.getMinutes()<10 ? "0"+date.getMinutes() : date.getMinutes()}
    </span>
  );
}
export default Clock;