'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export function RevealObserver() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) return;
    const targets = Array.from(document.querySelectorAll<HTMLElement>(
      'main > section:not(.hero):not(.page-hero):not(.record-hero), .page-body > *, .record-detail > *'
    ));
    const observer = new IntersectionObserver(entries => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        const element = entry.target as HTMLElement;
        element.classList.remove('reveal-pending');
        element.classList.add('reveal-visible');
        observer.unobserve(element);
      }
    }, { threshold: 0.08, rootMargin: '0px 0px -45px 0px' });

    for (const element of targets) {
      if (element.getBoundingClientRect().top < window.innerHeight * 0.9) continue;
      element.classList.add('reveal-pending');
      observer.observe(element);
    }
    return () => {
      observer.disconnect();
      targets.forEach(element => element.classList.remove('reveal-pending', 'reveal-visible'));
    };
  }, [pathname]);

  return null;
}
