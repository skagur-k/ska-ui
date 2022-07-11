import React from "react"

interface ResponsiveProps {
  direction?: Pick<React.CSSProperties, 'direction'>
  align?: Pick<React.CSSProperties, 'alignItems'> //'start' | 'end' | 'center' | 'baseline' | 'stretch'
  justify?: Pick<React.CSSProperties, 'justifyContent'> //'start' | 'end' | 'center' | 'between' | 'around' | evely
  gap?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18  
  flex?: string|number
}

interface GridProps extends DefaultProps {
  as?: React.ElementType
  gap?: ResponsiveProps["gap"]
}

type Grid = JSX.Element

export { Grid, GridProps }
