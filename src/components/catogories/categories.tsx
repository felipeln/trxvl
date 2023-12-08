type Props = {
  title: string,
  image: string
}

const Category = ({title,image}: Props) => {
  return(
    <li className="cursor-pointer shrink-0 w-16 h-16 flex flex-col items-center text-blue-600">
      <img className="w-8 h-8 bg-slate-600" src={image} alt="" />
      <h3 className="text-black text-sm w-full">{title}</h3>
    </li>
  )
}

const Categories = () => {
  return(
    <section className="p-6">
      <h2 className="font-bold text-2xl pb-6">Top Categories</h2>

      <ul className="flex gap-4 overflow-x-auto">
        <Category title="testeaaaa" image="/src/assets/categories/image 16.svg" />
        <Category title="testeaaaa" image="https://picsum.photos/80/80" />
        <Category title="testeaaaa" image="https://picsum.photos/80/80" />
        <Category title="testeaaaa" image="https://picsum.photos/80/80" />
        <Category title="testeaaaa" image="https://picsum.photos/80/80" />
        <Category title="testeaaaa" image="https://picsum.photos/80/80" />
        <Category title="testeaaaa" image="https://picsum.photos/80/80" />
        <Category title="testeaaaa" image="https://picsum.photos/80/80" />
        
      </ul>

    </section>
  )
}



export {Categories, Category}