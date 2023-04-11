import React, { useState } from 'react';
import * as G from '@/styles/globals';
import * as S from '@/components/WeddingHall/Write/style';
import {
  Radio,
  RadioGroup,
  FormControlLabel,
  Divider,
  TextField,
  Button,
  Checkbox,
  Modal,
  IconButton,
  Box,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import Map from '@/components/Map';
import DaumPostcode from 'react-daum-postcode';
import axios from 'axios';

export default function WeddingHallWrite() {
  const [visible, setVisible] = useState(false); // 우편번호 컴포넌트의 노출여부 상태
  const [addressInfo, setAddressInfo] = useState(); // 웨딩홀 주소
  const [coordinate, setCoordinate] = useState({
    lat: null,
    lng: null,
  }); // 웨딩홀 좌표

  const handleAddressSearch = async (data: any) => {
    setAddressInfo(data.address); // 주소 추출
    setVisible(false);

    // 주소를 좌표로 변환
    axios
      .get('/api/navermap/geocode', {
        params: {
          query: data.address,
        },
        headers: {
          'X-NCP-APIGW-API-KEY-ID': process.env.NEXT_PUBLIC_NAVER_MAP_CLIENT_ID,
          'X-NCP-APIGW-API-KEY': process.env.NEXT_PUBLIC_NAVER_MAP_CLIENT_SECRET,
        },
      })
      .then((response) => {
        setCoordinate({
          lat: response.data.addresses[0].y,
          lng: response.data.addresses[0].x,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleShowDetail = () => {};

  return (
    <div>
      <G.Row>
        <G.ColTitle>타입</G.ColTitle>
        <RadioGroup
          row
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="female"
          name="radio-buttons-group"
        >
          <FormControlLabel value="naverMap" control={<Radio />} label="네이버 지도" />
          <FormControlLabel value="map" control={<Radio />} label="약도" />
        </RadioGroup>
      </G.Row>
      <Divider />
      <G.Row>
        <G.ColTitle>지도</G.ColTitle>
        {/*<Map coordinate={coordinate} />*/}
      </G.Row>
      <Divider />

      <G.Row>
        <G.ColTitle>주소</G.ColTitle>
        <Box display="flex" alignItems="center" width="100%">
          <TextField variant="outlined" placeholder="먼저 주소 검색을 해주세요." value={addressInfo} sx={{ flex: 4 }} />
          <Button variant="outlined" onClick={() => setVisible(true)} sx={{ flex: 1 }}>
            주소 검색
          </Button>
        </Box>

        {/* 카카오 주소 검색 모달 */}
        {visible && (
          <Modal
            open={visible}
            onClose={() => setVisible(false)}
            sx={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              '& .MuiPaper-root': {
                width: '80%',
                maxWidth: 600,
                overflow: 'scroll',
              },
            }}
          >
            <S.Modal>
              <S.ModalHead>
                <S.ModalHeadTitle>주소 검색</S.ModalHeadTitle>
                <IconButton onClick={() => setVisible(false)}>
                  <CloseIcon sx={{ fontSize: 18 }} />
                </IconButton>
              </S.ModalHead>
              <S.ModalBody>
                <DaumPostcode onComplete={handleAddressSearch} className="daum-postcode" />
              </S.ModalBody>
            </S.Modal>
          </Modal>
        )}
      </G.Row>

      <G.Row>
        <G.ColTitle>상세 주소</G.ColTitle>
        <TextField variant="outlined" placeholder="상세 주소" />
      </G.Row>
      <G.Row>
        <G.ColTitle>연락처</G.ColTitle>
        <TextField variant="outlined" placeholder="담당자" />
        <TextField variant="outlined" placeholder="연락처" />
      </G.Row>
      <Divider />
      <G.Row>
        <G.ColTitle>자세히 보기</G.ColTitle>
        <FormControlLabel
          control={<Checkbox name="seeDetail" onChange={handleShowDetail} />}
          label="※ [지도 자세히 보기] 버튼을 숨기고 지도 클릭시 네이버 지도로 이동합니다."
        />
      </G.Row>
    </div>
  );
}
