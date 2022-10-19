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
      cover={<img onLoad={handleLoaded} src={img} alt="example" />}
      onClick={onClick}
      style={{ width: 140 }}
    >
      <Meta description={title} className="text-center" />
    </Card>
  )
}

export default ItemCard;