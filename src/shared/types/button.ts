export type buttonPropsType = {
  size: "sm" | "md" | "lg" | "full";
  content: string;
  onClick?: () => void;
  buttonType: "submit" | "button";
};
