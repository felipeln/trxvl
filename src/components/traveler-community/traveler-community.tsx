import { useDraggable } from "react-use-draggable-scroll";
import { Category } from "../categories/categories"
import { MutableRefObject, useRef } from "react";


const TravelerCommunity = () => {


  const ref = useRef<HTMLUListElement>(null) as MutableRefObject<HTMLUListElement>;
  const { events } = useDraggable(ref);

  return(
    <section className="px-120">
     <h2 className="font-bold pb-6 text-3xl">Connect with other travelers in our community</h2>


     <ul className="flex gap-4 overflow-x-auto pb-4" 
      {...events}
      ref={ref}
     >

        <Category title="Beaches" image="beaches.png" />
        <Category title="Deserts" image="deserts.png" />
        <Category title="Mountains" image="mountains.png" />
        <Category title="Iconic Cities" image="iconic-cities.png" />
        <Category title="Houseboats" image="house-boats.png" />
        <Category title="Countryside" image="country-side.png" />
        <Category title="Camping" image="camping.png" />
        <Category title="Castles" image="castles.png" />
        <Category title="Skiing" image="skiing.png" />
        <Category title="Tropical" image="tropical.png" />

     </ul>
  </section>

  )
}

export {TravelerCommunity}