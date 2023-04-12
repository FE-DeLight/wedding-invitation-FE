import React, { useState } from 'react';
import axios from 'axios';
import * as G from '@/styles/globals';
import { Radio, RadioGroup, FormControlLabel, Divider, TextField, Button, Checkbox, Box } from '@mui/material';
import Map from '@/components/Map';
import AddressSearchModal from '@/components/Modal/AddressSearchModal';
import { useDispatch, useSelector } from 'react-redux';
import { setAddress, setDetailAddress, setShowMap, setCoordinate, setContact } from '@/store/addressSlice';

export default function WeddingHallWrite() {
  const [visible, setVisible] = useState(false); // 우편번호 컴포넌트의 노출여부 상태
  const [selectedValue, setSelectedValue] = useState('naverMap');
  const dispatch = useDispatch();
  const address = useSelector((state: any) => state.address.address);
  const contact = useSelector((state: any) => state.address.contact);

  const handleSearchButton = () => {
    setVisible(true);
    dispatch(
      setShowMap({
        showMap: true,
      }),
    );
  };

  const handleSelectedValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };

  const handleAddressSearch = async (data: any) => {
    dispatch(
      setAddress({
        address: data.address,
      }),
    );

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
        dispatch(
          setCoordinate({
            coordinate: {
              lat: response.data.addresses[0].y,
              lng: response.data.addresses[0].x,
            },
          }),
        );
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleDetailAddress = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(
      setDetailAddress({
        detailAddress: event.target.value,
      }),
    );
  };

  const handleContact = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    dispatch(
      setContact({
        contact: {
          ...contact,
          [name]: value,
        },
      }),
    );
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
        {selectedValue === 'naverMap' ? <Map /> : <div>약도들어가는 자리</div>}
      </G.Row>

      <Divider />

      <G.Row>
        <G.ColTitle>주소</G.ColTitle>
        <Box display="flex" alignItems="center" width="100%">
          <TextField variant="outlined" placeholder="먼저 주소 검색을 해주세요." value={address} sx={{ flex: 4 }} />
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
        <TextField variant="outlined" placeholder="상세 주소" onChange={handleDetailAddress} />
      </G.Row>
      <G.Row>
        <G.ColTitle>연락처</G.ColTitle>
        <TextField variant="outlined" placeholder="담당자" name="person" onChange={handleContact} />
        <TextField variant="outlined" placeholder="연락처" name="phone" onChange={handleContact} />
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
