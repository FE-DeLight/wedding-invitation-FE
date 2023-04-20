import React from 'react';
import * as S from '@/components/WeddingHall/Preview/style';
import * as G from '@/styles/globals';
import Map from '@/components/Map';
import PhoneIcon from '@mui/icons-material/Phone';

import { useSelector } from 'react-redux';

export default function WeddingHallPreview() {
  const address = useSelector((state: any) => state.address.address);
  const detailAddress = useSelector((state: any) => state.address.detailAddress);
  const contact = useSelector((state: any) => state.address.contact);
  const coordinate = useSelector((state: any) => state.address.coordinate);
  const showDetail = useSelector((state: any) => state.address.showDetail);

  const handleMap = () => {
    window.open(
      `https://map.naver.com/?x=${coordinate.lng}&y=${coordinate.lat}&query=${encodeURIComponent(address)}`,
      '_blank',
    );
  };

  return (
    <S.Container>
      <G.Title>오시는 길</G.Title>
      <S.Wrapper>
        <Map handleMap={showDetail ? null : handleMap} />
        {showDetail && <S.Detail onClick={handleMap}>지도 자세히 보기</S.Detail>}
      </S.Wrapper>
      {address && (
        <S.Address>
          <S.Text>{address}</S.Text>
          {detailAddress && <S.Text small>{detailAddress}</S.Text>}
          {contact && contact.person && contact.phone && (
            <S.CallButton>
              <PhoneIcon sx={{ fontSize: 12 }} />
              <S.Person>{contact.person}</S.Person>
            </S.CallButton>
          )}
        </S.Address>
      )}
    </S.Container>
  );
}
