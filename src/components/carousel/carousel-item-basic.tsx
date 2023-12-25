// CarouselItemType1.jsx
import React from 'react';

type CarouselItem = {
  imageTitle?: string;
  desc?: {
    text1?: string;
    text2?: string;
  };
  button?: string;
  
  styles: {
    li?: string;
    image: {
      bgStyle: object;
      classes: string;
    };
    imageTitle?: string;
    desc?: string;
    button?: string;
  };
};

const CarouselItemBasic: React.FC<CarouselItem> = ({ imageTitle, desc, button, styles }) => {
  return (
    <li className={styles.li}>
      <picture>
        <div style={styles.image.bgStyle} className={styles.image.classes}></div>
      </picture>
      {imageTitle && <h3 className={styles.imageTitle}>{imageTitle}</h3>}
      {desc && (
        <p className={styles.desc}>
          {desc.text1} <br /> {desc.text2}
        </p>
      )}
      {button && <button className={styles.button}>{button}</button>}
    </li>
  );
};

export  {CarouselItemBasic};
