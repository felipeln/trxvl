import { Carousel } from "../../../components/carousel/carousel"
import {CarouselItemDestination} from '../../../components/carousel/carousel-item-destination'

type Props = {
  id?: number
  imageTitle?: string;
  rating?: string;
  stay?: {
    day: string;
    night: string;
  };
  desc?: {
    text1?: string;
    text2?: string;
    text3?: string;
  };
  price?: number;
  imageUrl: string
}

const BeachItem = ({id,imageTitle,rating,stay,desc,price, imageUrl}: Props) =>{

  const bgStyle = {
    backgroundImage: `url("${imageUrl}")`,
    backgroundPosition: '50%',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundColor: 'lightgray',
  }

  const styles = {
    li: 'cursor-pointer shrink-0 relative last:pr-4 rounded-md',
    image: {
      bgStyle,
      classes: "w-60 h-36 rounded-md bg-center object-cover lg:w-80 lg:h-52"
    },
    imageTitle: 'flex justify-between text-lg font-semibold',
    desc: 'text-sm'
  
  }

  return(
  <CarouselItemDestination key={id} imageTitle={imageTitle} rating={rating} stay={stay} desc={desc} price={price} styles={styles}/>    
  )
}


const Beaches = () => {
  const ContainerStyle = {
    title: 'font-bold text-3xl pb-6',
    container: 'pl-6 lg:pl-120 mb-20',
    ul: 'flex gap-4 lg:gap-6 pb-4'
  }


  return (
    <>
      <Carousel title="test"  id="Popular-destination" styles={ContainerStyle}>

        <BeachItem id={1} imageTitle="Swiss Apis" rating="4.7" stay={{day: '2', night: '1'}} desc={{text1:'tour bla bla', text2: 'bla bla tour', text3: 'tourist tour'}} price={88.99} imageUrl="https://picsum.photos/400/400" />
      </Carousel>
    </>
  )

}

export {Beaches}