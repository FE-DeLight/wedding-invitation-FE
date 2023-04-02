import React, { useState } from 'react';
import * as G from '@/styles/globals';
import Image from 'next/image';
import styled from '@emotion/styled';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useDispatch } from 'react-redux';
import { colorChange, typeChange } from '@/store/templateSlice';

type Props = {
  // type: Array<object>;
  type: any;
  color: Array<object>;
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
const ColorContents = styled.div`
  width: 100%;
  .colorSwiper {
    .swiper-slide {
      width: 90px;
      text-align: center;
      opacity: 0.5;
      cursor: pointer;
      &.active {
        opacity: 1;
        .colorBox {
          &:after: {
          }
        }
      }
      .colorBox {
        position: relative;
        width: 40px;
        height: 40px;
        margin: 0 auto;
        border-radius: 50%;
        border: 1px solid #ddd;
        &::after {
          position: absolute;
          z-index: 1;
          inset: 1px;
          border: 2px solid #fff;
          border-radius: 50%;
          content: '';
        }
      }
      .text {
        margin-top: 10px;
      }
    }
  }
`;

export default function TemplateWrite(props: Props) {
  const dispatch = useDispatch();

  const [activeType, setActiveType] = useState(0);
  const handleTypeActive = (index: any, value: string) => {
    setActiveType(index);
    dispatch(typeChange({ type: value }));
  };

  const [activeColor, setActiveColor] = useState(0);
  const handleColorActive = (index: any, color: string) => {
    setActiveColor(index);
    dispatch(colorChange({ color }));
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
                  onClick={() => handleTypeActive(index, item.value)}
                  className={index === activeType ? 'active' : ''}
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
            <Swiper slidesPerView="auto" spaceBetween={10} className="colorSwiper">
              {props?.color.map((item: any, index: number) => {
                return (
                  <SwiperSlide
                    className={index === activeColor ? 'active' : ''}
                    onClick={() => handleColorActive(index, item.color)}
                    key={item.id}
                  >
                    <div className="colorBox" style={{ background: item.color }} />
                    <div className="text">{item.value}</div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </ColorContents>
        </G.ColContent>
      </G.Row>
    </G.RowWrap>
  );
}
