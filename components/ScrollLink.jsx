"use client";

export default function ScrollLink({ to, onClick, offset = 24, className = "", children }) {
  const handleClick = (e) => {
    e.preventDefault();
    if (onClick) onClick();

    if (to === "top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const el = document.getElementById(to);
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <a href={`#${to}`} onClick={handleClick} className={className}>
      {children}
    </a>
  );
}