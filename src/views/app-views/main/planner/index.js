import React, { useState } from 'react';
import { Row, Col, Tabs, Space, Button, Upload } from 'antd';
import { plannerTabsData } from './PlannerTabsData';
import ItemCard from './ItemCard';
import Planner from './Planner';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { TouchBackend } from 'react-dnd-touch-backend';
import utils from 'utils';

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

  const items = plannerTabsData.map((tab, index) => ({
    label: tab.title,
    key: index,
    children: <Space>
      {tab.content.map(({ img, title }) => <ItemCard onClick={() => handleAddImage(img)} key={img} img={img} title={title} />)}
      </Space>
  }));

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
        <Row gutter={16}>
          <Tabs className='col-6' defaultActiveKey='1' items={items} />
        </Row>
        <Row gutter={16}>
          <Space size="middle">
            <Button type="primary" onClick={handleDownload}>Save Plan</Button>
            <Upload accept='application/JSON' beforeUpload={handleUpload}>
              <Button onClick={handleUpload}>Upload Plan</Button>
            </Upload>
          </Space>
        </Row>
      </Col>
      <Col xs={24} sm={12} md={12} lg={12}>
        <DndProvider backend={isTouch ? TouchBackend : HTML5Backend}>
          <Planner images={addedImages} updateImage={setImageCoords} />
        </DndProvider>
      </Col>
    </Row>
  )
}

export default PlannerPage;