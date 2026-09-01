import { useState, useRef, useEffect } from "react";

export const TiltCard = ({
  children,
  className = "",
  maxTilt = 6,
  scale = 1.01,
  perspective = 1000,
  disabled = false,
  ...props
}) => {
  const cardRef = useRef(null);
  const [transformStyle, setTransformStyle] = useState("");
  const [isHovered, setIsHovered] = useState(false);
  const [isTouchOrReduced, setIsTouchOrReduced] = useState(false);

  useEffect(() => {
    // Check for touch device or reduced-motion preference
    const isTouch =
      typeof window !== "undefined" &&
      ("ontouchstart" in window || navigator.maxTouchPoints > 0);
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    setIsTouchOrReduced(isTouch || prefersReduced);
  }, []);

  const handleMouseMove = (e) => {
    if (disabled || isTouchOrReduced || !cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const rotateX = ((mouseY - height / 2) / (height / 2)) * -maxTilt;
    const rotateY = ((mouseX - width / 2) / (width / 2)) * maxTilt;

    setTransformStyle(
      `perspective(${perspective}px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(${scale}, ${scale}, ${scale})`
    );
  };

  const handleMouseEnter = () => {
    if (disabled || isTouchOrReduced) return;
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    if (disabled || isTouchOrReduced) return;
    setIsHovered(false);
    setTransformStyle(
      `perspective(${perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`
    );
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: transformStyle || undefined,
        transition: isHovered
          ? "transform 0.1s cubic-bezier(0.2, 0.8, 0.4, 1)"
          : "transform 0.5s cubic-bezier(0.2, 0.8, 0.4, 1)",
        transformStyle: "preserve-3d",
        willChange: isHovered ? "transform" : "auto",
      }}
      className={className}
      {...props}
    >
      {children}
    </div>
  );
};
