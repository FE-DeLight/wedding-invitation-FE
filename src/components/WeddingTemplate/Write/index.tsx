import React, { useState } from 'react';
import * as G from '@/styles/globals';
import Image from 'next/image';
import styled from '@emotion/styled';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useDispatch, useSelector } from 'react-redux';
import { colorBorderChange, colorChange, colorTextChange, colorThemeChange, typeChange } from '@/store/templateSlice';
import TuneIcon from '@mui/icons-material/Tune';
import { Popover } from '@mui/material';
import { MuiColorInput } from 'mui-color-input';
import 'swiper/css';

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
  .typeSwiper {
    .swiper-slide {
      width: 30%;
      padding: 20px;
      background-color: #fff;
      border-radius: 10px;
      text-align: center;
      cursor: pointer;
      border: 1px solid #ddd;
      img {
        width: 100%;
        height: auto;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
      }
      span {
        display: block;
        margin-top: 15px;
      }
    }
  }
`;
const ColorContents = styled.div`
  display: flex;
  gap: 20px;
  width: 100%;
  .colorSwiper {
    width: calc(100% - 100px);
    .swiper-slide {
      width: 90px;
      text-align: center;
      opacity: 0.5;
      cursor: pointer;
      &.active {
        opacity: 1;
        .text {
          font-weight: 700;
        }
      }
    }
  }
`;
const ColorItem = styled.div`
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
`;
const UserEditColor = styled.div`
  position: relative;
  text-align: right;
  &:after {
    position: absolute;
    top: 0;
    left: 0;
    width: 1px;
    height: 100%;
    background-color: #ccc;
    content: '';
  }
  button {
    width: 90px;
  }
  .colorBox {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .text {
    color: #666;
  }
`;

const Dropdown = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px 20px;
  .item {
    margin-top: 15px;
    padding-top: 15px;
    border-top: 1px solid #eee;
    &:first-child {
      margin-top: 0;
      padding-top: 0;
      border-top: none;
    }
    .text {
      display: flex;
      align-items: center;
      margin-bottom: 10px;
      .title {
        margin-right: 10px;
        font-size: 16px;
      }
      .desc {
        color: #777;
      }
    }
    .MuiFormControl-root {
      width: 100%;
    }
  }
  .MuiInputBase-root {
    height: 30px;
    padding: 0;
  }
  .MuiColorInput-Button {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
  }
  input[type='text'] {
    position: absolute;
    inset: 0;
    height: 100%;
    margin: 0;
    padding: 0;
    pointer-events: none;
    color: #fff;
    text-shadow: 0 0 2px #333;
    text-align: center;
  }
`;

export default function TemplateWrite({ color, type }: Props) {
  const dispatch = useDispatch();

  const [activeType, setActiveType] = useState(0);
  const handleTypeActive = (index: any, value: string) => {
    setActiveType(index);
    dispatch(typeChange({ type: value }));
  };

  const [activeColor, setActiveColor] = useState(0);

  const templateTextColorSelect = useSelector((state: any) => {
    return state.template.textColor;
  });
  const templateBorderColorSelect = useSelector((state: any) => {
    return state.template.BorderColor;
  });
  const templateThemeColorSelect = useSelector((state: any) => {
    return state.template.themeColor;
  });
  const [templateColorText, setTemplateColorText] = useState(templateTextColorSelect);
  const [templateColorBorder, setTemplateColorBorder] = useState(templateBorderColorSelect);
  const [templateColorTheme, setTemplateColorTheme] = useState(templateThemeColorSelect);
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const handleColorActive = (index: any, selectColor: string) => {
    setActiveColor(index);
    setTemplateColorText(selectColor);
    setTemplateColorBorder(selectColor);
    setTemplateColorTheme(selectColor);

    dispatch(
      colorChange({
        color: selectColor,
        textColor: selectColor,
        BorderColor: selectColor,
        themeColor: selectColor,
      }),
    );
  };
  const handleColorPickerText = (colorPick: any) => {
    setTemplateColorText(colorPick);
    dispatch(
      colorTextChange({
        textColor: colorPick,
      }),
    );
  };
  const handleColorPickerBorder = (colorPick: any) => {
    setTemplateColorBorder(colorPick);
    dispatch(
      colorBorderChange({
        BorderColor: colorPick,
      }),
    );
  };
  const handleColorPickerTheme = (colorPick: any) => {
    setTemplateColorTheme(colorPick);
    dispatch(
      colorThemeChange({
        themeColor: colorPick,
      }),
    );
  };

  return (
    <G.RowWrap>
      <G.Row>
        <G.ColTitle>타입</G.ColTitle>
        <G.ColContent>
          <TypeContents>
            <Swiper slidesPerView="auto" spaceBetween={20} className="typeSwiper">
              {type.map((item: any, index: number) => {
                return (
                  <SwiperSlide
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
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </TypeContents>
        </G.ColContent>
      </G.Row>
      <G.Row>
        <G.ColTitle>색상</G.ColTitle>
        <G.ColContent>
          <ColorContents>
            <Swiper slidesPerView="auto" spaceBetween={10} className="colorSwiper">
              {color.map((item: any, index: number) => {
                return (
                  <SwiperSlide
                    className={index === activeColor ? 'active' : ''}
                    onClick={() => handleColorActive(index, item.color)}
                    key={item.id}
                  >
                    <ColorItem>
                      <div className="colorBox" style={{ background: item.color }} />
                      <div className="text">{item.value}</div>
                    </ColorItem>
                  </SwiperSlide>
                );
              })}
            </Swiper>
            <UserEditColor>
              <button type="button" aria-describedby={id} onClick={handleClick}>
                <ColorItem>
                  <div className="colorBox ">
                    <TuneIcon />
                  </div>
                  <div className="text">사용자 설정</div>
                </ColorItem>
              </button>
              <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'right',
                }}
              >
                <Dropdown>
                  <div className="item">
                    <div className="text">
                      <div className="title">메인 텍스트</div>
                      <div className="desc">메인 텍스트의 색상을 변경합니다.</div>
                    </div>
                    <MuiColorInput value={templateColorText} onChange={handleColorPickerText} />
                  </div>
                  <div className="item">
                    <div className="text">
                      <div className="title">메인 테두리</div>
                      <div className="desc">메인 테두리의 색상을 변경합니다.</div>
                    </div>
                    <MuiColorInput value={templateColorBorder} onChange={handleColorPickerBorder} />
                  </div>
                  <div className="item">
                    <div className="text">
                      <div className="title">테마 색상</div>
                      <div className="desc">테마의 색상을 변경합니다.</div>
                    </div>
                    <MuiColorInput value={templateColorTheme} onChange={handleColorPickerTheme} />
                  </div>
                </Dropdown>
              </Popover>
            </UserEditColor>
          </ColorContents>
        </G.ColContent>
      </G.Row>
    </G.RowWrap>
  );
}
