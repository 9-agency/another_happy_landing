export default ({ children, className }: { children?: React.ReactNode, className?: string }) => (
  <div style={{ display: "flex", justifyContent: "center", width: "100%" }} {...{ className }}>
    <div style={{ width: "100%", maxWidth: 820, margin: "0px 20px" }}>
      {children}
    </div>
  </div>
);
