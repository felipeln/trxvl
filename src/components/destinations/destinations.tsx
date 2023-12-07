type Props = {
  title: string,
  image: string
}

const Destination = ({image,title}:Props) => {
  return(
    <li className="cursor-pointer shrink-0 relative">
      <img className="w-56 h-36 rounded-md" src={image} alt="" />
      <h3 className="absolute bottom-0 text-white pl-4 pb-2">{title}</h3>
    </li>
  )
}

const Destinations = () => {
 return (
    <section className="p-6 mb-16">
      <h2 className="font-bold text-2xl pb-6">Top Destinations</h2>

      <ul className="flex gap-4 overflow-x-auto">
        <Destination title="teste" image="https://picsum.photos/300/300" />
        <Destination title="teste" image="https://picsum.photos/300/300" />
        <Destination title="teste" image="https://picsum.photos/300/300" />
        <Destination title="teste" image="https://picsum.photos/300/300" />
        <Destination title="teste" image="https://picsum.photos/300/300" />
      </ul>

    </section>
 )
}

export {Destination, Destinations}