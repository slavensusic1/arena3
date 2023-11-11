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

     <div class="flex justify-center p-2">
      <div class="text-2xl font-bold">
        <p className="w-10 md:w-14 flex text-center">{checkmark}</p>
      </div>
      <div class="flex flex-col items-center justify-center ml-4">
        <div class="flex text-base md:text-3xl items-center space-x-1 justify-center dark:text-gray-100">
          <animated.div class="text-2xl md:text-3xl font-bold">{number.to((n) => n.toFixed(0))}</animated.div>
          <p class="text-lg">+</p>
        </div>
         </div>
    </div>
  );
}

export default Number;
