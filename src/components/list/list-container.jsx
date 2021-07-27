// @ts-nocheck
import { useSelector, useDispatch } from 'react-redux';

import { List, Paper, Typography, Divider } from '@material-ui/core';
import { FixedSizeList } from 'react-window';
import AutoSizer from 'react-virtualized-auto-sizer';

import Item from './list-item';

import { freezeMap, unfreezeMap } from '../../store/poi';

function renderRow(props) {
  const { index, style, data } = props;
  const { list, color, icon, category } = data;
  const item = list[index];
  return (
    <Item
      key={item.id}
      style={style}
      color={color}
      icon={icon}
      category={category}
      {...item}
    />
  );
}

function PoiList() {
  const {
    plural,
    icon,
    color,
    name: category
  } = useSelector(({ poi }) => poi.category) || {};
  const dispatch = useDispatch();
  const list = useSelector(({ poi }) => poi.visible[category]);
  return (
    <Paper
      sx={{ padding: 2, flex: 1 }}
      onMouseEnter={() => dispatch(freezeMap())}
      onMouseLeave={() => dispatch(unfreezeMap())}
    >
      <Typography variant="subtitle1">
        {list ? `Local ${plural}` : 'Not found'}
      </Typography>
      {list ? (
        <>
          <Divider sx={{ marginTop: 1 }} />
          <List dense sx={{ marginRight: -2 }}>
            <AutoSizer style={{ height: '50vh' }}>
              {({ height, width }) => (
                <FixedSizeList
                  itemData={{ list, icon, color, category }}
                  height={height}
                  itemCount={list.length}
                  overscanCount={5}
                  itemSize={64}
                  width={width}
                >
                  {renderRow}
                </FixedSizeList>
              )}
            </AutoSizer>
          </List>
        </>
      ) : null}
    </Paper>
  );
}

export default PoiList;
