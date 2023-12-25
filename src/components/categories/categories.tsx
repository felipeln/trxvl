import { useEffect, useState, ReactNode } from "react";
import { Carousel} from "../carousel/carousel";
import { CarouselItemBasic } from "../carousel/carousel-item-basic";
type Props = {
  title: string,
  image: string,
  children?: ReactNode
}

const Category = ({title,image}: Props) => {
  const [imageUrl, setImageUrl] = useState('');

  const baseUrl = 'src/assets/categories';
  
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

  const bgStyle = {
    backgroundImage: `url("${imageUrl}")`,
    backgroundPosition: '50%',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  }


  const Style = {
    li: 'cursor-pointer shrink-0 w-20 h-16 flex flex-col items-center bg-white lg:bg-transparent',
    image: {
      bgStyle,
      classes: "w-8 h-8 bg-cover opacity-40 lg:opacity-100 lg:w-10 lg:h-10"
    },
    imageTitle: 'text-black text-sm  opacity-60 lg:text-white',
  }


  return(
    <CarouselItemBasic imageTitle={title} styles={Style}/>
  )
}

const Categories = () => {

  const ContainerStyle = {
    title: 'font-bold text-2xl pb-6 lg:text-white lg:text-3xl',
    container: 'p-6 lg:absolute lg:top-[510px]  lg:z-10  lg:p-0 lg:px-120 lg:w-full ',
    ul: 'flex gap-4 overflow-x-auto pb-4 lg:justify-between'
  }

  return(
    <Carousel id="Categories-container" title="Top categories" styles={ContainerStyle}>
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
    </Carousel>
  )
}



export {Categories, Category}