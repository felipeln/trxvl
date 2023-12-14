import { useEffect, useState, useRef,  MutableRefObject } from "react";
import { useDraggable } from "react-use-draggable-scroll";

type Props = {
  title: string,
  image: string
}

const Category = ({title,image}: Props) => {
  
  const [imageUrl, setImageUrl] = useState('');

  const baseUrl = '/src/assets/categories';
  
  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
       if(window.innerWidth > 1024) {
        setImageUrl(`${baseUrl}/desktop/${image}`);
      }if (window.innerWidth < 1024) {
        setImageUrl(`${baseUrl}/mobile/${image}`);
      }
    }
    
    // Add event listener
    window.addEventListener("resize", handleResize);
    handleResize();
    
    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, [image]);

  return(
    <li className="cursor-pointer shrink-0 w-20 h-16 flex flex-col items-center bg-white lg:bg-transparent ">
      <img src={imageUrl} className="w-8 h-8 bg-cover opacity-40 lg:opacity-100 lg:w-10 lg:h-10"  alt="" />
      <h3 className="text-black text-sm  opacity-60 lg:text-white">{title}</h3>
    </li>
  )
}

const Categories = () => {

  const ref = useRef<HTMLUListElement>(null) as MutableRefObject<HTMLUListElement>;
  const { events } = useDraggable(ref);


  return(
      <section className="p-6 lg:absolute  top-[510px]  z-10  lg:p-0 lg:px-120 lg:w-full ">
        <h2 className="font-bold text-2xl pb-6 lg:text-white lg:text-4xl">Top Categories</h2>

        <ul className="flex gap-4 overflow-x-auto pb-4 lg:justify-between" 
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



export {Categories, Category}