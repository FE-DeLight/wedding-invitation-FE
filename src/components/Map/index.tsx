import React, { useEffect, useRef } from 'react';
import styled from '@emotion/styled';
import { useSelector } from 'react-redux';

declare const naver: any; // 네이버 지도 API 전역 객체

const NaverMap = styled.div`
  width: 100%;
  height: 384px;
  transition: filter 0.5s ease-in-out;
`;

export default function Map() {
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

    mapElement.style.filter = showMap ? '' : 'blur(3px)';
  }, [coordinate]);

  return <NaverMap id="map" ref={mapRef} style={{ width: '100%', height: '300px' }} />;
}
