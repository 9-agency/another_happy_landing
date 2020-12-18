import styles from "./styles.module.css";

type Font =
  | "headline1"
  | "headline2"
  | "headline3"
  | "body1"
  | "body2"
  | "body3";

interface Props
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  > {
  font: Font;
}

export const Label = ({ font, className, children, ...props }: Props) => (
  <p className={`${styles[font]} ${className}`} {...props}>
    {children}
  </p>
);
