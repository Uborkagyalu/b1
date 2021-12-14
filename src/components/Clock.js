
import { useState, useEffect } from 'react';
import utils from '../utils';

function Clock(props){

  const [date, setDate] = useState(new Date());

  function refreshClock() {
    setDate(new Date());
  }
  useEffect(() => {
    const timerId = setInterval(refreshClock, 1000);
    return function cleanup() {
      clearInterval(timerId);
    };
  }, []);
  return (
    <span className="clock">
      {utils.getDefTime(date, props.timezone)}
    </span>
  );
}
export default Clock;