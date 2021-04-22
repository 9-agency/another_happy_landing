export default ({ children }: { children?: React.ReactNode }) => (
  <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
    <div style={{ width: "100%", maxWidth: 820, margin: "0px 20px" }}>
      {children}
    </div>
  </div>
);
