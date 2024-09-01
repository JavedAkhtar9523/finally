import React from 'react'

 function TakeA({title, imgSrc}) {

  return (
    <div>
         {/*<h6>{title}</h6> */}
     <div className='text-center mx-4 px-5'>
          <img src='solution.jpg' className='img-fluid rounded-2' width="180" height="180" />
          <h5 className='text-secondary fw-semibold mt-2 fs-5'>Software Development & Consulting Services</h5>
     </div>
     <div className='px-4 text-center mx-4'>
     <h3 className="fs-3" style={{color : "rgba(20,26,167,255)"}}>AmbiSpine Techonologies</h3>
     <button className='py-2 px-3 text-white  border-0 rounded-2 my-2 ' style={{backgroundColor: "rgba(0,39,246,255)"}}>Take a tour</button>
     </div>
    </div>
  );
}

export default function TakeATour() {
          return(
                    <div className='card' style={{width: "90%"}}>
                              <h6 className='p-3 text-secondary fw-bolder'>Perfect Match</h6>  
                              <div className='card-body'>
                              <TakeA />
                              <TakeA />
                              <TakeA />
                              </div>
                 
                    </div>
          );
}