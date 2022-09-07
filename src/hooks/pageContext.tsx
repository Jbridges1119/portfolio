import { createContext, useState, useEffect, useContext, useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

interface CurrentPercentType  {
  topSect: any
  currentPercent: number;
  aboutSect: any;
  skillSect: any;
  projectSect: any; 
  connectSect: any;
  scrollToSection: Function;
};

interface Props {
  children: React.ReactNode;
}
const pageContext = createContext<CurrentPercentType>({} as CurrentPercentType);

const PageLocContext: React.FC<Props> = ({ children }) => {

  
  //Link buttons
  const topSect = useRef<HTMLInputElement | null>(null)
  const aboutSect = useRef<HTMLInputElement | null>(null)
const skillSect = useRef<HTMLInputElement | null>(null)
const projectSect = useRef<HTMLInputElement | null>(null)
const connectSect = useRef<HTMLInputElement | null>(null)
//Page scroll percent
  const [currentPercent, setCurrentPercent] = useState<number>(0);
  const { scrollYProgress } = useScroll();
  const yRange = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const pathLength = useSpring(scrollYProgress, {
    stiffness: 400,
    damping: 90,
  });
  //Scroll to event handles
  const scrollToSection = (elementRef: any) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: 'smooth'
        })
  }
//Watcher for nav button transition
  useEffect(
    () =>
      yRange.onChange((v) => {
        setCurrentPercent(Math.trunc(v));
      }),
    [yRange]
  );
  
  return (
    <pageContext.Provider value={{ currentPercent, aboutSect, skillSect, projectSect, connectSect,scrollToSection, topSect }}>
      {children}
    </pageContext.Provider>
  );
};





export default PageLocContext;
export const usePageLocation = () => useContext(pageContext);
