// CarouselItemDetailed.jsx
import React from 'react';

type CarouselItemDestinationProps = {
  id?: number
  imageTitle?: string;
  rating?: string;
  stay?: {
    day: string;
    night: string;
  };
  desc?: {
    text1?: string;
    text2?: string;
    text3?: string;
  };
  price?: number;

  styles: {
    li?: string;
    image: {
      bgStyle: object;
      classes: string;
    };
    imageTitle?: string;
    desc?: string;
  };
};

const CarouselItemDestination: React.FC<CarouselItemDestinationProps> = ({id, imageTitle, rating, stay, desc, price, styles }) => {
  const OriginalPrice = price ? price + price * 0.10 : 0;

  return (
    <li key={id} className={styles.li}>
      <picture>
        <div style={styles.image.bgStyle} className={styles.image.classes}></div>
      </picture>

      <ul>
        <li>
          <div className={`titles ${styles.imageTitle}`}>
            <h2>{imageTitle}</h2>
            <p> <span className="star">star</span> {rating}</p>
          </div>
          <div className='flex gap-2'>
            <p>{stay?.day} Days</p>
            <p>{stay?.night} Nights</p>
          </div>
        </li>
       
        <li>
          <ul className='flex justify-between gap-1'>
            <li>
              <img src="" alt="" />
              <p className='text-sm'>Flight</p>
            </li>
            <li>
              <img src="" alt="" />
              <p className='text-sm'>Hotel</p>
            </li>
            <li>
              <img src="" alt="" />
              <p className='text-sm'>Transport</p>
            </li>
            <li>
              <img src="" alt="" />
              <p className='text-sm'>Activities</p>
            </li>
          </ul>
        </li>
        
        
        <li>{desc?.text1}</li>
        <li>{desc?.text2}</li>
        <li>{desc?.text3}</li>
        
        <li>
          <div className="price">
            <p className="old-price">$ {OriginalPrice}</p>
            <p className="new-price">$ {price} <span>per person</span></p>
          </div>
        </li>
      </ul>
    
    </li>
  );
};

export {CarouselItemDestination};
