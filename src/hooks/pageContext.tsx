import { createContext, useState, useEffect, useContext, useRef } from "react";
import { useScroll, useTransform } from "framer-motion";

interface CurrentPercentType {
  topSect: React.MutableRefObject<HTMLInputElement | null>
  currentPercent: number;
 aboutSect: React.MutableRefObject<HTMLInputElement | null>
  skillSect: React.MutableRefObject<HTMLInputElement | null>
  projectSect: React.MutableRefObject<HTMLInputElement | null>
  connectSect: React.MutableRefObject<HTMLInputElement | null>
  scrollToSection: Function;
  buttonAnimate: {
    preHover: {
        y: number;
    };
    onHover: {
        // y: string;
        transition: {
            staggerChildren: number;
        };
    };
    onTap: {
        y: number;
    }
  };
  letterAnimate: {
    preHover: {
        y: number;
        scale: number;
    };
    onHover: {
        scale: number;
        y: string;
    };
};
}

interface Props {
  children: React.ReactNode;
}
const pageContext = createContext<CurrentPercentType>({} as CurrentPercentType);

const PageLocContext: React.FC<Props> = ({ children }) => {
  //Link buttons
  const topSect = useRef<HTMLInputElement | null>(null);
  const aboutSect = useRef<HTMLInputElement | null>(null);
  const skillSect = useRef<HTMLInputElement | null>(null);
  const projectSect = useRef<HTMLInputElement | null>(null);
  const connectSect = useRef<HTMLInputElement | null>(null);
  //Page scroll percent
  const [currentPercent, setCurrentPercent] = useState<number>(0);
  const { scrollYProgress } = useScroll();
  const yRange = useTransform(scrollYProgress, [0, 1], [0, 100]);


  //Scroll to event handles
  const scrollToSection = (elementRef: any) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };
  //Watcher for nav button transition
  useEffect(
    () =>
      yRange.onChange((v) => {
        setCurrentPercent(Math.trunc(v));
      }),
    [yRange]
  );

  //Button Animation
  const letterAnimate = {
    preHover: { y: 0, scale: 1.2 },
    onHover: {
      scale: 1.4,
      y: "-2px",
    },
  };
  const buttonAnimate = {
    preHover: { y: 0 },
    onHover: {
     
      transition: {
        staggerChildren: 0.05,
      },
    },
    onTap: {
      y: 0,
    },
  };
//End of Button Animation
  return (
    <pageContext.Provider
      value={{
        currentPercent,
        aboutSect,
        skillSect,
        projectSect,
        connectSect,
        scrollToSection,
        topSect, buttonAnimate, letterAnimate
      }}
    >
      {children}
    </pageContext.Provider>
  );
};

export default PageLocContext;
export const usePageLocation = () => useContext(pageContext);
