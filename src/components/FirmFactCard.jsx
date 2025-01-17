import { useState } from "react";
import PropTypes from "prop-types";

// Styles
import "./FirmFactCard.scss";

const FirmFactCard = ({
  children,
  variant = "default",
  oneLiner = false,
  disabled = false,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const cardClass = `firm-facts__card ${variant}`;
  const selfCenterClass = oneLiner ? "self-center" : "";

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  const secondRowText = disabled ? "disabled" : isHovered ? "hover" : "initial";

  return (
    <div
      className={cardClass + " " + selfCenterClass}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      disabled={disabled}
    >
      {children}

      {variant === "border" && <span>{secondRowText}</span>}
    </div>
  );
};

FirmFactCard.propTypes = {
  children: PropTypes.node,
  variant: PropTypes.oneOf(["default", "border"]),
  oneLiner: PropTypes.bool,
  secondRow: PropTypes.bool,
  disabled: PropTypes.bool,
};

export default FirmFactCard;
