import React, { useEffect } from 'react';

declare const naver: any; // 네이버 지도 API 전역 객체

export default function Map({ coordinate }: any) {
  useEffect(() => {
    const initMap = () => {
      const map = new naver.maps.Map('map', {
        center: new naver.maps.LatLng(addressInfo.latitude, addressInfo.longitude),
        zoom: 13,
        zoomControl: true,
        zoomControlOptions: {
          style: naver.maps.ZoomControlStyle.SMALL,
          position: naver.maps.Position.TOP_RIGHT,
        },
        scaleControl: false,
        logoControl: false,
        mapDataControl: false,
        mapTypeControl: false,
      });

      const marker = new naver.maps.Marker({
        position: new naver.maps.LatLng(addressInfo.latitude, addressInfo.longitude),
        map: map,
        icon: {
          url: './img/pin_default.png',
          size: new naver.maps.Size(22, 35),
          origin: new naver.maps.Point(0, 0),
          anchor: new naver.maps.Point(11, 35),
        },
      });
    };

    initMap();
  }, [addressInfo]);

  return <div id="map" style={{ width: '100%', height: '300px' }} />;
}
