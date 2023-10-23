import React from 'react';
import Number from './Number'; 

function CounterComponent() {
  return (
    <div className="px-5 text-gray-800 bg-gray-200 h-full">
      <div className="">
        <div className="text-center w-full py-5">
          <h1 className="text-3xl lg:text-6xl max-w-lg mx-auto md:text-5xl font-bold mb-5 text-gray-700">Projekti</h1>
        
          <div className="text-center mb-10">
            <span className="inline-block w-1 h-1 rounded-full bg-green-500 ml-1"></span>
            <span className="inline-block w-3 h-1 rounded-full bg-green-500 ml-1"></span>
            <span className="inline-block w-40 h-1 rounded-full bg-green-500"></span>
            <span className="inline-block w-3 h-1 rounded-full bg-green-500 ml-1"></span>
            <span className="inline-block w-1 h-1 rounded-full bg-green-500 ml-1"></span>
          </div>
          <h3 className="text-base text-left max-w-lg mx-auto mb-5 font-light">Uspjeh se ogleda u brojkama, a naša predanost i stručnost čine razliku. Kroz godine posvećenog rada i neprestanog usavršavanja, stvaramo inovativna rješenja koja prevazilaze očekivanja naših klijenata. Naša stručnost u IT sektoru omogućava nam da uspješno isporučujemo kvalitetne proizvode i usluge, postižemo zadane ciljeve i stvaramo dugotrajna partnerstva. Uz nas, brojevi nisu samo statistika, već rezultat naše strasti i posvećenosti.
          </h3>
        </div>

        <div className="grid text-black grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-5 justify-items-center">
          <Number n={100} title="Klijenti" />
          <Number n={50} title="Projekti" />
          <Number n={10} title="Godine iskustva" />
          <Number n={70} title="Rješenja" />
        </div>
      </div>
    </div>
  );
}

export default CounterComponent;
