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
  navIsHovered: NavIsHoveredTyped;
  setNavIsHovered: Function;
  projectIsHovered: ProjectIsHoveredType;
  setProjectIsHovered: Function;
  connectIsHovered: boolean;
  setConnectIsHovered: Function;
};
//Button State Types
type NavIsHoveredTyped = {
  home: boolean;
  about: boolean;
  skills: boolean;
  projects: boolean;
  connect: boolean;
  mainProjects: boolean;
  mainResume: boolean;
}
const initialNavIsHovered = {
  home: false,
  about: false,
  skills: false,
  projects: false,
  connect: false,
  mainProjects: false,
  mainResume: false,
}
type ProjectIsHoveredType = {
  P1: {github: boolean, video:boolean, live: boolean};
  P2: {github: boolean, video:boolean, live: boolean};
  P3: {github: boolean, video:boolean, live: boolean};
  P4: {github: boolean, video:boolean, live: boolean};
}
const initialProjectIsHovered = {
  P1:{github: false, video:false, live: false},
  P2:{github: false, video:false, live: false},
  P3:{github: false, video:false, live: false},
  P4:{github: false, video:false, live: false},
}
interface Props {
  children: React.ReactNode;
}
const pageContext = createContext<CurrentPercentType>({} as CurrentPercentType);

const PageLocContext: React.FC<Props> = ({ children }) => {
  //Button Hover Animation
  const [navIsHovered, setNavIsHovered] = useState<NavIsHoveredTyped>(initialNavIsHovered);
  const [projectIsHovered, setProjectIsHovered] = useState(initialProjectIsHovered);
  const [connectIsHovered, setConnectIsHovered] = useState<boolean>(false);
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
    <pageContext.Provider value={{ currentPercent, aboutSect, skillSect, projectSect, connectSect,scrollToSection, topSect, navIsHovered, setNavIsHovered, projectIsHovered, setProjectIsHovered, connectIsHovered, setConnectIsHovered }}>
      {children}
    </pageContext.Provider>
  );
};





export default PageLocContext;
export const usePageLocation = () => useContext(pageContext);
