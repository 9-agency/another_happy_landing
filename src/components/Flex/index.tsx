interface Props {
  column?: Boolean
  columnReverse?: Boolean
  justifyContentSpaceBetween?: Boolean
  justifyContentCenter?: Boolean
  justifyContentEnd?: Boolean
  alignItemsStart?: Boolean
  alignItemsCenter?: Boolean
  alignItemsEnd?: Boolean
  grow?: Boolean
  noShrink?: Boolean
  wrap?: Boolean
  children?: React.ReactNode
  className?: string
  style?: React.CSSProperties
  onClick?: React.MouseEventHandler<HTMLDivElement>
  onMouseEnter?: React.MouseEventHandler<HTMLDivElement>
  onMouseLeave?: React.MouseEventHandler<HTMLDivElement>
}

export default ({
  column,
  columnReverse,
  justifyContentSpaceBetween,
  justifyContentCenter,
  justifyContentEnd,
  alignItemsStart,
  alignItemsCenter,
  alignItemsEnd,
  grow,
  noShrink,
  wrap,
  children,
  className,
  style,
  onClick,
  onMouseEnter,
  onMouseLeave,
}: Props) => (
  <div
    style={{
      display: "flex",
      flexDirection:
        (column && "column") ||
        (columnReverse && "column-reverse") ||
        undefined,
      justifyContent:
        (justifyContentSpaceBetween && "space-between") ||
        (justifyContentCenter && "center") ||
        (justifyContentEnd && "flex-end") ||
        undefined,
      alignItems:
        (alignItemsStart && "flex-start") ||
        (alignItemsCenter && "center") ||
        (alignItemsEnd && "flex-end") ||
        undefined,
      flexGrow: (grow && 1) || undefined,
      flexShrink: (noShrink && 0) || undefined,
      flexWrap: wrap && "wrap",
      ...style
    }}
    {...{ children, className, onClick, onMouseEnter, onMouseLeave }}
  />
);
