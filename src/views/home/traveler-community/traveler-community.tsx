import { Carousel, CarouselItem } from "../../../components/carousel/carousel";
type Props = {
  title: string,
  image: string,
  desc?: {
    text1?: string
    text2?: string
  }
}

const Community = ({title,image, desc}: Props) => {

  const baseUrl = '/src/assets/travel-community'
  const imageUrl = `${baseUrl}/${image}`

  const bgStyle = {
    'backgroundImage': `url(${imageUrl})`,
    'backgroundPosition': '50%',
    'backgroundSize': 'cover',
    'backgroundRepeat': 'no-repeat',
    'backgroundColor': 'lightgray',
  }

  const Style = {
    li: 'cursor-pointer shrink-0 flex flex-col p-4 shadow-offer bg-white last:pr-4',
    image: {
      bgStyle,
      classes: "w-60 h-36 rounded-md bg-center object-cover bg lg:w-80 lg:h-52"
    },
    imageTitle: 'text-black text-2xl mt-2',
    desc: 'text-base mt text-black opacity-50',
 
  }

  return(
    <CarouselItem imageTitle={title} desc={desc} styles={Style}  />
  )
}


const TravelerCommunity = () => {

  const ContainerStyle = {
      title: 'font-bold pb-6 text-3xl',
      container: 'pl-6 mb-20 lg:pl-120 lg:pr-6 lg:mb-0',
      ul: 'flex gap-4 overflow-x-auto pb-4 '
    }
  
  return(
    
      <Carousel id="community-container" styles={ContainerStyle} title="Connect with other travelers in our community" >
        
        <Community title="India" image="india.jpg" desc={{text1: 'Travel community',text2: '155,073 travelers'}}/>

        <Community title="Travel Talk" image="travel-talk.jpg" desc={{text1: 'Travel community',text2: '155,073 travelers'}}/>
        
        <Community title="Beach" image="beach.jpg" desc={{text1: 'Travel community',text2: '155,073 travelers'}}/>
        
        <Community title="Mountains" image="mountains.jpg" desc={{text1: 'Travel community',text2: '155,073 travelers'}}/>
        
        <Community title="Skii" image="skii.jpg"  desc={{text1: 'Travel community',text2: '155,073 travelers'}}/>

      </Carousel>

  )
}

export {TravelerCommunity}