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
    background: `url(${baseUrl}/${img}), lightgray 50% / cover no-repeat`
  }

  return(
    <>
      <li className="flex gap-6 w-726 p-4 rounded-2xl shadow-offer">
        <div className="offer-image w-80 h-60 rounded-3xl" style={bgStyle}>
        </div>
        <div className="offer-description flex flex-col gap-4 justify-between">
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
    <section className="px-120 my-6">
      <h2 className="text-4xl font-bold mb-8">Offers</h2>
      <ul className="offer-container  flex gap-6 overflow-x-auto pb-4"
        {...events}
        ref={ref}
      >
        
        <Offer title="Huge Savings on flight with trxvl" type="Domectic Flights" desc="Book domestic flights starting @ just ₹1459" img="flight.png" btnText="Book Now" />

        <Offer title="Huge Savings on flight with trxvl" type="Domectic Flights" desc="Book domestic flights starting @ just ₹1459" img="flight.png" btnText="Book Now" />
        
        <Offer title="Huge Savings on flight with trxvl" type="Domectic Flights" desc="Book domestic flights starting @ just ₹1459" img="flight.png" btnText="Book Now" />
        
        <Offer title="Huge Savings on flight with trxvl" type="Domectic Flights" desc="Book domestic flights starting @ just ₹1459" img="flight.png" btnText="Book Now" />

      </ul>
    </section>

  )

}
 

export {Offer, Offers}