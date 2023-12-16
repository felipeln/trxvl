import { useEffect, useState } from "react"
import { BtnSearchMenu } from "../top-menu/menu";
const TravelApp = () => {

  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      const travelAppContainer = document.querySelector('#travel-app')
       if(window.innerWidth > 1024) {
        travelAppContainer?.classList.add('visible')
        travelAppContainer?.classList.remove('hidden')
      }if (window.innerWidth < 1024) {
        travelAppContainer?.classList.remove('visible')
        travelAppContainer?.classList.add('hidden')
      }
    }
    // Add event listener
    window.addEventListener("resize", handleResize);
    handleResize();
    
    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, );

  
  type Option = 'option-number' | 'option-email';

  const [selectedOption, setSelectedOption] = useState<Option | null>('option-number');

  const handleOptionChange = (option: Option) => {
    setSelectedOption((prevSelected) => (prevSelected === option ? null : option));
  };

  return (
    <section id="travel-app" className="px-120 pt-20 w-full bg-blue-600 h-601 flex gap-x-[103px]  overflow-y-hidden">
        <div className="phone-mockup flex-shrink-0  w-300  h-582 bg-phone-mockup bg-cover bg-no-repeat bg-center ">
            <img src="/src/assets/travel-app/phone-bg.png" className="p-4 w-full h-full" alt="" />
        </div>
        <article className="flex flex-col gap-7">
            <h2 className="text-5xl text-white">Your all-in-one travel app.</h2>
            <p className="text-2xl text-white">Book flights, hotels, trains & rental cars anywhere in the world in just seconds. Get real-time flight updates, travel info, exclusive deals, and 30% more Trip Coins only on the app!</p>

            <div className="download-app flex flex-row justify-between">
                <div className="options-wrapper">

                  <div className="options-email-number flex w-52">
                    <BtnSearchMenu customStyle=" lg:bg-transparent lg:px-0 ">
                          <label
                            htmlFor="option-number"
                            className={`bg-slate-400/40 backdrop-blur-lg rounded-3xl flex px-4 py-2 text-white text-lg cursor-pointer ${
                              selectedOption === 'option-number' ? '' : 'bg-transparent'
                            } `}
                            onClick={() => handleOptionChange('option-number')}
                          >
                            Number
                          </label>
                          <input type="radio" name="options" id="option-number" className="hidden" />
                    </BtnSearchMenu>
                    <BtnSearchMenu customStyle=" lg:bg-transparent lg:px-0">
                          
                          <label
                            htmlFor="option-email"
                            className={`bg-slate-400/40 backdrop-blur-lg rounded-3xl flex px-4 py-2 text-white text-lg cursor-pointer ${
                              selectedOption === 'option-email' ? '' : 'bg-transparent'
                            }`}
                            onClick={() => handleOptionChange('option-email')}
                          >
                            Email
                          </label>
                          <input type="radio" name="options" id="option-email" className="hidden" />
                    </BtnSearchMenu>
                  
                  </div>
                  
                  <div className="receiveLink w-512 mt-4">
                      
                      {selectedOption == 'option-number' && (
                      <>
                        <h3 className="text-white text-[15px] mt-10 mb-4 text-center">Enter your phone number to receive a text with a link to download the app.</h3>
                        
                        <div id="number-get-download" className=" bg-slate-400/40 backdrop-blur-lg rounded-3xl flex px-4 py-2 w-512 justify-between gap-3">
                          <BtnSearchMenu customStyle=" lg:bg-transparent lg:px-0  ">
                            <input
                              type="text"
                              name="mobile-number"
                              id="mobile-number"
                              className="bg-transparent text-white w-14 outline-none border-2 border-transparent focus:border-2 focus:border-white pl-1 py-1"
                              placeholder="+911"
                            />
                            <input
                              type="text"
                              name="mobile-number"
                              id="mobile-number"
                              className="bg-transparent text-white w-full  outline-none border-2 border-transparent focus:border-2 focus:border-white pl-1 py-1"
                              placeholder="Mobile Number"
                            />
                          </BtnSearchMenu>
                          <BtnSearchMenu customStyle="justify-center items-center bg-blue-600 cursor-pointer lg:bg-white lg:w-162 shrink-0">
                            <a href="#">
                              <button className=" text-white text-xl lg:text-blue-600">Get Link</button>
                            </a>
                          </BtnSearchMenu>
                        </div>
                      </>
                      )}
                      
                      {selectedOption === 'option-email' && (
                        <>
                          <h3 className="text-white text-[15px] mt-10 mb-4 text-center">Enter your best email to receive an email with a link to download the app.</h3>

                          <div id="email-get-download" className="Email bg-slate-400/40 backdrop-blur-lg rounded-3xl flex px-4 py-2 w-512 justify-between gap-3 ">
                            <BtnSearchMenu customStyle=" lg:bg-transparent lg:px-0 ">
                              <input
                                type="text"
                                name="email"
                                id="email"
                                className="bg-transparent text-white w-full  outline-none border-2 border-transparent focus:border-2 focus:border-white pl-1 py-1"
                                placeholder="Email@email.com"
                              />
                            </BtnSearchMenu>
                            <BtnSearchMenu customStyle="justify-center items-center bg-blue-600 cursor-pointer lg:bg-white lg:w-162 shrink-0">
                              <a href="#">
                                <button className=" text-white text-xl lg:text-blue-600">Get Link</button>
                              </a>
                            </BtnSearchMenu>
                          </div>
                        </>
                      )}
                  </div>
                </div>

                <div className="getFromStore flex flex-col gap-8 mr-2">
                      
                      <img src="/src/assets/travel-app/play-store.png" alt="" className="w-56 cursor-pointer" />
                      <img src="/src/assets/travel-app/apple-store.png" className="w-56 cursor-pointer" alt="" />
                </div>
            </div>
        </article>
    </section>
  )
}


export {TravelApp}