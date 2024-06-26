import { ReactNode} from "react"

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
  const linkLabel = image?.replace(/\.svg/, '')

  return (
    <li className="w-auto h-auto">
      <a href="#" aria-label={`Link to ${linkLabel} website`}>
        <img src={imageUrl} alt="" />
      </a>
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

  return (
    <footer className="bg-[#141414] w-full h-auto lg:h-80 px-6 pb-40 lg:px-120 py-12">

      <nav className=" flex flex-col w-full h-auto lg:flex-row lg:h-469 lg:justify-between gap-32">
          <h1 className="logo text-2xl text-white sm:font-bold">
            Trxvl.
          </h1>

          <div className="links-Wrapper flex-wrap gap-14 lg:gap-0 lg:flex-row flex w-full justify-between">
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

      <div className="flex flex-wrap gap-4 justify-between lg:ml-[188px] mt-10">
        <div className="flex flex-wrap lg:flex-row gap-5 items-center">
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