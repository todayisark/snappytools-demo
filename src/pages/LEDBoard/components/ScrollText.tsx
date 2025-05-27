import { LEDSettings } from "@/types/ledBoard/types";
import React, { useEffect, useRef, useState } from "react";
import "./index.scss";

const DEFAULT_SPEED = 200;

const ScrollText: React.FC<LEDSettings> = ({
  text,
  textColor,
  bgColor,
  fontFamily,
  fontSize,
  speedPercent,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [distance, setDistance] = useState(0);

  // Calculate the total distance to scroll based on container and content widths
  const calcDistance = () => {
    if (containerRef.current && contentRef.current) {
      const containerWidth = containerRef.current.offsetWidth;
      const contentWidth = contentRef.current.offsetWidth;
      setDistance(containerWidth + contentWidth);
    }
  };

  // Recalculate distance when text, fontFamily, fontSize, or speedPercent changes
  useEffect(() => {
    calcDistance();

    const observer = new ResizeObserver(() => {
      calcDistance();
    });

    if (containerRef.current) observer.observe(containerRef.current);
    if (contentRef.current) observer.observe(contentRef.current);

    return () => observer.disconnect();
  }, [text, fontFamily, fontSize, speedPercent]);

  const speed = DEFAULT_SPEED * ((speedPercent || 100) / 100);
  const duration = speed > 0 && distance > 0 ? (distance / speed) * 1000 : 0;

  return (
    <div
      ref={containerRef}
      className="scrollTextContainer"
      style={{
        backgroundColor: bgColor,
      }}
    >
      <div
        ref={contentRef}
        className="scrollTextContent"
        style={{
          color: textColor,
          fontFamily,
          fontSize: `calc(8rem * ${(fontSize || 100) / 100})`,
          animation: distance
            ? `scroll-horizontal ${duration}ms linear infinite`
            : "none",
        }}
      >
        {text}
      </div>
    </div>
  );
};

export default ScrollText;
