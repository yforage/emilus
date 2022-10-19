import React, { useRef, useState } from 'react';
import { Card, Switch, Space } from 'antd';
import DraggableComponent from './DraggableComponent';
import { useDrop } from 'react-dnd';

const Planner = ({ images, updateImage }) => {
  const [isGrid, setIsGrid] = useState(false);
  const ref = useRef();
  const [, drop] = useDrop({
    accept: 'planner',
    drop: (item, monitor) => {
      const itemPosition = monitor.getSourceClientOffset();
      if (itemPosition && ref.current) {
        const containerPosition = ref.current.getBoundingClientRect();
        const x = itemPosition.x - containerPosition.x; 
        const y = itemPosition.y - containerPosition.y;
        if (x < 0 || y < 0) return;
        updateImage(item.index, { x, y });
      }
    }
  });

  const handleGrid = () => setIsGrid((prev) => !prev);

  return (
      <Card
        title="Карта заведения"
        extra={<Space>Сетка<Switch onChange={handleGrid} /></Space>}
        headStyle={{ color: '#FFFFFF' }}
        bodyStyle={{ height: '500px' }}
        style={{ backgroundColor: '#1c1c1c' }}
      >
        <div
          ref={ref}
          style={{
            position: 'relative',
            width: '100%',
            height: '100%',
            border: '1px solid #2c2c2c',
            ...(isGrid && {
              backgroundImage: 'linear-gradient(to right, #2c2c2c 1px, transparent 1px), linear-gradient(to bottom, #2c2c2c 1px, transparent 1px)',
              backgroundSize: '20px 20px'
            })
          }}
        >
          <div ref={drop} style={{ width: '100%', height: '100%' }}>
            {images.map(({ id, x, y }, index) =>
              <DraggableComponent key={id} index={index} x={x} y={y}>
                <img src={id} width={60} height={60} alt="" />
              </DraggableComponent>
            )}
          </div>
        </div>
      </Card>
    )
}

export default Planner;