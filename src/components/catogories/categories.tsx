type Props = {
  title: string,
  image: string
}

const Category = ({title,image}: Props) => {


  return(
    <li className="cursor-pointer shrink-0 w-20 h-16 flex flex-col items-center bg-white">
      <img src={image} className="w-8 h-8 bg-cover opacity-40"  alt="" />
      <h3 className="text-black text-sm  opacity-60">{title}</h3>
    </li>
  )
}

const Categories = () => {
  return(
    <section className="p-6">
      <h2 className="font-bold text-2xl pb-6">Top Categories</h2>

      <ul className="flex gap-4 overflow-x-auto pb-4">
        <Category title="Beaches" image="/src/assets/categories/mobile/beaches.png" />
        <Category title="Deserts" image="/src/assets/categories/mobile/deserts.png" />
        <Category title="Mountains" image="/src/assets/categories/mobile/mountains.png" />
        <Category title="Iconic Cities" image="/src/assets/categories/mobile/iconic-cities.png" />
        <Category title="HouseBoats" image="/src/assets/categories/mobile/house-boats.png" />
        <Category title="Countryside" image="/src/assets/categories/mobile/country-side.png" />
        <Category title="Camping" image="/src/assets/categories/mobile/camping.png" />
        <Category title="Castles" image="/src/assets/categories/mobile/castles.png" />
        <Category title="Skiing" image="/src/assets/categories/mobile/skiing.png" />
        <Category title="Tropical" image="/src/assets/categories/mobile/tropical.png" />
      </ul>
    </section>
  )
}



export {Categories, Category}