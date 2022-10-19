import React, { useState, useMemo } from 'react';
import { Row, Col, Tabs, Space, Button, Upload } from 'antd';
import ItemCard from 'components/shared-components/ItemCard';
import Planner from './Planner';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { TouchBackend } from 'react-dnd-touch-backend';
import utils from 'utils';
import tabs from "assets/data/planner-tabs.data.json";

const PlannerPage = () => {
  const [addedImages, setAddedImages] = useState([]);

  const isTouch = window.ontouchstart !== undefined;

  const handleAddImage = (image) => setAddedImages((prev) => ([...prev, { id: image, x: 0, y: 0 }]));

  const setImageCoords = (index, newPosition) => {
    setAddedImages((prev) => {
      const copy = [...prev];
      copy[index] = { ...copy[index], ...newPosition };
      return copy;
    });
  };

  const items = useMemo(() => tabs.map((tab, index) => {
    console.log('items');
    return ({
      label: tab.title,
      key: index,
      children: (
        <div style={{ overflowX: 'auto' }}>
          <Space>
            {tab.content.map(({ img, title }, index) => (
              <ItemCard
                onClick={() => handleAddImage(img)}
                key={`${img}-${index}`}
                img={img}
                title={title} />)
            )}
          </Space>
        </div>
      )
    }
    );
  }), []);

  const handleDownload = () => utils.saveAsJSON(addedImages, "plan");

  const handleUpload = (file) => {
    if (!file.uid) return;

    const reader = new FileReader();
    reader.readAsText(file);
    reader.onload = (event) => {
      const json = JSON.parse(event.target.result);
      setAddedImages(json);
    }

    return false;
  };

  return (
    <Row gutter={[16, 16]}>
      <Col xs={24} sm={12} md={12} lg={12}>
          <Row gutter={[16, 16]}>
            <Tabs className='col-6' defaultActiveKey='1' items={items} />
            <Space size="middle" wrap className='flex-grow-1 justify-content-center justify-content-lg-start justify-content-xl-start '>
              <Button type="primary" onClick={handleDownload}>Скачать планировку</Button>
              <Upload accept='application/JSON' beforeUpload={handleUpload} maxCount={1}>
                <Button onClick={handleUpload}>Загрузить из файла</Button>
              </Upload>
            </Space>
          </Row>
      </Col>
      <Col xs={24} sm={12} md={12} lg={12}>
        {isTouch && (
          <DndProvider backend={TouchBackend}>
            <Planner images={addedImages} updateImage={setImageCoords} />
          </DndProvider>
        )}
        {!isTouch && (
          <DndProvider backend={HTML5Backend}>
            <Planner images={addedImages} updateImage={setImageCoords} />
          </DndProvider>
        )}
      </Col>
    </Row>
  )
}

export default PlannerPage;