import { Carousel, CarouselItem } from "../../../components/carousel/carousel";

type Props = {
  title: string,
  image: string
}

const Property = ({image,title}:Props) => {

  const baseUrl = '/src/assets/property-type'
  const imageUrl = `${baseUrl}/${image}`
  const bgStyle = {
    background:
      `linear-gradient(180deg, rgba(0, 0, 0, 0.00) 50%, rgba(0, 0, 0, 0.75) 100%), url("${imageUrl}") lightgray 50% / cover no-repeat`
  }

  const Style = {
    li: 'cursor-pointer shrink-0 relative last:pr-4 rounded-md',
    image: {
      bgStyle,
      classes: "w-60 h-36 rounded-md bg-center object-cover lg:w-80 lg:h-52"
    },
    imageTitle: 'absolute bottom-0 font-bold text-lg text-white pl-4 pb-2',
  }

  return(
    <CarouselItem imageTitle={title} styles={Style}  />
  )
}

const PropertyTypes = () => {


  const ContainerStyle = {
    title: 'font-bold text-3xl pb-6',
    container: 'pl-6 mb-5 lg:pl-120 lg:pr-6 lg:mb-0 ',
    ul: 'flex gap-4 overflow-x-auto pb-4'
  }

 return (
        <Carousel  id="Property-container" styles={ContainerStyle} title="Browse by property type">
          <Property title="Hotel" image="hotels.png" />
          <Property title="Apartments" image="apartaments.png" />
          <Property title="Resorts " image="resorts.png" />
          <Property title="Villas" image="villas.png" />
        </Carousel>
 )
}

export {Property, PropertyTypes}