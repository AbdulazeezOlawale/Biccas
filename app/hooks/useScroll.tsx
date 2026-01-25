import { useEffect, useRef, useState } from "react";
import { useScrollStore } from "../store/ScrollStore";

const useScroll = () => {
  const lastRef = useRef(0);
  const [scrollPosition, setScrollPosition] = useState(0)
  const setHidden = useScrollStore((state) => state.setHidden);
  const setScrollY = useScrollStore((state) => state.setScrollY);

  useEffect(() => {
    setScrollY(scrollPosition);
  }, [setScrollY, scrollPosition])
  
  const onScroll = () => {
    const y = window.scrollY;
    const shouldHide = y > lastRef.current && y > 60;
    setHidden((prev) => (shouldHide !== prev ? shouldHide : prev));
    setScrollPosition(y)
    lastRef.current = y;
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll, { passive: true });
    
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

};

export default useScroll;
