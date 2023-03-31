import React, { useState } from 'react';
import * as G from '@/styles/globals';
import Image from 'next/image';
import styled from '@emotion/styled';
import { Swiper, SwiperSlide } from 'swiper/react';

type Props = {
  // type: Array<object>;
  type: any;
  color: Array<object>;
  setTemplateTypeSelect: any;
};

const TypeContents = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 15px;
  width: 100%;
`;
const TypeButton = styled.button`
  max-width: 200px;
  width: 100%;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid #ddd;
  background-color: #fff;
  opacity: 0.4;
  transition: all 0.3s;
  &.active {
    opacity: 1;
  }
  img {
    width: 100%;
    height: auto;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  }
  span {
    display: flex;
    justify-content: center;
    padding: 15px 0 0 0;
    color: #333;
  }
`;
const ColorContents = styled.div``;

export default function TemplateWrite(props: Props) {
  const [activeButton, setActiveButton] = useState(0);

  const handleClick = (index: any, value: string) => {
    setActiveButton(index);
    props?.setTemplateTypeSelect(value);
  };
  return (
    <G.RowWrap>
      <G.Row>
        <G.ColTitle>타입</G.ColTitle>
        <G.ColContent>
          <TypeContents>
            {props?.type.map((item: any, index: number) => {
              return (
                <TypeButton
                  type="button"
                  key={`templateType-${item.id}`}
                  onClick={() => handleClick(index, item.value)}
                  className={index === activeButton ? 'active' : ''}
                >
                  <Image
                    src={`/img/theme_sample_0${index}.png`}
                    alt={`템플릿 ${item.value} 타입`}
                    width={256}
                    height={445}
                    priority
                  />
                  <span>{item.value}</span>
                </TypeButton>
              );
            })}
          </TypeContents>
        </G.ColContent>
      </G.Row>
      <G.Row>
        <G.ColTitle>색상</G.ColTitle>
        <G.ColContent>
          <ColorContents>
            <Swiper slidesPerView={3} spaceBetween={30} className="mySwiper">
              <SwiperSlide>Slide 1</SwiperSlide>
              <SwiperSlide>Slide 2</SwiperSlide>
              <SwiperSlide>Slide 3</SwiperSlide>
              <SwiperSlide>Slide 4</SwiperSlide>
              <SwiperSlide>Slide 5</SwiperSlide>
              <SwiperSlide>Slide 6</SwiperSlide>
              <SwiperSlide>Slide 7</SwiperSlide>
              <SwiperSlide>Slide 8</SwiperSlide>
              <SwiperSlide>Slide 9</SwiperSlide>
            </Swiper>
          </ColorContents>
        </G.ColContent>
      </G.Row>
    </G.RowWrap>
  );
}
