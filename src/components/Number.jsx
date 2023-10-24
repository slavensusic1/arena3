import React from "react";
import { useSpring, animated } from "@react-spring/web";

function Number({ n, title, checkmark }) {
  const { number } = useSpring({
    from: { number: 0 },
    number: n,
    delay: 200,
    config: { mass: 1, tension: 30, friction: 20 },
  });

  return (

     <div class="flex items-center justify-center p-6">
      <div class="text-2xl font-bold">
        <p className="w-14">{checkmark}</p>
      </div>
      <div class="flex flex-col items-center justify-center ml-4">
        <div class="flex items-center space-x-1 justify-center text-gray-100">
          <animated.div class="text-3xl font-bold">{number.to((n) => n.toFixed(0))}</animated.div>
          <p class="text-lg">+</p>
        </div>
         </div>
    </div>
  );
}

export default Number;
