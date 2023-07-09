import { useEffect, useRef, useState } from "react";

const useLazyComponent = () => {
  // Define state for the visibility of the component
  const [isVisible, setIsVisible] = useState(false);

  // Create a ref to the component element
  const ref = useRef(null);

  // Create an IntersectionObserver to track when the component becomes visible
  useEffect(() => {
    // Define the observer callback to update the visibility state
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Stop observing the element once it becomes visible
          observer.unobserve(entry.target);
        }
      },
      // Define the observer options
      { rootMargin: "0px", threshold: 0.9 }
    );

    // Observe the component element once it has mounted
    if (ref.current) {
      observer.observe(ref.current);
    }

    // Clean up the observer when the component unmounts
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  // Return the ref and visibility state as an object
  return { ref, isVisible };
};

export default useLazyComponent;
