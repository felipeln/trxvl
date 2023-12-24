import { ReactNode } from "react";
import { useRef, MutableRefObject } from "react";
import { useDraggable } from "react-use-draggable-scroll";

type CarouselItemProps = {
  imageTitle?: string;
  desc?: {
    text1?: string;
    text2?: string;
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

type CarouselProps = {
  id: string;
  title?: string;
  children: ReactNode;
  styles: {
    title?: string;
    container?: string;
    ul?: string;
  };
};

const CarouselItem = ({
  imageTitle,
  desc,
  subtitle,
  button,
  styles,
}: CarouselItemProps) => {
  return (
    <li className={styles.li}>
      <picture>
        <div
          style={styles.image.bgStyle}
          className={styles.image.classes}
        ></div>
      </picture>

      {subtitle && imageTitle && desc && button ? (
        <div className="wrapper flex flex-col gap-4">
          <div className="titles">
            <h4 className={styles.subtitle}>{subtitle}</h4>
            <h3 className={styles.imageTitle}>{imageTitle}</h3>
          </div>
          <p className={styles.desc}>
            {desc?.text1} <br />{" "}
          </p>
          <button className={styles.button}>{button}</button>
        </div>
      ) : (
        <>
          {imageTitle && <h3 className={styles.imageTitle}>{imageTitle}</h3>}

          {desc && (
            <p className={styles.desc}>
              {desc.text1} <br /> {desc.text2}
            </p>
          )}

          {button && <button className={styles.button}>{button}</button>}
        </>
      )}
    </li>
  );
};

const Carousel = ({ title, styles, children, id }: CarouselProps) => {
  const ref = useRef<HTMLUListElement>(
    null
  ) as MutableRefObject<HTMLUListElement>;
  const { events } = useDraggable(ref);

  return (
    <section className={styles.container} id={id}>
      <h2 className={styles.title}>{title}</h2>

      <ul className={styles.ul} ref={ref} {...events}>
        {children}
      </ul>
    </section>
  );
};

export { Carousel, CarouselItem };
