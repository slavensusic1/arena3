import React from "react";
import { useSpring, animated } from "@react-spring/web";

function Number({n, title}) {
  const { number } = useSpring({
    from: { number: 0 },
    number: n,
    delay: 200,
    config: { mass: 1, tension: 30, friction: 20 }
  });

  return (
  <div className="flex flex-col items-left text-2xl text-gray-800">
     <div className="flex justify-center items-center"><animated.div>{number.to((n) => n.toFixed(0))}</animated.div>+</div>
    <p className="text-base">{title}</p>
   


  </div>
  
  )
}

export default Number;
