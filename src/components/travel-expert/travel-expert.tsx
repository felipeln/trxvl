import { useEffect } from "react";

const TravelExpert = () =>{


  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      const travelExportContainer = document.querySelector('#travel-expert')
       if(window.innerWidth > 1024) {
        travelExportContainer?.classList.add('visible')
        travelExportContainer?.classList.remove('hidden')
      }if (window.innerWidth < 1024) {
        travelExportContainer?.classList.remove('visible')
        travelExportContainer?.classList.add('hidden')
      }
    }
    // Add event listener
    window.addEventListener("resize", handleResize);
    handleResize();
    
    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, );


  const bgStyle = {
    background: 'linear-gradient(0deg, rgba(0, 0, 0, 0.35) 0%, rgba(0, 0, 0, 0.35) 100%), url("/src/assets/trip.png") no-repeat center center / cover, lightgray'
  }

  return(

    <section id="travel-expert" className="px-120 py-16">
     <div className="flex flex-col gap-4 justify-start h-[437px] rounded-3xl px-20 py-24" style={bgStyle}>
      <h2 className="text-white text-6xl font-bold w-9/12">Plan your trip with travel expert</h2>
      <p className="text-white text-3xl">Our professional advisors can craft your perfect itinerary</p>
     </div>
    </section>
  )
}

export {TravelExpert}