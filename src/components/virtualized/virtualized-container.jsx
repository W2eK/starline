import { FixedSizeList } from 'react-window';
import AutoSizer from 'react-virtualized-auto-sizer';

function Virtualized({ count, data, children }) {
  return (
    <AutoSizer style={{ height: '50vh' }}>
      {({ height, width }) => (
        <FixedSizeList
          itemData={data}
          height={height}
          itemCount={count}
          overscanCount={5}
          itemSize={64}
          width={width}
        >
          {children}
        </FixedSizeList>
      )}
    </AutoSizer>
  );
}

export default Virtualized;
