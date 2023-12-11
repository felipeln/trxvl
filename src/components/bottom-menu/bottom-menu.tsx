type Props = {
  title: string,
  image: string
}
const MenuItem = ({title,image}:Props) => {
  return (
    <li className="flex  items-center">
      <a href="#" className="flex flex-col cursor-pointer  justify-between items-center w-16 h-12">
        <img className="w-6 h-6" src={image} alt="" />
        <h4>{title}</h4>
      </a>
    </li>
  )
}

const BottomMenu = () => {
  return (
    <nav className="fixed w-full bottom-0 bg-white border-t-2 border-gray-400
    lg:hidden
    ">
      <ul className="flex px-6 py-1 justify-between border-4 border-b-gray-50">
        <MenuItem title="Home" image="/src/assets/bottom-menu/home.svg" />
        <MenuItem title="Packages" image="/src/assets/bottom-menu/packages.svg" />
        <MenuItem title="Stays" image="/src/assets/bottom-menu/stays.svg" />
        <MenuItem title="Flights" image="/src/assets/bottom-menu/flights.svg" />
      </ul>
    </nav>
  )
}

export {BottomMenu, MenuItem}