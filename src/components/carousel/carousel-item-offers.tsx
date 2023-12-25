// CarouselItemWithSubtitle.jsx
import React from 'react';

type CarouselItemOffersProps = {
  imageTitle?: string;
  desc?: {
    text1?: string;
  };
  subtitle?: string;
  button?: string;
  styles: {
    li?: string;
    image: {
      bgStyle: object;
      classes: string;
    };
    imageTitle?: string;
    desc?: string;
    subtitle?: string;
    button?: string;
  };
};

const CarouselItemOffers: React.FC<CarouselItemOffersProps> = ({ imageTitle, desc, subtitle, button, styles }) => {
  return (
    <li className={styles.li}>
      <picture>
        <div style={styles.image.bgStyle} className={styles.image.classes}></div>
      </picture>

      <div className="wrapper flex flex-col gap-4">
        <div className="titles">
          <h4 className={styles.subtitle}>{subtitle}</h4>
          <h3 className={styles.imageTitle}>{imageTitle}</h3>
        </div>
        <p className={styles.desc}>{desc?.text1} <br /></p>
        <button className={styles.button}>{button}</button>
      </div>

    </li>
  );
};

export {CarouselItemOffers};
