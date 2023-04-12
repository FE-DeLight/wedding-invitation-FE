import React, { useState } from 'react';
import * as G from '@/styles/globals';
import { Radio, RadioGroup, FormControlLabel, Divider, TextField, Button, Checkbox, Box } from '@mui/material';
import Map from '@/components/Map';
import axios from 'axios';
import AddressSearchModal from '@/components/Modal/AddressSearchModal';

export default function WeddingHallWrite() {
  const [visible, setVisible] = useState(false); // 우편번호 컴포넌트의 노출여부 상태
  const [addressInfo, setAddressInfo] = useState(); // 웨딩홀 주소
  const [coordinate, setCoordinate] = useState({
    lat: 37.544641605,
    lng: 127.055896738,
  }); // 웨딩홀 좌표
  const [selectedValue, setSelectedValue] = useState('naverMap');
  const [showMap, setShowMap] = useState(false); // 지도 표시 여부 상태

  const handleSearchButton = () => {
    setVisible(true);
    setShowMap(true);
  };

  const handleSelectedValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };

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
          <FormControlLabel
            value="naverMap"
            control={<Radio checked={selectedValue === 'naverMap'} onChange={handleSelectedValueChange} />}
            label="네이버 지도"
          />
          <FormControlLabel
            value="map"
            control={<Radio checked={selectedValue === 'map'} onChange={handleSelectedValueChange} />}
            label="약도"
          />
        </RadioGroup>
      </G.Row>
      <Divider />
      <G.Row>
        {selectedValue === 'naverMap' ? <G.ColTitle>지도</G.ColTitle> : <G.ColTitle>약도</G.ColTitle>}
        {selectedValue === 'naverMap' ? (
          <Map coordinate={coordinate} showMap={showMap} />
        ) : (
          <div>약도들어가는 자리</div>
        )}
      </G.Row>

      <Divider />

      <G.Row>
        <G.ColTitle>주소</G.ColTitle>
        <Box display="flex" alignItems="center" width="100%">
          <TextField variant="outlined" placeholder="먼저 주소 검색을 해주세요." value={addressInfo} sx={{ flex: 4 }} />
          <Button variant="outlined" onClick={handleSearchButton} sx={{ flex: 1 }}>
            주소 검색
          </Button>
        </Box>
        {visible && (
          <AddressSearchModal visible={visible} setVisible={setVisible} handleAddressSearch={handleAddressSearch} />
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
