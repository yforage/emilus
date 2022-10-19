import React, { useState } from 'react';
import { Card } from 'antd';

const { Meta } = Card;

const ItemCard = ({ img, title, onClick }) => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoaded = () => setIsLoading(false);

  return (
    <Card
      loading={isLoading}
      hoverable
      cover={<img onLoad={handleLoaded} src={img} alt="example" />} style={{ width: 120, textAlign: 'center' }}
      onClick={onClick}
    >
      <Meta description={title} />
    </Card>
  )
}

export default ItemCard;