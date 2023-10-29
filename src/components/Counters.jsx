import React from 'react';
import Number from './Number'; 
import checkmark from "../assets/idea.svg"
import checkmark2 from "../assets/icon2.png"
import checkmark3 from "../assets/icon3.png"
import checkmark4 from "../assets/icon4.png"


function CounterComponent() {
const checkmark=<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="-0.5 -0.5 14 14" ><g id="collaborations-idea--collaborations-idea-work"><path id="Vector" fill="#d6e0e5" d="M3.8944285714285716 7.515857142857143a1.7271428571428573 1.7271428571428573 0 1 0 0 -3.453357142857143 1.7271428571428573 1.7271428571428573 0 0 0 0 3.453357142857143Z" stroke-width="1"></path><path id="Vector_2" fill="#d6e0e5" d="M0.9285714285714286 10.868928571428572a3.4171428571428573 3.4171428571428573 0 0 0 -0.44292857142857145 1.6472857142857145h6.819428571428572a3.4171428571428573 3.4171428571428573 0 0 0 -0.44292857142857145 -1.6472857142857145 3.4459285714285715 3.4459285714285715 0 0 0 -2.9667857142857144 -1.7345714285714287A3.4459285714285715 3.4459285714285715 0 0 0 0.9285714285714286 10.868928571428572Z" stroke-width="1"></path><path id="Vector_3" fill="#d6e0e5" d="M11.06857142857143 4.696714285714286a1.9082142857142859 1.9082142857142859 0 0 0 -1.927714285714286 -1.8961428571428571 1.9082142857142859 1.9082142857142859 0 0 0 -1.8487857142857145 1.9750714285714284 1.919357142857143 1.919357142857143 0 0 0 1.0455714285714286 1.6064285714285715v0.9285714285714286a0.2107857142857143 0.2107857142857143 0 0 0 0.20985714285714288 0.2042857142857143h1.2637857142857143a0.2107857142857143 0.2107857142857143 0 0 0 0.2107857142857143 -0.2042857142857143V6.365357142857143a1.9212142857142858 1.9212142857142858 0 0 0 1.0474285714285714 -1.668642857142857Z" stroke-width="1"></path><path id="Vector_4" stroke="#4caf50" stroke-linecap="round" stroke-linejoin="round" d="M3.8944285714285716 7.515857142857143a1.7271428571428573 1.7271428571428573 0 1 0 0 -3.453357142857143 1.7271428571428573 1.7271428571428573 0 0 0 0 3.453357142857143Z" stroke-width="1"></path><path id="Vector_5" stroke="#4caf50" stroke-linecap="round" stroke-linejoin="round" d="M0.48564285714285715 12.516214285714286A3.4171428571428573 3.4171428571428573 0 0 1 0.9285714285714286 10.868a3.4459285714285715 3.4459285714285715 0 0 1 2.9667857142857144 -1.7345714285714287c1.2164285714285714 0.002785714285714286 2.367857142857143 0.6750714285714285 2.9667857142857144 1.7345714285714287a3.4171428571428573 3.4171428571428573 0 0 1 0.44292857142857145 1.6472857142857145" stroke-width="1"></path><path id="Vector 606" stroke="#4caf50" stroke-linecap="round" stroke-linejoin="round" d="M9.180785714285715 1.2842142857142858v-0.7614285714285715" stroke-width="1"></path><path id="Vector 610" stroke="#4caf50" stroke-linecap="round" stroke-linejoin="round" d="m11.779857142857143 2.2192857142857143 0.6230714285714286 -0.43735714285714283" stroke-width="1"></path><path id="Vector 611" stroke="#4caf50" stroke-linecap="round" stroke-linejoin="round" d="m6.5798571428571435 2.2192857142857143 -0.6240000000000001 -0.43735714285714283" stroke-width="1"></path><path id="Vector_6" stroke="#4caf50" stroke-linecap="round" stroke-linejoin="round" d="M11.06857142857143 4.696714285714286a1.9082142857142859 1.9082142857142859 0 0 0 -1.928642857142857 -1.8961428571428571 1.9082142857142859 1.9082142857142859 0 0 0 -1.8478571428571429 1.9750714285714284 1.919357142857143 1.919357142857143 0 0 0 1.0455714285714286 1.6064285714285715v0.9285714285714286a0.2107857142857143 0.2107857142857143 0 0 0 0.20985714285714288 0.2042857142857143h1.2637857142857143a0.2107857142857143 0.2107857142857143 0 0 0 0.2107857142857143 -0.2042857142857143V6.365357142857143a1.9221428571428572 1.9221428571428572 0 0 0 1.0474285714285714 -1.668642857142857Z" stroke-width="1"></path></g></svg>
const checkmark2= <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="-0.5 -0.5 14 14"><g id="office-worker--office-worker-human-resources"><path id="Vector" fill="#d6e0e5" d="M6.773928571428572 9.257857142857144c0 -0.45221428571428574 0.3667857142857143 -0.8190000000000001 0.8190000000000001 -0.8190000000000001h4.096857142857143c0.45221428571428574 0 0.8190000000000001 0.3667857142857143 0.8190000000000001 0.8199285714285715v2.4579285714285715a0.8190000000000001 0.8190000000000001 0 0 1 -0.8190000000000001 0.8190000000000001H7.592928571428572a0.8190000000000001 0.8190000000000001 0 0 1 -0.8190000000000001 -0.8190000000000001V9.257857142857144Z" stroke-width="1"></path><path id="Vector_2" fill="#d6e0e5" d="M1.443 5.130357142857143A3.25 3.25 0 0 1 6.992142857142857 7.428571428571429v1.3928571428571428H5.4154285714285715l-0.4642857142857143 3.7142857142857144H2.5322142857142858l-0.4642857142857143 -3.7142857142857144H0.49121428571428577V7.428571428571429a3.25 3.25 0 0 1 0.9517857142857142 -2.2982142857142858Z" stroke-width="1"></path><path id="Vector_3" fill="#d6e0e5" d="M3.7421428571428574 4.178571428571429a1.8571428571428572 1.8571428571428572 0 1 0 0 -3.7142857142857144 1.8571428571428572 1.8571428571428572 0 0 0 0 3.7142857142857144Z" stroke-width="1"></path><path id="Vector_4" stroke="#4caf50" stroke-linecap="round" stroke-linejoin="round" d="M3.7421428571428574 4.178571428571429a1.8571428571428572 1.8571428571428572 0 1 0 0 -3.7142857142857144 1.8571428571428572 1.8571428571428572 0 0 0 0 3.7142857142857144Z" stroke-width="1"></path><path id="Vector_5" stroke="#4caf50" stroke-linecap="round" stroke-linejoin="round" d="M5.307714285714286 9.772285714285713 4.962285714285715 12.535714285714286H2.5322142857142858l-0.4642857142857143 -3.7142857142857144H0.49121428571428577V7.428571428571429a3.25 3.25 0 0 1 6.446142857142857 -0.5887142857142857" stroke-width="1"></path><path id="Vector_6" stroke="#4caf50" stroke-linecap="round" stroke-linejoin="round" d="M6.773928571428572 9.257857142857144c0 -0.45221428571428574 0.3667857142857143 -0.8190000000000001 0.8190000000000001 -0.8190000000000001h4.096857142857143c0.45221428571428574 0 0.8190000000000001 0.3667857142857143 0.8190000000000001 0.8199285714285715v2.4579285714285715a0.8190000000000001 0.8190000000000001 0 0 1 -0.8190000000000001 0.8190000000000001H7.592928571428572a0.8190000000000001 0.8190000000000001 0 0 1 -0.8190000000000001 -0.8190000000000001V9.257857142857144Z" stroke-width="1"></path><path id="Vector_7" stroke="#4caf50" stroke-linecap="round" stroke-linejoin="round" d="M8.52057142857143 8.438857142857142v-0.6035714285714286a0.9285714285714286 0.9285714285714286 0 0 1 0.9285714285714286 -0.9285714285714286h0.38257142857142856a0.9285714285714286 0.9285714285714286 0 0 1 0.9285714285714286 0.9285714285714286v0.6035714285714286" stroke-width="1"></path></g></svg>
const checkmark3=<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="-0.5 -0.5 14 14" ><g id="projector-board--projector-screen-work-meeting-presentation"><path id="Vector" fill="#d6e0e5" d="M11.607142857142858 0.4642857142857143h-10.214285714285715a0.9285714285714286 0.9285714285714286 0 0 0 -0.9285714285714286 0.9285714285714286v1.8571428571428572h12.071428571428571v-1.8571428571428572a0.9285714285714286 0.9285714285714286 0 0 0 -0.9285714285714286 -0.9285714285714286Z" stroke-width="1"></path><path id="Vector_2" fill="#d6e0e5" d="M12.535714285714286 8.821428571428571v-5.571428571428571H0.4642857142857143v5.571428571428571a0.9285714285714286 0.9285714285714286 0 0 0 0.9285714285714286 0.9285714285714286h10.214285714285715a0.9285714285714286 0.9285714285714286 0 0 0 0.9285714285714286 -0.9285714285714286Z" stroke-width="1"></path><path id="Vector_3" stroke="#4caf50" stroke-linecap="round" stroke-linejoin="round" d="M11.607142857142858 0.4642857142857143h-10.214285714285715a0.9285714285714286 0.9285714285714286 0 0 0 -0.9285714285714286 0.9285714285714286v7.428571428571429a0.9285714285714286 0.9285714285714286 0 0 0 0.9285714285714286 0.9285714285714286h10.214285714285715a0.9285714285714286 0.9285714285714286 0 0 0 0.9285714285714286 -0.9285714285714286v-7.428571428571429a0.9285714285714286 0.9285714285714286 0 0 0 -0.9285714285714286 -0.9285714285714286Z" stroke-width="1"></path><path id="Vector_4" stroke="#4caf50" stroke-linecap="round" stroke-linejoin="round" d="M0.4642857142857143 3.25h12.071428571428571" stroke-width="1"></path><path id="Vector_5" stroke="#4caf50" stroke-linecap="round" stroke-linejoin="round" d="M6.5 9.75v2.7857142857142856" stroke-width="1"></path><path id="Vector_6" stroke="#4caf50" stroke-linecap="round" stroke-linejoin="round" d="m5.107142857142858 9.75 -2.7857142857142856 2.7857142857142856" stroke-width="1"></path><path id="Vector_7" stroke="#4caf50" stroke-linecap="round" stroke-linejoin="round" d="m7.892857142857143 9.75 2.7857142857142856 2.7857142857142856" stroke-width="1"></path></g></svg>
const checkmark4=<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="-0.5 -0.5 14 14" ><g id="decent-work-and-economic-growth"><path id="Vector" fill="#d6e0e5" d="M11.550500000000001 11.946071428571429V4.822071428571428L6.373714285714286 7.285571428571429 4.382857142857143 4.471071428571429 1.197857142857143 5.877857142857144v6.068214285714286l10.352642857142857 0Z" stroke-width="1"></path><path id="Rectangle 12" stroke="#4caf50" stroke-linecap="round" stroke-linejoin="round" d="m8.364571428571429 6.229785714285714 3.185 -1.4077142857142857v7.124h-3.185V6.229785714285714Z" stroke-width="1"></path><path id="Rectangle 13" stroke="#4caf50" stroke-linecap="round" stroke-linejoin="round" d="m4.382857142857143 4.471071428571429 1.990857142857143 2.8135714285714286L8.364571428571429 6.230714285714286v5.715357142857143H4.382857142857143v-7.4750000000000005Z" stroke-width="1"></path><path id="Rectangle 14" stroke="#4caf50" stroke-linecap="round" stroke-linejoin="round" d="m1.197857142857143 5.877857142857144 3.185 -1.4067857142857143v7.4750000000000005H1.197857142857143V5.877857142857144Z" stroke-width="1"></path><path id="Vector 570" stroke="#4caf50" stroke-linecap="round" stroke-linejoin="round" d="M12.340714285714286 1.0557857142857143 7.290214285714286 4.283500000000001l-2.3214285714285716 -2.7142142857142857L0.8152857142857143 3.7031428571428573" stroke-width="1"></path><path id="Vector 830" stroke="#4caf50" stroke-linecap="round" stroke-linejoin="round" d="m9.829857142857144 0.6295714285714287 2.5099285714285715 0.41785714285714287 -0.41785714285714287 2.510857142857143" stroke-width="1"></path></g></svg>
return (
       <div class="relative pt-32 md:pt-44" id="features">
        <div class="mx-auto max-w-6xl px-6 md:px-12 lg:px-6 xl:px-0">
          <div class="mx-auto md:w-3/5">
            <h2
              class="text-center text-3xl font-bold text-gray-900 dark:text-white md:text-4xl lg:text-5xl"
            >
            Digital Arena u brojkama
            </h2>
            <p class="mt-4 text-center text-gray-600 dark:text-gray-300">
            Digitalna Arena je naše stvaralačko igralište gdje brojke postaju stvarnost. Uspjeh definiramo koristeći ključne statistike:
            </p>
          </div><div class="mt-16 md:mt-20">
            <div
              class="relative grid rounded-3xl border border-gray-200 p-1 dark:border-gray-800 lg:grid-cols-2"
            >
              <div class="absolute inset-0  h-max dark:block lg:my-auto">
                <div
                  aria-hidden="true"
                  class="grid grid-cols-3 -space-x-96 opacity-50 dark:opacity-70 2xl:mx-auto 2xl:max-w-4xl"
                >
                  <div
                    class="h-60 bg-gradient-to-br from-primary to-purple-400 blur-3xl dark:from-blue-700"
                  >
                  </div>
                  <div
                    class="h-72 rounded-full bg-gradient-to-r from-green-400 to-sky-00 blur-3xl dark:from-transparent dark:to-indigo-600"
                  >
                  </div>
                </div>
              </div>
              <div>
                <div
                  class="relative flex h-full flex-col items-center justify-center gap-6 p-8 py-16 lg:py-8"
                >
                
                  <div class="mx-auto text-center">
                    <h2
                      class="text-5xl font-semibold text-gray-900 dark:text-white"
                    >
                  Digital Arena u brojkama
                    </h2>
                    <div className="text-center mb-10">
            <span className="inline-block w-1 h-1 rounded-full bg-green-500 ml-1"></span>
            <span className="inline-block w-3 h-1 rounded-full bg-green-500 ml-1"></span>
            <span className="inline-block w-40 h-1 rounded-full bg-green-500"></span>
            <span className="inline-block w-3 h-1 rounded-full bg-green-500 ml-1"></span>
           
          </div>
                  </div>
                </div>
              </div>
              <div
                class="relative grid overflow-hidden rounded-[1.25rem] bg-gray-100 p-1 dark:bg-gray-800/50 sm:grid-cols-2"
              >
                <div
                  class="flex flex-col gap-6 
                  rounded-2xl p-8 transition duration-300 hover:bg-white hover:shadow-2xl hover:shadow-gray-600/10 dark:hover:bg-gray-700/60 dark:hover:shadow-none"
                >
                                   <div>
                    <h2
                      class="text-xl font-semibold text-gray-900 dark:text-white"
                    >
                    Inovativnih riješenja
                    </h2>
                    <Number n={80} title=" Inovativnih rješenja" checkmark={checkmark} client:load />
                  </div>
                </div>

                <div
                  class="flex flex-col gap-6 rounded-2xl p-8 transition duration-300 hover:bg-white hover:shadow-2xl hover:shadow-gray-600/10 dark:hover:bg-gray-700/60 dark:hover:shadow-none"
                >
                
                  <div>
                    <h2
                      class="text-xl font-semibold text-gray-900 dark:text-white"
                    >
                   Stalnih klienata
                    </h2>
                    <Number n={90} title=" Inovativnih rješenja" checkmark={checkmark2} client:load />
                  </div>
                </div>

                <div
                  class="flex flex-col gap-6 rounded-2xl p-8 transition duration-300 hover:bg-white hover:shadow-2xl hover:shadow-gray-600/10 dark:hover:bg-gray-700/60 dark:hover:shadow-none"
                >
                   <div>
                    <h2
                      class="text-xl font-semibold text-gray-900 dark:text-white"
                    >
                     Realiziranih projekata
                    </h2>
                    <Number n={200} title=" Završenih projekata" checkmark={checkmark3} client:load />
                  </div>
                </div>

                <div
                  class="flex flex-col gap-6 rounded-2xl p-8 transition duration-300 hover:bg-white hover:shadow-2xl hover:shadow-gray-600/10 dark:hover:bg-gray-700/60 dark:hover:shadow-none"
                >
                 
                  <div>
                    <h2
                      class="text-xl font-semibold text-gray-900 dark:text-white"
                    >
                    Inovativnih rješenja
                    </h2>
                    <Number n={120} title=" Inovativnih rješenja" checkmark={checkmark4} client:load />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
   
    
  );
}

export default CounterComponent;
