import React from 'react';
import Number from './Number'; 

function CounterComponent() {
  return (
    <div className="py-5 px-10 md:py-20 bg-gray-800 text-white">
    <h2 className="text-3xl md:text-5xl text-white font-bold text-left mb-4">Uspijeh u brojevima</h2>
    <p className="text-left text-lg mb-6">
    Uspjeh se ogleda u brojkama, a naša predanost i stručnost čine razliku. Kroz godine posvećenog rada i neprestanog usavršavanja, stvaramo inovativna rješenja koja prevazilaze očekivanja naših klijenata. Naša stručnost u IT sektoru omogućava nam da uspješno isporučujemo kvalitetne proizvode i usluge, postižemo zadane ciljeve i stvaramo dugotrajna partnerstva. Uz nas, brojevi nisu samo statistika, već rezultat naše strasti i posvećenosti.
  </p>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-5">
      <Number n={100} title="Klijenti" />
      <Number n={50} title="Projekti" />
      <Number n={10} title="Godine iskustva" />
      <Number n={70} title="Rješenja" />
    </div>
  </div>
  );
}

export default CounterComponent;
