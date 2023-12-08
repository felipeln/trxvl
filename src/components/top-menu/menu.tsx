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

const Menu = () => {
  const handlerClick = () => {
    document.querySelector("#ul-menu")?.classList.toggle("invisible");
  };

  const headerGradient = {
    background:
      'linear-gradient(180deg, rgba(0, 0, 0, 0.50) 0%, rgba(0, 0, 0, 0.00) 13.65%), linear-gradient(0deg, rgba(0, 0, 0, 0.30) 0%, rgba(0, 0, 0, 0.30) 100%), url("/src/assets/header/gif-bg.gif") lightgray 50% / cover no-repeat',
  };
  return (
    <header
      className="h-29 px-6 pt-4 bg-center bg-cover relative"
      style={headerGradient}
    >
      <nav className="pt-8 ">
        <div className="relative hamburger-logo-wrapper flex items-center w-full ">
          <div
            className="fixed z-10 hamburger-menu w-6 h-6 bg-[url('/src/assets/header/hamburger-menu.svg')] bg-no-repeat"
            onClick={handlerClick}
          ></div>
          <h1 className="logo text-2xl absolute translate-x-1/2 right-1/2 text-white">
            trxvl.
          </h1>
        </div>

        <ul id="ul-menu"
          className=" fixed z-10 mt-4 left-6 right-6 h-96 flex-col flex justify-evenly items-center gap-2  bg-slate-400/40 backdrop-blur-lg  rounded-3xl invisible
        "
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

      <div className="w-full h-8 bg-header-gradient bg-center bg-cover bg-no-repeat absolute bottom-0 left-0 "></div>
    </header>
  );
};

export default Menu;
