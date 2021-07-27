import { List } from '@material-ui/core';
import Virtualized from '../virtualized';
import Item from '../list/list-item';
import categories from '../../categories';

function renderRow(props) {
  const { index, style, data } = props;
  const { maki, ...item } = data[index];
  const { color, icon } = categories[maki];
  return (
    <Item
      key={item.id}
      style={style}
      color={color}
      icon={icon}
      category={maki}
      {...item}
    />
  );
}

function ResultList({ found }) {
  const data = Object.values(found).reduce((prev, next) => [...prev, ...next]);
  return (
    <List dense sx={{ marginRight: -2 }}>
      <Virtualized data={data} count={data.length}>
        {renderRow}
      </Virtualized>
    </List>
  );
}

export default ResultList;
