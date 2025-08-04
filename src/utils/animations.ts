import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export const animations = {
  // Hero animations
  heroTimeline: () => {
    const tl = gsap.timeline();
    tl.from(".hero-title", { 
      y: 100, 
      opacity: 0, 
      duration: 1.2, 
      ease: "power3.out" 
    })
    .from(".hero-subtitle", { 
      y: 50, 
      opacity: 0, 
      duration: 0.8 
    }, "-=0.5")
    .from(".hero-buttons", {
      y: 30,
      opacity: 0,
      duration: 0.6
    }, "-=0.3");
    return tl;
  },
  
  // Scroll reveal animations
  scrollReveal: (element: HTMLElement, options = {}) => {
    const defaults = {
      y: 60,
      opacity: 0,
      duration: 1,
      ease: "power2.out"
    };
    
    const config = { ...defaults, ...options };
    
    gsap.from(element, {
      scrollTrigger: {
        trigger: element,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      },
      ...config
    });
  },

  // Stagger animation for grid items
  staggerReveal: (elements: HTMLElement[], options = {}) => {
    const defaults = {
      y: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: "power2.out"
    };
    
    const config = { ...defaults, ...options };
    
    gsap.from(elements, {
      scrollTrigger: {
        trigger: elements[0],
        start: "top 85%",
        toggleActions: "play none none reverse"
      },
      ...config
    });
  },
  
  // Hover animations
  cardHover: {
    enter: (element: HTMLElement) => {
      gsap.to(element, {
        scale: 1.05,
        y: -5,
        boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
        duration: 0.3,
        ease: "power2.out"
      });
    },
    leave: (element: HTMLElement) => {
      gsap.to(element, {
        scale: 1,
        y: 0,
        boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
        duration: 0.3,
        ease: "power2.out"
      });
    }
  },

  // Loading spinner
  loadingSpinner: (element: HTMLElement) => {
    gsap.to(element, {
      rotation: 360,
      duration: 1,
      ease: "none",
      repeat: -1
    });
  },

  // Modal animations
  modalShow: (element: HTMLElement) => {
    gsap.fromTo(element, 
      { 
        opacity: 0, 
        scale: 0.8,
        y: 50 
      },
      { 
        opacity: 1, 
        scale: 1,
        y: 0,
        duration: 0.4,
        ease: "power2.out" 
      }
    );
  },

  modalHide: (element: HTMLElement) => {
    gsap.to(element, {
      opacity: 0,
      scale: 0.8,
      y: 50,
      duration: 0.3,
      ease: "power2.in"
    });
  },

  // Page transitions
  pageTransition: {
    enter: (element: HTMLElement) => {
      gsap.fromTo(element,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }
      );
    },
    exit: (element: HTMLElement) => {
      gsap.to(element, {
        opacity: 0,
        y: -30,
        duration: 0.4,
        ease: "power2.in"
      });
    }
  },

  // Counter animation
  countUp: (element: HTMLElement, endValue: number, duration = 2) => {
    const obj = { value: 0 };
    gsap.to(obj, {
      value: endValue,
      duration: duration,
      ease: "power2.out",
      onUpdate: () => {
        element.textContent = Math.round(obj.value).toString();
      }
    });
  }
};