import React, { useState, useEffect }  from 'react'
import Light from './Light'

const TrafficLight = () => {
  const [on, setOn] = useState('stop');

  useEffect(() => {
    const lights = ['stop', 'yield', 'go'];
    let index = 1;

    const alternateLight = () => {
      setOn(lights[index])
      index += 1;
  
      if (index > 2) index = 0;
    }

    setInterval(alternateLight, 2000);
  }, [])

  return (
    <div className="traffic-light">
      <Light className="stop" on={on} />
      <Light className="yield" on={on} />
      <Light className="go" on={on} />
    </div>
  )
}

export default TrafficLight
