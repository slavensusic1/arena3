import React from "react";
import Number from "./Number";


function CounterComponent({yearsHelping,workingEmp,completedPro,happyCustomer
}) {


  return (
<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 items-center justify-center gap-y-16 py-10" style={{backgroundImage:'../../assets/banner.jpg'}}>
                            <Number
                    n={10}
                    title={yearsHelping}
              
                    client:visible
                  />
            

           
              
                  <Number
                    n={50}
                    title={workingEmp}
            className="z-20"
                    client:visible
                  />
         

          
              
                  <Number
                    n={36}
                    title={completedPro}
            
                    client:visible
                  />
          

          
                  <Number
                    n={20}
                    title={happyCustomer}
                    client:visible
                  />
           
   
           </div>
   
           



  );
}

export default CounterComponent;
