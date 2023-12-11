type Props = {
  title: string,
  image: string
}

const Destination = ({image,title}:Props) => {

  const bgGradient = {
    background:
      `linear-gradient(180deg, rgba(0, 0, 0, 0.00) 50%, rgba(0, 0, 0, 0.75) 100%), url("${image}") lightgray 50% / cover no-repeat`
  }

  return(
    <li className="cursor-pointer shrink-0 relative" >
      <div className="w-60 h-36 rounded-md bg-center object-cover bg" style={bgGradient}></div>
      <h3 className="absolute bottom-0 font-bold text-lg text-white pl-4 pb-2">{title}</h3>
    </li>
  )
}

const Destinations = () => {
 return (
    <section className="p-6 mb-4">
      <h2 className="font-bold text-2xl pb-6">Top Destinations</h2>

      <ul className="flex gap-4 overflow-x-auto pb-4">
        <Destination title="Rio, Brazil." image="/src/assets/destinations/brazil-rio.jpg" />
        <Destination title="Paris, France." image="/src/assets/destinations/france-paris.png" />
        <Destination title="Tokyo, Japan" image="/src/assets/destinations/japão-tokyo.jpg" />
        <Destination title="Bali, Indonesia" image="/src/assets/destinations/indonesia-bali.png" />
        <Destination title="Sidney, Australia" image="/src/assets/destinations/australia-sydney.png" />
        <Destination title="Kerry, Ireland" image="/src/assets/destinations/ireland-kerry.png" />
      </ul>
    </section>
 )
}

export {Destination, Destinations}