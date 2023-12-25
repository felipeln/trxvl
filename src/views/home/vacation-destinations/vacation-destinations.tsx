import { Carousel} from "../../../components/carousel/carousel";
import { CarouselItemBasic } from "../../../components/carousel/carousel-item-basic";

type Props = {
  title: string,
  image: string
}

const Destiny = ({image,title}:Props) => {

  const baseUrl = '/src/assets/destinations'
  const imageUrl = `${baseUrl}/${image}`

  const bgStyle = {
    background:
      `linear-gradient(180deg, rgba(0, 0, 0, 0.00) 50%, rgba(0, 0, 0, 0.75) 100%), url("${imageUrl}") lightgray 50% / cover no-repeat`
  }

  const Style = {
    li: 'cursor-pointer shrink-0 relative last:pr-4 rounded-md',
    image: {
      bgStyle,
      classes: "w-60 h-36 rounded-md bg-center object-cover bg lg:w-80 lg:h-52"
    },
    imageTitle: 'absolute bottom-0 font-bold text-lg text-white pl-4 pb-2',
  }

  return(
    <CarouselItemBasic imageTitle={title} styles={Style}  />
  )
}

const Destinations = () => {

  const ContainerStyle = {
    title: 'font-bold text-2xl pb-6 lg:text-white lg:text-4xl',
    container: 'pl-6 mb-20 lg:mt-[-220px] lg:pl-120 lg:relative',
    ul: 'flex gap-4 overflow-x-auto pb-4 lg:justify-between destination-list-wrapper'
  }

 return (
      <Carousel  id="Destinations-container" styles={ContainerStyle} title="Top Vacation Destinations">
        <Destiny title="Rio, Brazil." image="brazil-rio.jpg" />
        <Destiny title="Paris, France." image="france-paris.png" />
        <Destiny title="Tokyo, Japan" image="japão-tokyo.jpg" />
        <Destiny title="Bali, Indonesia" image="indonesia-bali.png" />
        <Destiny title="Sidney, Australia" image="australia-sydney.png" />
        <Destiny title="Kerry, Ireland" image="ireland-kerry.png" />
      </Carousel>
  
 )
}

export {Destiny, Destinations}