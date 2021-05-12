export default ({ children, className, style }: { children?: React.ReactNode, className?: string, style?: React.CSSProperties }) => (
  <div style={{ display: "flex", justifyContent: "center", width: "100%"}} {...{ className }}>
    <div style={{ width: "100%", maxWidth: 1000, margin: "0px 20px" , ...style }}>
      {children}
    </div>
  </div>
);
