"use client";

export default function ScrollLink({ to, onClick, className = "", children }) {
  const handleClick = (e) => {
    e.preventDefault();
    if (onClick) onClick();

    if (to === "top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const el = document.getElementById(to);
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.scrollY - 72;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <a href={`#${to}`} onClick={handleClick} className={className}>
      {children}
    </a>
  );
}