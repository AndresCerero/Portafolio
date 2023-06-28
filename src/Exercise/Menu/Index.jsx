import { useState } from "react";
import "./MenuIcon.scss";

const MenuIcon = () => {
  const [isActive, setIsActive] = useState(false);
  const [showAnimation, setShowAnimation] = useState(true);

  const handleClick = () => {
    setIsActive(!isActive);
    setShowAnimation(false)
  };

  return (
    <>
      <div className="frame">
        <div className="center">
          <div
            className={`menu-icon ${isActive ? "menu-icon-active" : ""}`}
            onClick={handleClick}
          >
            <div
              className={`menu-icon-line-1 ${showAnimation ? "menu-icon-no-animation" : ""}`}
            ></div>
            <div
              className={`menu-icon-line-2 ${showAnimation ? "menu-icon-no-animation" : ""}`}
            ></div>
            <div
              className={`menu-icon-line-3 ${showAnimation ? "menu-icon-no-animation" : ""}`}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MenuIcon;
