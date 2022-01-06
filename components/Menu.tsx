import { useState } from "react";

export default function Menu() {
  const [active, setActive] = useState(false);

  return (
    <div
      className={`hamburger ${active ? "is_active" : ""}`}
      onClick={() => setActive(!active)}
    >
      <span className='line'></span>
      <span className='line'></span>
      <span className='line'></span>
    </div>
  );
}
