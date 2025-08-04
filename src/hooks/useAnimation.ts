import { useEffect, useRef } from 'react';
import { animations } from '../utils/animations';

export const useAnimation = (animationType, options = {}) => {
  const elementRef = useRef(null);

  useEffect(() => {
    if (!elementRef.current) return;

    let animation;
    
    switch (animationType) {
      case 'scrollReveal':
        animation = animations.scrollReveal(elementRef.current, options);
        break;
      case 'staggerReveal':
        animation = animations.staggerReveal(elementRef.current.children, options);
        break;
      case 'hero':
        animation = animations.heroTimeline();
        break;
      case 'modal':
        animation = animations.modalShow(elementRef.current);
        break;
      case 'pageEnter':
        animation = animations.pageTransition.enter(elementRef.current);
        break;
      default:
        break;
    }

    return () => {
      if (animation && animation.kill) {
        animation.kill();
      }
    };
  }, [animationType, JSON.stringify(options)]);

  const triggerAnimation = (type, customOptions = {}) => {
    if (!elementRef.current) return;

    switch (type) {
      case 'hover':
        animations.cardHover.enter(elementRef.current);
        break;
      case 'unhover':
        animations.cardHover.leave(elementRef.current);
        break;
      case 'modalShow':
        animations.modalShow(elementRef.current);
        break;
      case 'modalHide':
        animations.modalHide(elementRef.current);
        break;
      default:
        break;
    }
  };

  return { elementRef, triggerAnimation };
};