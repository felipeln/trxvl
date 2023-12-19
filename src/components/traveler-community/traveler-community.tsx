import { useDraggable } from "react-use-draggable-scroll";
import { MutableRefObject, useEffect, useRef  } from "react";


type Props = {
  title: string,
  image: string,
}

const Community = ({title,image}: Props) => {

  const baseUrl = `/src/assets/travel-community`

  const imageUrl =  `${baseUrl}/${image}`

  const bgGradient = {
    backgroundImage: `url(${imageUrl})`,
    backgroundPosition: '50%',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundColor: '#FFF',
  }
  

  return(
    <li className="cursor-pointer shrink-0 flex flex-col  bg-white lg:bg-transparent last:pr-4">
      <div className="w-80 h-52 rounded-md bg-center object-cover" style={bgGradient}></div>
      <h3 className="text-black text-2xl mt-2">{title}</h3>
      <p className="text-base mt text-black opacity-50">Travel community <br /> 155,073 travelers</p>
    </li>
  )
}


const TravelerCommunity = () => {

  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      const travelCommunityContainer = document.querySelector('#travel-community')
       if(window.innerWidth > 1024) {
        travelCommunityContainer?.classList.add('visible')
        travelCommunityContainer?.classList.remove('hidden')
      }if (window.innerWidth < 1024) {
        travelCommunityContainer?.classList.remove('visible')
        travelCommunityContainer?.classList.add('hidden')
      }
    }
    // Add event listener
    window.addEventListener("resize", handleResize);
    handleResize();
    
    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, );

  const ref = useRef<HTMLUListElement>(null) as MutableRefObject<HTMLUListElement>;
  const { events } = useDraggable(ref);

  return(
    <section id="travel-community" className="pl-120 mb-16">
     <h2 className="font-bold pb-6 text-3xl">Connect with other travelers in our community</h2>

     <ul className="flex gap-4 overflow-x-auto pb-4" 
      {...events}
      ref={ref}
     >

      <Community title="India" image="india.jpg"/>
      <Community title="Travel Talk" image="travel-talk.jpg"/>
      <Community title="Beach" image="beach.jpg"/>
      <Community title="Mountains" image="mountains.jpg"/>
      <Community title="Skii" image="skii.jpg" />

     </ul>
  </section>

  )
}

export {TravelerCommunity}