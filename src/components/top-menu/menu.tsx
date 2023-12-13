import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  customStyle?: string;
};




export const BtnSearchMenu = ({ children, customStyle }: Props) => {
  return (
    <li className={`w-full px-4 py-1 backdrop-blur-lg rounded-3xl flex gap-2 ${customStyle} lg:bg-transparent lg:px-0 lg:min-w-max`}>
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
      className="h-464 px-6 pt-4 bg-center bg-cover relative
      lg:h-921
      lg:px-10
      "
      style={headerGradient}
    >
      
      <Menu />
      <SearchMenu/>

      <div className="w-full h-8 bg-header-gradient bg-center bg-cover bg-no-repeat absolute bottom-0 left-0 "></div>
    </header>
  );
};


export const Menu = () => {

  const handlerClick = () => {
    document.querySelector("#ul-menu")?.classList.toggle("invisible");
  };

  return(
    <nav className="pt-4 sm:flex sm:gap-4 sm:justify-between sm:items-center sm:h-20 sm:mx-7">
        <div className="relative hamburger-logo-wrapper sm:flex sm:items-center sm:w-min sm:justify-start">
          <div
            id="hamburger-menu-btn"
            className="fixed z-10 hamburger-menu w-6 h-6 bg-[url('/src/assets/top-menu/hamburger-menu.svg')] bg-no-repeat sm:hidden sm:invisible"
            
            onClick={handlerClick}
          ></div>
          <h1 className="logo text-2xl absolute translate-x-1/2 right-1/2 text-white sm:font-bold">
            trxvl.
          </h1>
        </div>
        
        <ul id="ul-menu"
          className=" fixed z-10 mt-8 left-6 right-6 h-96 flex-col flex justify-evenly items-center gap-6  bg-slate-400/40 backdrop-blur-lg  rounded-3xl invisible

          sm:relative
          sm:visible
          sm:flex-row
          sm:justify-end
          sm:items-start
          sm:mt-0
          sm:backdrop-blur-none
          sm:bg-transparent
          sm:rounded-none
          sm:h-min
          sm:w-512
          "
        >
          <li>
            <a
              href="#"
              className="p-2 border-transparent  border-b-2 hover:bg-transparent hover:border-white text-white"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              className="p-2 border-transparent  border-b-2 hover:bg-transparent hover:border-white text-white"
            >
              Stays
            </a>
          </li>
          <li>
            <a
              href="#"
              className="p-2 border-transparent  border-b-2 hover:bg-transparent hover:border-white text-white"
            >
              Flights
            </a>
          </li>
          <li>
            <a
              href="#"
              className="p-2 border-transparent  border-b-2 hover:bg-transparent hover:border-white text-white"
            >
              Packages
            </a>
          </li>
          <li>
            <a
              href="#"
              className="p-2 border-transparent  border-b-2 hover:bg-transparent hover:border-white text-white"
            >
              Sign Up
            </a>
          </li>
        </ul>
      </nav>
  )
}

export const SearchMenu = () => {
  return(
    <div className="mt-12 lg:px-20">
      <h1 className="w-72 text-4xl text-white text-left sm:font-bold sm:text-5xl sm:w-96 lg:text-8xl lg:mt-20 lg:w-840">
        The whole world awaits.
      </h1>

    <ul className="menu-search w-full flex flex-col gap-4 items-center mt-4  
      lg:flex-row
      lg:bg-slate-400/40 
      lg:backdrop-blur-lg 
      lg:p-4
      lg:rounded-md
      lg:gap-2
      lg:justify-between
      lg:mt-11
      lg:h-16
    ">
      
      <BtnSearchMenu customStyle="bg-slate-400/40 justify-center items-center lg:w-418 ">
        <span className="w-5 h-5 bg-search-icon bg-no-repeat cursor-pointer">
        </span>
        <input
          type="text"
          name="search-box"
          id="search-box"
          placeholder="Search destinations, hotels"
          className="w-52 placeholder-white bg-transparent text-white px-2 lg:w-full"
        />
      </BtnSearchMenu>


        <div className="w-full date-wrapper flex justify-center gap-4 bg-slate-400/40 backdrop-blur-lg rounded-3xl lg:w-max lg:bg-transparent">
          <BtnSearchMenu customStyle="w-max lg:w-162">
                    <label
                      htmlFor="initial-date"
                      className="cursor-pointer bg-calendar-icon bg-no-repeat pl-8 text-white"
                    >Check in</label>
                    <input
                      type="date"
                      name="initial-date"
                      id="initial-date"
                      className="hidden"
                    />
          </BtnSearchMenu>

          <BtnSearchMenu customStyle="w-max lg:w-162">
              <label
                htmlFor="final-date"
                className="cursor-pointer bg-calendar-icon bg-no-repeat pl-8 text-white"
              >Check in</label>
              <input
                type="date"
                name="final-date"
                id="final-date"
                className="hidden"
              />
              
          </BtnSearchMenu>
        </div>
      

      <BtnSearchMenu customStyle="bg-slate-400/40 justify-center lg:w-162">
        <div className="w-5 h-5 cursor-pointer person-icon bg-person-icon"></div>
        <button className="text-white">1 room, 2 adults</button>
      </BtnSearchMenu>

      <BtnSearchMenu customStyle="justify-center bg-blue-600 cursor-pointer lg:bg-white lg:w-162">
        <a href="#">
          <button className=" text-white text-xl lg:text-blue-600">Search</button>
        </a>
      </BtnSearchMenu>
    </ul>
  </div>

  )
}
export default Header;
