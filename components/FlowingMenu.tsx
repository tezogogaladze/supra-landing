'use client';

import React from 'react';
import { gsap } from 'gsap';
import './FlowingMenu.css';

interface MenuItem {
  link: string;
  text: string;
  image: string;
  logo?: string;
}

interface FlowingMenuProps {
  items?: MenuItem[];
}

function FlowingMenu({ items = [] }: FlowingMenuProps) {
  return (
    <div className="menu-wrap">
      <nav className="menu">
        {items.map((item, idx) => (
          <MenuItem key={idx} {...item} />
        ))}
      </nav>
    </div>
  );
}

interface MenuItemProps {
  link: string;
  text: string;
  image: string;
  logo?: string;
}

function MenuItem({ link, text, image, logo }: MenuItemProps) {
  const itemRef = React.useRef<HTMLDivElement>(null);
  const marqueeRef = React.useRef<HTMLDivElement>(null);
  const marqueeInnerRef = React.useRef<HTMLDivElement>(null);
  const [isMarqueeVisible, setIsMarqueeVisible] = React.useState(false);
  const animationDefaults = { duration: 0.6, ease: 'expo' };

  const findClosestEdge = (mouseX: number, mouseY: number, width: number, height: number) => {
    const topEdgeDist = distMetric(mouseX, mouseY, width / 2, 0);
    const bottomEdgeDist = distMetric(mouseX, mouseY, width / 2, height);
    return topEdgeDist < bottomEdgeDist ? 'top' : 'bottom';
  };

  const distMetric = (x: number, y: number, x2: number, y2: number) => {
    const xDiff = x - x2;
    const yDiff = y - y2;
    return xDiff * xDiff + yDiff * yDiff;
  };

  const showMarquee = (x: number, y: number, width: number, height: number) => {
    if (!itemRef.current || !marqueeRef.current || !marqueeInnerRef.current) return;

    const edge = findClosestEdge(x, y, width, height);
    setIsMarqueeVisible(true);

    gsap
      .timeline({ defaults: animationDefaults })
      .set(marqueeRef.current, { y: edge === 'top' ? '-101%' : '101%' }, 0)
      .set(marqueeInnerRef.current, { y: edge === 'top' ? '101%' : '-101%' }, 0)
      .to([marqueeRef.current, marqueeInnerRef.current], { y: '0%' }, 0);
  };

  const hideMarquee = (x: number, y: number, width: number, height: number) => {
    if (!itemRef.current || !marqueeRef.current || !marqueeInnerRef.current) return;

    const edge = findClosestEdge(x, y, width, height);
    setIsMarqueeVisible(false);

    gsap
      .timeline({ defaults: animationDefaults })
      .to(marqueeRef.current, { y: edge === 'top' ? '-101%' : '101%' }, 0)
      .to(marqueeInnerRef.current, { y: edge === 'top' ? '101%' : '-101%' }, 0);
  };

  const handleMouseEnter = (ev: React.MouseEvent) => {
    if (!itemRef.current) return;
    const rect = itemRef.current.getBoundingClientRect();
    const x = ev.clientX - rect.left;
    const y = ev.clientY - rect.top;
    showMarquee(x, y, rect.width, rect.height);
  };

  const handleMouseLeave = (ev: React.MouseEvent) => {
    if (!itemRef.current) return;
    const rect = itemRef.current.getBoundingClientRect();
    const x = ev.clientX - rect.left;
    const y = ev.clientY - rect.top;
    hideMarquee(x, y, rect.width, rect.height);
  };

  const handleClick = (ev: React.MouseEvent<HTMLAnchorElement> | React.TouchEvent<HTMLAnchorElement>) => {
    if (!itemRef.current) return;
    
    if (!isMarqueeVisible) {
      ev.preventDefault();
      ev.stopPropagation();
      
      const rect = itemRef.current.getBoundingClientRect();
      let x, y;
      
      if ('touches' in ev) {
        // Touch event
        const touch = ev.touches[0] || ev.changedTouches[0];
        x = touch.clientX - rect.left;
        y = touch.clientY - rect.top;
      } else {
        // Mouse event - use center
        x = rect.width / 2;
        y = rect.height / 2;
      }
      
      showMarquee(x, y, rect.width, rect.height);
    }
    // If marquee is visible, allow navigation (don't preventDefault)
  };

  const repeatedMarqueeContent = Array.from({ length: 12 }).map((_, idx) => (
    <React.Fragment key={idx}>
      <span>{text}</span>
      <div className="marquee__img" style={{ backgroundImage: `url(${image})` }} />
    </React.Fragment>
  ));

  return (
    <div className="menu__item" ref={itemRef}>
      <a
        className="menu__item-link"
        href={link}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
        onTouchStart={handleClick}
      >
        {logo ? (
          <img src={logo} alt={text} style={{ width: '190px', height: '60px', objectFit: 'contain' }} />
        ) : (
          text
        )}
      </a>
      <div className="marquee" ref={marqueeRef}>
        <div className="marquee__inner-wrap" ref={marqueeInnerRef}>
          <div className="marquee__inner" aria-hidden="true">
            {repeatedMarqueeContent}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FlowingMenu;
