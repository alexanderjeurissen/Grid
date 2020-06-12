import styled  from "styled-components";
import { layout, grid, compose } from "styled-system";
import shouldForwardProp from "@styled-system/should-forward-prop";

// NOTE: Grid Display types
type GRID = 'grid';
type INLINE_GRID = 'inline-grid';

type GRID_GAP = number | number[];

interface GridProps {
  display?: GRID | INLINE_GRID;
  gridGap?: GRID_GAP
  gridColumnGap?: GRID_GAP
  gridRowGap?: GRID_GAP
  gridColumn?: number;
  gridRow?: number;
  gridAutoFlow?: string;
  gridAutoColumns?: string;
  gridAutoRows?: string;
  gridTemplateColumns?: string;
  gridTemplateRows?: string;
  gridTemplateAreas?: string;
  gridArea?: string
  children: any;
  style?: object;
  className?: string;
  height?: string | number;
  minHeight?: string | number;
  maxHeight?: string | number;
  width?: string | number;
  minWidth?: string | number;
  maxWidth?: string | number;
}

const Grid = styled.div.withConfig<GridProps>({ shouldForwardProp })(
  {
    display: 'grid',
    minWidth: 0,
    minHeight: 0
  },
  compose(layout, grid)
);

Grid.displayName = 'Grid';

export default Grid;
