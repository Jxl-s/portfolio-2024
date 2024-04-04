import { useEffect, useState } from "react";

const useVisibleHook = (elementId: string, threshold = 0.5) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Create an observer
        const observer = new IntersectionObserver(
            ([entry]) => setIsVisible(entry.isIntersecting),
            { threshold }
        );

        // Observe the element
        const element = document.getElementById(elementId);
        if (element) {
            observer.observe(element);
        }

        // Clean up
        return () => {
            if (element) {
                observer.unobserve(element);
            }
        };
    }, [elementId, threshold]);

    return isVisible;
};

export default useVisibleHook;
