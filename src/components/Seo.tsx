import React from 'react';
import Head from 'next/head';

interface SeoProps {
  title: string;
}

export default function Seo({ title }: SeoProps) {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      {/*  문자 코드 종류 */}
      <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
      {/* 홈페이지 주제 */}
      <meta httpEquiv="Subject" content="셀프 청첩장 생성 페이지" />
      {/* 제목 */}
      <meta httpEquiv="Title" content="셀프 청첩장 생성 페이지" />
      {/* 제작자 */}
      <meta httpEquiv="Author" content="FE-DeLight" />
      {/* 배포자 */}
      <meta httpEquiv="Distribution" content="FE-DeLight" />
      {/* 검색 엔진에 의해 검색되는 단어 지정 */}
      <meta name="Keywords" content="셀프 청첩장, 청첩장 만들기, 청첩장, 결혼식, 결혼" />

      {/* 캐쉬 설정 */}
      <meta httpEquiv="Cache-Control" content="no-cache" />
      <meta httpEquiv="Pragma" content="no-cache" />

      {/* 날짜(제작일) */}
      <meta name="Date" content="2023-03" />

      {/* 검색엔진 노출 여부 설정 (수집 대상으로 설정) */}
      <meta name="Robots" content="Login" />

      <title>{`${title} | wedding invitation`}</title>
    </Head>
  );
}
