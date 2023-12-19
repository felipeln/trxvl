import { ReactNode, useEffect} from "react"

type Props = {
  text?: string,
  image?: string,
  children?: ReactNode
}

const Link = ({text}:Props) => {
  return(
    <li>
      <a href="#" className="text-gray-500 text-sm font-normal capitalize">{text}</a>
    </li>
  )
}


const Links = ({children}: Props) => {
  return (
    <ul className="flex flex-col justify-start gap-4">
      {children}
    </ul>
  )
}


const Social = ({image}: Props) => {
  const baseUrl = '/src/assets/footer/'
  const imageUrl = `${baseUrl}${image}`


  return (
    <li className="w-auto h-auto">
      <img src={imageUrl} alt="" />
    </li>
  )
}

const Socials = ({children}: Props) =>{
  return (
    <ul className="flex justify-between flex-row items-center w-[173px]">
      {children}
    </ul>
  )
}

const Footer = () => {

  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      const footer = document.querySelector('footer')
       if(window.innerWidth > 1024) {
        footer?.classList.add('visible')
        footer?.classList.remove('hidden')
      }if (window.innerWidth < 1024) {
        footer?.classList.remove('visible')
        footer?.classList.add('hidden')
      }
    }
    
    // Add event listener
    window.addEventListener("resize", handleResize);
    handleResize();
    
    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, );


  return (
    <footer className="bg-[#141414] w-full h-80 px-120 py-12">

      <nav className="flex h-469 w-full justify-between gap-32">
          <h1 className="logo text-2xl text-white sm:font-bold">
            Trxvl.
          </h1>

          <div className="links-Wrapper flex w-full justify-between">
            <Links>
                <Link text="testando um dois"/>
                <Link text="teste"/>
                <Link text="testando quatro"/>
                <Link text="teste oito"/>
            </Links>
            <Links>
                <Link text="testando um dois"/>
                <Link text="teste"/>
                <Link text="testando quatro"/>
                <Link text="teste oito"/>
            </Links>
            <Links>
                 <Link text="testando um dois"/>
                <Link text="teste"/>
                <Link text="testando quatro"/>
                <Link text="teste oito"/>
            </Links>
            <Links>
                <Link text="testando um dois"/>
                <Link text="teste"/>
                <Link text="testando quatro"/>
                <Link text="teste oito"/>
            </Links>
          </div>
      </nav>

      <div className="flex justify-between ml-[188px] mt-10">
        <div className="flex flex-row gap-5 items-center">
          <p className="text-gray-500">© 2023 </p>

          <a className="text-white" href="https://www.figma.com/@abhimank" target="_blank">
            <button>Design by </button> Himank
          </a>

          <a className="py-1 text-white" href="https://github.com/felipeln" target="_blank">
            <button>Code by</button> Felipeln
          </a>
          
          
        </div>
        <Socials>
          <Social image="face.svg" />
          <Social image="insta.svg" />
          <Social image="tt.svg" />
          <Social image="ytb.svg" />
        </Socials>

        
      </div>

    </footer>
  )
}

export  {Footer,Link,Links,Social,Socials}