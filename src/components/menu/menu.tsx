const Menu = () => {
  const handlerClick = () => {
    document.querySelector('ul')?.classList.toggle('hidden')
    
  }
  return(
    <header className="h-29  bg-mountain-gif px-6 pt-4 bg-center bg-cover relative">
      <nav className="pt-8">
        <div className="relative hamburguer-logo-wrapper flex items-center w-full ">
          <div className="hamburger-menu w-6 h-6 bg-[url('/src/assets/hamburger-menu.svg')] bg-no-repeat" onClick={handlerClick}>
            
          </div>
          <h1 className="logo text-2xl absolute translate-x-1/2 right-1/2 text-white">trxvl.</h1>
        </div>
        <ul className="w-36 h-72 flex-col flex justify-evenly items-center gap-2 hidden transition-opacity duration-500 ease-in-out ">
          <li><a href="#" className="p-2 border-white border-b-2 hover:bg-transparent hover:border-b-transparent text-white">Home</a></li>
          <li><a href="#" className="p-2 border-white border-b-2 hover:bg-transparent hover:border-b-transparent text-white">Stays</a></li>
          <li><a href="#" className="p-2 border-white border-b-2 hover:bg-transparent hover:border-b-transparent text-white">Flights</a></li>
          <li><a href="#" className="p-2 border-white border-b-2 hover:bg-transparent hover:border-b-transparent text-white">Packages</a></li>
          <li><a href="#" className="p-2 border-white border-b-2 hover:bg-transparent hover:border-b-transparent text-white">Sign Up</a></li>
        </ul>
      </nav>

      <div className="mt-12">
        <h1 className="w-72 text-4xl text-white text-left">The whole world awaits.</h1>

        <ul className="menu-search w-full flex flex-col gap-4 items-center mt-4">
            <li className="w-full px-4 py-1 bg-slate-400/40 backdrop-blur-lg rounded-3xl flex justify-center items-center gap-2">
              <span className="w-5 h-5 bg-search-icon bg-no-repeat"></span>
              <input type="text" name="search-box" id="search-box" placeholder="Search destinations, hotels"  className="w-52 placeholder-white bg-transparent" />
            </li>
            <li className="w-full px-4 py-1 bg-slate-400/40 backdrop-blur-lg  
            rounded-3xl flex justify-between">
              <div className="check-in px-4 flex items-center gap-4">
                <label htmlFor="initial-date" className="bg-calendar-icon w-5 h-5 bg-no-repeat">
                
                </label>
                <input type="date" name="initial-date" id="initial-date" className="hidden" />
                <a href="#" className="text-white" >Check in</a>
              </div>
              <div className="check-in px-4 flex items-center gap-4">
                <label htmlFor="initial-date" className="bg-calendar-icon w-5 h-5 bg-no-repeat">
                
                </label>
                <input type="date" name="initial-date" id="initial-date" className="hidden" />
                <a href="#" className="text-white" >Check in</a>
              </div>
            </li>
            <li className="w-full px-4 py-1 bg-slate-400/40 backdrop-blur-lg  rounded-3xl">
            </li>
            <li className="w-full px-4 py-1 bg-blue-600 rounded-3xl text-center">
              <button className=" text-white text-xl">Search</button>
            </li>
          
        </ul>
      </div>
    

      <div className="w-full h-8 bg-header-gradient bg-center bg-cover bg-no-repeat absolute bottom-0 left-0 "></div>
  </header>

  )
}
export default Menu