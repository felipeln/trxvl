// CarouselItemDetailed.jsx
import React from 'react';

type CarouselItemCategoriesProps = {
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

const CarouselItemCategories: React.FC<CarouselItemCategoriesProps> = ({ imageTitle, rating, stay, desc, price, styles }) => {
  const OriginalPrice = price ? price + price * 0.10 : 0;

  return (
    <li className={styles.li}>
      <picture>
        <div style={styles.image.bgStyle} className={styles.image.classes}></div>
      </picture>
      <ul>
        <li>
          <div className="titles">
            <h2>{imageTitle}</h2>
            <p> <span className="star">star</span> {rating}</p>
          </div>
          <p>{stay?.day} {stay?.night}</p>
        </li>
        <li>
          <ul>
            <li>
              <img src="" alt="" />
              <p>Flight</p>
            </li>
            <li>
              <img src="" alt="" />
              <p>Hotel</p>
            </li>
            <li>
              <img src="" alt="" />
              <p>Transport</p>
            </li>
            <li>
              <img src="" alt="" />
              <p>Activities</p>
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

export {CarouselItemCategories};
