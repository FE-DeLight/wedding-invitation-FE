import React, { useEffect, useRef } from 'react';
import styled from '@emotion/styled';
import { useSelector } from 'react-redux';

declare const naver: any; // 네이버 지도 API 전역 객체

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

const NaverMap = styled.div`
  width: 100%;
  height: 384px;
  transition: filter 0.5s ease-in-out;
`;

const MapBlur = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.7);
  z-index: 1;
`;

export default function Map({ handleMap }: any) {
  const showMap = useSelector((state: any) => state.address.showMap);
  const coordinate = useSelector((state: any) => state.address.coordinate);
  const mapRef = useRef(null);

  useEffect(() => {
    const mapElement = mapRef.current;

    const initMap = () => {
      const mapOptions = {
        center: new naver.maps.LatLng(coordinate.lat, coordinate.lng),
        zoom: 15,
        zoomControl: true,
        zoomControlOptions: {
          style: naver.maps.ZoomControlStyle.SMALL,
          position: naver.maps.Position.TOP_RIGHT,
        },
        scaleControl: false,
        logoControl: false,
        mapDataControl: false,
        mapTypeControl: false,
        draggable: showMap ? true : false,
        pinchZoom: showMap ? true : false,
        scrollWheel: showMap ? true : false,
        keyboardShortcuts: showMap ? true : false,
        disableDoubleTapZoom: showMap ? true : false,
        disableDoubleClickZoom: showMap ? true : false,
        disableTwoFingerTapZoom: showMap ? true : false,
        disableKineticPan: showMap ? true : false,
        tileTransition: showMap ? true : false,
      };

      const map = new naver.maps.Map(mapRef.current, mapOptions);

      const marker = new naver.maps.Marker({
        position: new naver.maps.LatLng(coordinate.lat, coordinate.lng),
        map,
        icon: {
          url: './img/pin_default.png',
          size: new naver.maps.Size(22, 35),
          origin: new naver.maps.Point(0, 0),
          anchor: new naver.maps.Point(11, 35),
        },
      });
    };

    initMap();
  }, [coordinate]);

  return (
    <Wrapper>
      {!showMap && <MapBlur />}
      <NaverMap id="map" ref={mapRef} style={{ width: '100%', height: '300px' }} onClick={handleMap} />
    </Wrapper>
  );
}
