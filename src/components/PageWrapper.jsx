import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

export default function PageWrapper({ children }) {
  const location = useLocation();
  const [show, setShow] = useState(true);

  useEffect(() => {
    setShow(false);
    const timer = setTimeout(() => setShow(true), 200);
    window.scrollTo(0, 0);
    return () => clearTimeout(timer);
  }, [location]);

  return (
    <div className={`page ${show ? "page-enter" : "page-exit"}`}>
      {children}
    </div>
  );
}
