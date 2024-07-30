import { links } from "@/routes/paths";
import { useState, useEffect, useRef, useCallback, useMemo } from "react";

const useActiveSection = (
  sectionIds: string[] = links.map((link) => link.sectionId),
  threshold = 0.5,
) => {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const sectionRefs = useRef<Record<string, IntersectionObserverEntry>>({});
  const currentActiveSection = useRef<string | null>(null);

  const observerCallback = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        sectionRefs.current[entry.target.id] = entry;
      });

      const visibleSections = Object.values(sectionRefs.current)
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
      if (visibleSections[0] && visibleSections.length > 0) {
        const newActiveSection = visibleSections[0].target.id;
        if (currentActiveSection.current !== newActiveSection) {
          currentActiveSection.current = newActiveSection;
          setActiveSection(newActiveSection);
        }
      } else {
        currentActiveSection.current = null;
        setActiveSection(null);
      }
    },
    [],
  );

  const observerOptions = useMemo(() => ({ threshold }), [threshold]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions,
    );
    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      sectionIds.forEach((id) => {
        const element = document.getElementById(id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, [sectionIds, observerCallback, observerOptions]);
  return activeSection;
};

export default useActiveSection;
