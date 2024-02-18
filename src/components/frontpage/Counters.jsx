import React from "react";
import Number from "./Number";


function CounterComponent({yearsHelping,workingEmp,completedPro,happyCustomer})

{
  let data= [
    {
      number:10,
      title:yearsHelping
      
    },
    {
      number:50,
      title:workingEmp
    },
    {
      number:36,
    title:completedPro
    },
    {
      number:36,
      title:completedPro
    }
 
  ]

  return (
<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 items-center justify-center gap-y-16 py-10" style={{backgroundImage:'../../assets/banner.jpg'}}>

  {data.map((dat) => {
    return <div>
      <Number title={dat.title} n={dat.number} client:visible/>
    </div>
    
  })}

           </div>
   
           



  );
}

export default CounterComponent;
