import React, { useCallback, useEffect, useState } from "react";

interface ScrollValue {
  innerWidth: number;
}

export const SizeContext = React.createContext<ScrollValue>({
  innerWidth: 0,
});

const SizeObserver: React.FC = ({ children }) => {
  const Sc = SizeContext as any;
  const [innerWidth, setInnerWidth] = useState(0);
  const handleResize = useCallback(() => {
    setInnerWidth(window.innerWidth);
  }, []);

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize, { passive: true });
    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);

  return <Sc.Provider value={{ innerWidth }}>{children}</Sc.Provider>;
};

export default SizeObserver;
