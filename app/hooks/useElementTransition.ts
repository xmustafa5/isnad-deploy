import { useCallback, useEffect, useRef, useState } from "react";

function useElementTransition<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [shouldRender, setShouldRender] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const mountElement = useCallback(() => {
    setShouldRender(true);
  }, []);

  const unMountElement = useCallback(() => {
    setIsTransitioning(false);
  }, []);

  const toggleElement = useCallback(() => {
    if (shouldRender) {
      unMountElement();
    } else {
      mountElement();
    }
  }, [shouldRender, mountElement, unMountElement]);

  // Handle enter transition
  useEffect(() => {
    if (shouldRender && ref.current) {
      requestAnimationFrame(() => {
        setIsTransitioning(true);
      });
    }
  }, [shouldRender]);

  // Handle exit transition - single event listener setup
  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleTransitionEnd = () => {
      if (!isTransitioning) {
        setShouldRender(false);
      }
    };

    element.addEventListener("transitionend", handleTransitionEnd);

    return () => {
      element.removeEventListener("transitionend", handleTransitionEnd);
    };
  }, []); // Empty dependency array - listener stays consistent

  return {
    ref,
    shouldRender,
    isTransitioning,
    mountElement,
    unMountElement,
    toggleElement,
  };
}

export default useElementTransition;
