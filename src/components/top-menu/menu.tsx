import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  customStyle?: string;
};




const BtnSearchMenu = ({ children, customStyle }: Props) => {
  return (
    <li className={`w-full px-4 py-1 backdrop-blur-lg rounded-3xl flex gap-2 ${customStyle} `}>
        {children}
    </li>
  );
};

const Header = () => {
  

  const headerGradient = {
    background:
      'linear-gradient(180deg, rgba(0, 0, 0, 0.50) 0%, rgba(0, 0, 0, 0.00) 13.65%), linear-gradient(0deg, rgba(0, 0, 0, 0.30) 0%, rgba(0, 0, 0, 0.30) 100%), url("/src/assets/top-menu/banner-bg.png") lightgray 50% / cover no-repeat',
  };
  return (
    <header
      className="h-29 px-6 pt-4 bg-center bg-cover relative
      lg:h-921
      "
      style={headerGradient}
    >
      
      <Menu />
      <SearchMenu/>

      <div className="w-full h-8 bg-header-gradient bg-center bg-cover bg-no-repeat absolute bottom-0 left-0 "></div>
    </header>
  );
};


const Menu = () => {

  const handlerClick = () => {
    document.querySelector("#ul-menu")?.classList.toggle("invisible");
  };

  return(
    <nav className="pt-8"
    // md:flex
    >
        <div className="relative hamburger-logo-wrapper flex items-center w-full">
          <div
            id="hamburger-menu-btn"
            className="fixed z-10 hamburger-menu w-6 h-6 bg-[url('/src/assets/top-menu/hamburger-menu.svg')] bg-no-repeat"
            // md:hidden md:invisible
            onClick={handlerClick}
          ></div>
          <h1 className="logo text-2xl absolute translate-x-1/2 right-1/2 text-white">
            trxvl.
          </h1>
        </div>

        <ul id="ul-menu"
          className=" fixed z-10 mt-4 left-6 right-6 h-96 flex-col flex justify-evenly items-center gap-2  bg-slate-400/40 backdrop-blur-lg  rounded-3xl invisible
          "
          // md:relative
          // md:visible
          // md:flex-row
          // md:justify-center
          // md:items-start
          // md:gap-x-3
          // md:mt-0
          // md:backdrop-blur-none
          // md:bg-transparent
          // md:h-4
          // border-2 border-red-400
        >
          <li>
            <a
              href="#"
              className="p-2 border-white border-b-2 hover:bg-transparent hover:border-b-transparent text-white"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              className="p-2 border-white border-b-2 hover:bg-transparent hover:border-b-transparent text-white"
            >
              Stays
            </a>
          </li>
          <li>
            <a
              href="#"
              className="p-2 border-white border-b-2 hover:bg-transparent hover:border-b-transparent text-white"
            >
              Flights
            </a>
          </li>
          <li>
            <a
              href="#"
              className="p-2 border-white border-b-2 hover:bg-transparent hover:border-b-transparent text-white"
            >
              Packages
            </a>
          </li>
          <li>
            <a
              href="#"
              className="p-2 border-white border-b-2 hover:bg-transparent hover:border-b-transparent text-white"
            >
              Sign Up
            </a>
          </li>
        </ul>
      </nav>
  )
}

const SearchMenu = () => {
  return(
    <div className="mt-12">
    <h1 className="w-72 text-4xl text-white text-left">
      The whole world awaits.
    </h1>

    <ul className="menu-search w-full flex flex-col gap-4 items-center mt-4">
      
      <BtnSearchMenu customStyle="bg-slate-400/40 justify-center">
        <span className="w-5 h-5 bg-search-icon bg-no-repeat cursor-pointer">
        </span>
        <input
          type="text"
          name="search-box"
          id="search-box"
          placeholder="Search destinations, hotels"
          className="w-52 placeholder-white bg-transparent text-white px-2"
        />
      </BtnSearchMenu       >

      <BtnSearchMenu customStyle="bg-slate-400/40 justify-around">
        <div className="check-in pl-6 flex items-center gap-4">
          <label
            htmlFor="initial-date"
            className="cursor-pointer bg-calendar-icon w-5 h-5 bg-no-repeat"
          ></label>
          <input
            type="date"
            name="initial-date"
            id="initial-date"
            className="hidden"
          />
          <a href="#" className="text-white">
            Check in
          </a>
        </div>
        <div className="check-in pr-6 flex items-center gap-4">
          <label
            htmlFor="final-date"
            className="cursor-pointer bg-calendar-icon w-5 h-5 bg-no-repeat"
          ></label>
          <input
            type="date"
            name="final-date"
            id="final-date"
            className="hidden"
          />
          <a href="#" className="text-white">
            Check in
          </a>
        </div>
      </BtnSearchMenu>

      <BtnSearchMenu customStyle="bg-slate-400/40 justify-center">
        <div className="w-5 h-5 cursor-pointer person-icon bg-person-icon"></div>
        <button className="text-white">1 room, 2 adults</button>
      </BtnSearchMenu>

      <BtnSearchMenu customStyle="justify-center bg-blue-600 cursor-pointer">
        <a href="#">
          <button className=" text-white text-xl">Search</button>
        </a>
      </BtnSearchMenu>
    </ul>
  </div>

  )
}
export default Header;
