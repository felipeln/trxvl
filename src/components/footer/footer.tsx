import { ReactNode, useEffect } from "react"

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
  return (
    <li>
      <img src={image} className="w-10 h-10" alt="" />
    </li>
  )
}

const Socials = ({children}: Props) =>{
  return (
    <ul className="flex flex-row items-center gap-5">
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

      <div className="flex  justify-end mt-10">
        <Socials>
          <Social image="https://picsum.photos/40/40"/>
          <Social image="https://picsum.photos/40/40"/>
          <Social image="https://picsum.photos/40/40"/>
          <Social image="https://picsum.photos/40/40"/>
        </Socials>
      </div>

    </footer>
  )
}

export  {Footer,Link,Links,Social,Socials}