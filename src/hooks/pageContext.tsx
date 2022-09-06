import { createContext, useState, useEffect, useContext } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

type CurrentPercentType = {
  currentPercent: number;
};

interface Props {
  children: React.ReactNode;
}
const pageContext = createContext<CurrentPercentType>({} as CurrentPercentType);

const PageLocContext: React.FC<Props> = ({ children }) => {
  const [currentPercent, setCurrentPercent] = useState<number>(0);
  const { scrollYProgress } = useScroll();
  const yRange = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const pathLength = useSpring(scrollYProgress, {
    stiffness: 400,
    damping: 90,
  });
  useEffect(
    () =>
      yRange.onChange((v) => {
        setCurrentPercent(Math.trunc(v));
      }),
    [yRange]
  );

  return (
    <pageContext.Provider value={{ currentPercent }}>
      {children}
    </pageContext.Provider>
  );
};
export default PageLocContext;
export const usePageLocation = () => useContext(pageContext);
