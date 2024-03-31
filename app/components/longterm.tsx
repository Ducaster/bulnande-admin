import React from "react";
import { Button, Card, Flex, Typography } from "antd";

// 이미지 및 카드 스타일
const cardStyle: React.CSSProperties = {
  width: 620,
};

const imgStyle: React.CSSProperties = {
  display: "block",
  width: 273,
};

// LongCard 컴포넌트
const LongCard = () => {
  return (
    <Card
      hoverable
      style={cardStyle}
      styles={{ body: { padding: 0, overflow: "hidden" } }}
    >
      {/* 이미지와 텍스트 */}
      <Flex justify="space-between">
        <img
          alt="antd logo"
          src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
          style={imgStyle}
        />
        <Flex
          vertical
          align="flex-end"
          justify="space-between"
          style={{ padding: 32 }}
        >
          {/* 텍스트 */}
          <Typography.Title level={3}>
            “antd is an enterprise-class UI design language and React UI
            library.”
          </Typography.Title>
          {/* 버튼 */}
          <Button
            type="primary"
            href="https://ant.design"
            target="_blank"
            rel="noopener noreferrer"
          >
            Get Started
          </Button>
        </Flex>
      </Flex>
    </Card>
  );
};

export default LongCard;
