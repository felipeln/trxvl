type Props = {
  title: string,
  image: string
}

const Category = ({title,image}: Props) => {
  return(
    <li className="cursor-pointer shrink-0 w-auto h-16 flex flex-col items-start">
      <img className="w-8 h-8" src={image} alt="" />
      <h3 className="text-black text-sm">{title}</h3>
    </li>
  )
}

const Categories = () => {
  return(
    <section className="p-6">
      <h2 className="font-bold text-2xl pb-6">Top Categories</h2>

      <ul className="flex gap-6 overflow-x-auto">
        <Category title="teste" image="https://picsum.photos/80/80" />
        <Category title="teste" image="https://picsum.photos/80/80" />
        <Category title="teste" image="https://picsum.photos/80/80" />
        <Category title="teste" image="https://picsum.photos/80/80" />
        <Category title="teste" image="https://picsum.photos/80/80" />
        <Category title="teste" image="https://picsum.photos/80/80" />
        <Category title="teste" image="https://picsum.photos/80/80" />
      </ul>

    </section>
  )
}



export {Categories, Category}