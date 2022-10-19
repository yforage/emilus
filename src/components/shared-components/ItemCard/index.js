import React, { useState } from 'react';
import { Card, Tooltip } from 'antd';

const { Meta } = Card;

const ItemCard = ({ img, title, onClick }) => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoaded = () => setIsLoading(false);

  return (
    <Tooltip title={title}>
      <Card
        loading={isLoading}
        hoverable
        cover={<img height={100} style={{ objectFit: 'contain' }} onLoad={handleLoaded} src={img} alt="example" />}
        onClick={onClick}
        style={{ width: 140, height: 200, overflow: 'hidden' }}
      >
        <Meta description={title} className="text-center" />
      </Card>
    </Tooltip>
  )
}

export default ItemCard;