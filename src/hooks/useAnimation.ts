import { useEffect, useRef } from 'react';
import { animations } from '../utils/animations';
import type { AnimationType, TriggerAnimationType } from '../types';

export const useAnimation = (animationType: AnimationType, options = {}) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!elementRef.current) return;

    switch (animationType) {
      case 'scrollReveal':
        animations.scrollReveal(elementRef.current, options);
        break;
      case 'staggerReveal':
        animations.staggerReveal(Array.from(elementRef.current.children) as HTMLElement[], options);
        break;
      case 'hero':
        animations.heroTimeline();
        break;
      case 'modal':
        animations.modalShow(elementRef.current);
        break;
      case 'pageEnter':
        animations.pageTransition.enter(elementRef.current);
        break;
      default:
        break;
    }
  }, [animationType, options]);

  const triggerAnimation = (type: TriggerAnimationType) => {
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