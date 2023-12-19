import { useRef,  MutableRefObject } from "react";
import { useDraggable } from "react-use-draggable-scroll";

type Props = {
  title: string,
  type: string,
  desc: string
  img: string
  btnText: string
}

const Offer = ({title, type, img, desc, btnText}:Props) => {

  const baseUrl = `/src/assets/offers`

  const bgStyle = {
    backgroundImage: `url(${baseUrl}/${img})`,
    backgroundPosition: '50%',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundColor: 'lightgray',
  }

  return(
    <>
      <li className="flex justify-between gap-6 w-726 p-4 rounded-2xl shadow-offer shrink-0 last:pr-4">
        <div className="offer-image w-80 h-60 rounded-3xl shrink-0" style={bgStyle}>
        </div>
        <div className="offer-description flex flex-col  gap-4 justify-between ">
          <div className="titles">
            <h4 className="text-black opacity-50 text-sm">{type}</h4>
            <h3 className="text-black font-bold text-2xl">{title}</h3>
          </div>
          <p className="text-black opacity-50 text-sm">{desc}</p>
          <button className="p-4 bg-blue-600 w-40 rounded-full text-white">{btnText}</button>
        </div>
      </li>
    </>
  )

}


const Offers = () => {

  const ref = useRef<HTMLUListElement>(null) as MutableRefObject<HTMLUListElement>;
  const { events } = useDraggable(ref);

  return(
    <section className="pl-120 my-6">
      <h2 className="text-4xl font-bold mb-8">Offers</h2>
      <ul className="offer-container  flex gap-6 overflow-x-auto pb-4"
        {...events}
        ref={ref}
      >
        
        <Offer title="Huge Savings on flight with trxvl" type="Domestic Flights" desc="Book domestic flights starting @ just ₹1459" img="flight.png" btnText="Book Now" />

        <Offer title="Enjoy upto 20% off on International Hotels" type="International Hotels" desc="Make the most of  this deal on your first booking with trxvl." img="hotel.png" btnText="Book Now" />

        <Offer title="Huge Savings on flight with trxvl" type="Domestic Flights" desc="Book domestic flights starting @ just ₹1459" img="flight.png" btnText="Book Now" />

        <Offer title="Enjoy upto 20% off on International Hotels" type="International Hotels" desc="Make the most of  this deal on your first booking with trxvl." img="hotel.png" btnText="Book Now" />
        
       
      </ul>
    </section>

  )

}
 

export {Offer, Offers}