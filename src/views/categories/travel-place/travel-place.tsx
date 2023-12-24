const Place = () =>{
  return(
    <li className="p-2">
      <img src="" alt="" />

        <div className="place-header">
            <div className="titles">
              <h3>titulo</h3> 
              <p>subtitulo</p>
            </div>
            <div className="rating">
              <p><span>star</span> rating</p>
            </div>
        </div>

        <ul className="services">
          <li>
            <img src="" alt="" />
            <p>service</p>
          </li>
        </ul>

        <ul className="description">
          <li>desc</li>
          <li>desc</li>
          <li>desc</li>
        </ul>

        <div className="price">
            <div className="first-price">
              first price
            </div>
            <div className="price-with-descount">
              price with discount
              <span>per person</span>
            </div>
        </div>
    </li>
  )
}

const ListOfPlaces = () =>{
  return(
    <section className="pl-120">
      <h2>title</h2>

      <ul className="pl-120">

        <Place/>
        <Place/>
        <Place/>

      </ul>

    </section>
  )
}


export {Place, ListOfPlaces}