import React from "react";

// third party
import clsx from "clsx";

// styles
import styles from "./Button.module.scss";

interface ButtonProps {
  variant?: "primary" | "secondary";
  label: string;
  onClick?: () => void;
}

const Button = ({ variant = "primary", label, ...props }: ButtonProps) => {
  const buttonClass = clsx(styles.button, styles[variant]);

  return (
    <button className={buttonClass} {...props}>
      {label}
    </button>
  );
};
export default Button;
