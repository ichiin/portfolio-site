import { useRef, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const useApp = () => {
const { t } = useTranslation();
const [highlight, setHighlight] = useState(t('Home.id'));
const homeRef = useRef<HTMLDivElement | null>(null);
const aboutRef = useRef<HTMLDivElement | null>(null);
const projectsRef = useRef<HTMLDivElement | null>(null);


const handleHomeScroll = (entries: IntersectionObserverEntry[]) => {
  entries.forEach(entry => {
    if (entry.isIntersecting)setHighlight(t('Home.id'));
  });
};

const handleAboutScroll = (entries: IntersectionObserverEntry[]) => {
    entries.forEach(entry => {
        if (entry.isIntersecting)setHighlight(t('About.id'));
    });
  };

const handleProjectsScroll = (entries: IntersectionObserverEntry[]) => {
    entries.forEach(entry => {
        if (entry.isIntersecting)setHighlight(t('Projects.id'));
    });
  };

useEffect(() => {

  const options: IntersectionObserverInit = {
    root: null, // Use the viewport as the root
    rootMargin: '0px',
    threshold: 0.5, // Trigger when 50% of the target element is in view
  };

  if (homeRef.current) {
    const observer = new IntersectionObserver(handleHomeScroll, options);
    observer.observe(homeRef.current);
  }
  if(aboutRef.current){
    const observer = new IntersectionObserver(handleAboutScroll, options);
    observer.observe(aboutRef.current);
  }
  if(projectsRef.current){
    const observer = new IntersectionObserver(handleProjectsScroll, options);
    observer.observe(projectsRef.current);
  }
}, [homeRef]);

return {
    homeRef,
    highlight,
    aboutRef,
    projectsRef
}

}

export default useApp;