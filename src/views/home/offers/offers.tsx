import { Carousel, CarouselItem } from "../../../components/carousel/carousel";


type Props = {
  title: string,
  subtitle: string,
  desc: string
  image: string
  btnText: string
}

const Offer = ({title, subtitle, image, desc, btnText}:Props) => {

  const baseUrl = `/src/assets/offers`
  const imageUrl = `${baseUrl}/${image}`

  const bgStyle = {
    backgroundImage: `url("${imageUrl}")`,
    backgroundPosition: '50%',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundColor: 'lightgray',
  }

  const Style = {
    li: 'flex flex-col lg:flex-row justify-between gap-6 lg:w-726 p-6 lg:p-4 rounded-2xl shadow-offer lg:shrink-0 last:pr-4',
    image: {
      bgStyle,
      classes: "w-60 h-36 rounded-3xl bg-center lg:shrink-0 object-cover bg lg:w-80 lg:h-52"
    },
    imageTitle: 'text-black font-bold text-2xl',
    subtitle: 'text-black opacity-50 text-sm',
    desc: 'text-black opacity-50 text-sm',
    button: 'p-4 bg-blue-600 w-40 rounded-full text-white'
  }

  return(
    <>
      <CarouselItem imageTitle={title} subtitle={subtitle} desc={{text1: desc}} button={btnText} styles={Style}  />
    </>
  )

}


const Offers = () => {
  
  const ContainerStyle = {
    title: 'font-bold text-3xl pb-6',
    container: 'pl-6 lg:pl-120 my-6',
    ul: 'flex gap-4 lg:gap-6 overflow-x-auto pb-4'
  }


  return(

    <Carousel id="Offers-container" styles={ContainerStyle}  title="Offers" >
      <Offer title="Huge Savings on flight with trxvl" subtitle="Domestic Flights" desc="Book domestic flights starting @ just ₹1459" image="flight.png" btnText="Book Now" />
      
      <Offer title="Enjoy upto 20% off on International Hotels" subtitle="International Hotels" desc="Make the most of  this deal on your first booking with trxvl." image="hotel.png" btnText="Book Now" />
      
      <Offer title="Huge Savings on flight with trxvl" subtitle="Domestic Flights" desc="Book domestic flights starting @ just ₹1459" image="flight.png" btnText="Book Now" />
      
      <Offer title="Enjoy upto 20% off on International Hotels" subtitle="International Hotels" desc="Make the most of  this deal on your first booking with trxvl." image="hotel.png" btnText="Book Now" />
    </Carousel>
  )

}
 

export {Offer, Offers}