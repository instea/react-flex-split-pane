const PaneType = {
  vertical: 'vertical',
  horizontal: 'horizontal',
};

export default PaneType;

export const paneTypeProperties = {
  [PaneType.vertical]: {
    flexDirection: 'row',
    sizeProp: 'width',
    resizeCursor: 'col-resize',
    resizerBorderBeginProp: 'borderLeft',
    resizerBorderEndProp: 'borderRight',
    resizerMargin: '0 -5px',
  },
  [PaneType.horizontal]: {
    flexDirection: 'column',
    sizeProp: 'height',
    resizeCursor: 'row-resize',
    resizerBorderBeginProp: 'borderTop',
    resizerBorderEndProp: 'borderBottom',
    resizerMargin: '-5px 0',
  },
};

