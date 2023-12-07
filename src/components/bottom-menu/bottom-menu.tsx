type Props = {
  title: string,
  image: string
}
const MenuItem = ({title,image}:Props) => {
  return (
    <li className="flex  items-center border-2 border-sky-500">
      <a href="#" className="flex flex-col cursor-pointer  justify-between items-center w-16 h-12">
        <img src={image} alt="" />
        <h4>{title}</h4>
      </a>
    </li>
  )
}

const BottomMenu = () => {
  return (
    <nav className="fixed w-full bottom-0 bg-white">
      <ul className="flex px-6 py-1 justify-between border-4 border-sky-500">
        <MenuItem title="teste" image="https://picsum.photos/24/24" />
        <MenuItem title="teste" image="https://picsum.photos/24/24" />
        <MenuItem title="teste" image="https://picsum.photos/24/24" />
        <MenuItem title="teste" image="https://picsum.photos/24/24" />
      </ul>
    </nav>
  )
}

export {BottomMenu, MenuItem}