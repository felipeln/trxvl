import { ReactNode } from "react";
import { useRef, MutableRefObject } from "react";
import { useDraggable } from "react-use-draggable-scroll";

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

export { Carousel};
