type Props = {
  title: string,
  image: string
}

const Type = ({image,title}:Props) => {

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

const PropertyTypes = () => {
 return (
    <section className="p-6 mb-32">
      <h2 className="font-bold text-2xl pb-6">Browse by property type</h2>

      <ul className="flex gap-4 overflow-x-auto pb-4">
        <Type title="Hotel" image="/src/assets/property-type/hotels.png" />
        <Type title="Apartments" image="/src/assets/property-type/apartaments.png" />
        <Type title="Resorts " image="/src/assets/property-type/resorts.png" />
        <Type title="Villas" image="/src/assets/property-type/villas.png" />
        
      </ul>
    </section>
 )
}

export {Type, PropertyTypes}