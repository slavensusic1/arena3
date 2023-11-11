import React from "react";
import Number from "./Number";
import checkmark from "../assets/idea.svg";
import checkmark2 from "../assets/icon2.png";
import checkmark3 from "../assets/icon3.png";
import checkmark4 from "../assets/icon4.png";

function CounterComponent() {
  const checkmark = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="#22c55e" d="M13 3c3.9 0 7 3.1 7 7c0 2.8-1.6 5.2-4 6.3V21H9v-3H8c-1.1 0-2-.9-2-2v-3H4.5c-.4 0-.7-.5-.4-.8L6 9.7C6.2 5.9 9.2 3 13 3m0-2C8.4 1 4.6 4.4 4.1 8.9L2.5 11c-.6.8-.6 1.8-.2 2.6c.4.7 1 1.2 1.7 1.3V16c0 1.9 1.3 3.4 3 3.9V23h11v-5.5c2.5-1.7 4-4.4 4-7.5c0-5-4-9-9-9m1 13h-2v-1h2v1m1.6-4.5c-.3.4-.6.8-1.1 1.1V12h-3v-1.4c-1.4-.8-1.9-2.7-1.1-4.1s2.7-1.9 4.1-1.1s1.9 2.7 1.1 4.1Z"/></svg>
  );
  const checkmark2 = (
    <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 256 256"><path fill="#22c55e" d="M106 112a6 6 0 0 1 6-6h32a6 6 0 0 1 0 12h-32a6 6 0 0 1-6-6Zm124-40v128a14 14 0 0 1-14 14H40a14 14 0 0 1-14-14V72a14 14 0 0 1 14-14h42V48a22 22 0 0 1 22-22h48a22 22 0 0 1 22 22v10h42a14 14 0 0 1 14 14ZM94 58h68V48a10 10 0 0 0-10-10h-48a10 10 0 0 0-10 10ZM38 72v42.79A186 186 0 0 0 128 138a185.91 185.91 0 0 0 90-23.22V72a2 2 0 0 0-2-2H40a2 2 0 0 0-2 2Zm180 128v-71.63A198.12 198.12 0 0 1 128 150a198.05 198.05 0 0 1-90-21.62V200a2 2 0 0 0 2 2h176a2 2 0 0 0 2-2Z"/></svg>
  );
  const checkmark3 = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="#22c55e" d="M2 7V5q0-.825.588-1.413T4 3h16q.825 0 1.413.588T22 5v2h-2V5H4v2H2Zm6 14v-2H4q-.825 0-1.413-.588T2 17v-2h2v2h16v-2h2v2q0 .825-.588 1.413T20 19h-4v2H8Zm4-10Zm-7.2 0l2.6-2.6L6 7l-4 4l4 4l1.4-1.4L4.8 11Zm14.4 0l-2.6 2.6L18 15l4-4l-4-4l-1.4 1.4l2.6 2.6Z"/></svg>
  );
  const checkmark4 = (
    <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 32 32"><path fill="#22c55e" d="M16 30a14 14 0 1 1 14-14a14 14 0 0 1-14 14Zm0-26a12 12 0 1 0 12 12A12 12 0 0 0 16 4Z"/><path fill="#22c55e" d="M20.59 22L15 16.41V7h2v8.58l5 5.01L20.59 22z"/></svg>
  );
  return (
    <div class="relative pt-8 md:pt-16 lg:pt-24" id="features">
       <div class="mx-auto max-w-6xl md:px-8 lg:px-4 xl:px-0">
       <div class="mx-auto md:w-4/5 lg:w-3/5">
       <div class="text-center w-full ">
                    <h1 class="text-3xl lg:text-6xl   md:text-5xl font-bold dark:text-white text-gray-700 relative">
                      Digital arena u brojkama
                  </h1>
                  <div class="text-center mb-10">
                    <span class="inline-block w-1 h-1 rounded-full bg-green-500 ml-1"></span>
                    <span class="inline-block w-3 h-1 rounded-full bg-green-500 ml-1"></span>
                    <span class="inline-block w-40 h-1 rounded-full bg-green-500"></span>
                    <span class="inline-block w-3 h-1 rounded-full bg-green-500 ml-1"></span>
                    <span class="inline-block w-1 h-1 rounded-full bg-green-500 ml-1"></span>
                  </div>
                  </div>
    <p class="mt-4 text-center text-gray-600 dark:text-gray-300">
        Digitalna Arena je naše stvaralačko igralište gdje brojke postaju
        stvarnost. Uspjeh definiramo koristeći ključne statistike:
    </p>
</div>
        
         </div>
            <div class="relative grid overflow-hidden rounded-[1.25rem] bg-gray-100 p-1 dark:bg-gray-800/50 sm:grid-cols-2">
              <div
                class="flex flex-col gap-6 
                  rounded-2xl p-8 transition duration-300 hover:bg-white hover:shadow-2xl hover:shadow-gray-600/10 dark:hover:bg-gray-700/60 dark:hover:shadow-none"
              >
                <div>
                  <h2 class="text-base md:text-3xl  font-semibold text-center  text-gray-900 dark:text-white">
                    Inovativnih riješenja
                  </h2>
                  <Number
                    n={80}
                    title=" Inovativnih rješenja"
                    checkmark={checkmark}
                    client:load
                  />
                </div>
              </div>

              <div class="flex flex-col  gap-6 rounded-2xl p-8 transition duration-300 hover:bg-white hover:shadow-2xl hover:shadow-gray-600/10 dark:hover:bg-gray-700/60 dark:hover:shadow-none">
                <div>
                  <h2 class="text-base md:text-3xl text-center font-semibold text-gray-900 dark:text-white">
                    Stalnih klienata
                  </h2>
                  <Number
                    n={90}
                    title=" Inovativnih rješenja"
                    checkmark={checkmark2}
                    client:load
                  />
                </div>
              </div>

              <div class="flex flex-col gap-6 rounded-2xl p-8 transition duration-300 hover:bg-white hover:shadow-2xl hover:shadow-gray-600/10 dark:hover:bg-gray-700/60 dark:hover:shadow-none">
                <div>
                  <h2 class="text-base md:text-3xl  font-semibold text-center  text-gray-900 dark:text-white">
                    Realiziranih projekata
                  </h2>
                  <Number
                    n={200}
                    title=" Završenih projekata"
                    checkmark={checkmark3}
                    client:load
                  />
                </div>
              </div>

              <div class="flex flex-col gap-6 rounded-2xl p-8 transition duration-300 hover:bg-white hover:shadow-2xl hover:shadow-gray-600/10 dark:hover:bg-gray-700/60 dark:hover:shadow-none">
                <div>
                  <h2 class="text-base md:text-3xl font-semibold text-center  text-gray-900 dark:text-white">
                  Godina iskustva
                  </h2>
                  <Number
                    n={12}
                    checkmark={checkmark4}
                    client:load
                  />
                </div>
              </div>
            </div>
            <div class="absolute hidden lg:block w-1/2 -left-1/2 top-0 -translate-x-1/2 blur-2xl xl:top-[10rem] -z-10" aria-hidden="true">
      <div class="aspect-[1155/678] w-[10.1875rem] bg-gradient-to-tr from-blue-200 to-[#352bc5] opacity-30" style={{ clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" }}></div></div>
          </div>
         
           



  );
}

export default CounterComponent;
