import styled from '@emotion/styled';
import React from 'react';
import { useSelector } from 'react-redux';

interface WrapProps {
  textAlign?: string;
}

const Wrap = styled.div<WrapProps>`
  display: flex;
  flex-direction: column;
  gap: 30px;
  text-align: ${(props) => props.textAlign};
`;
const Item = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const Title = styled.div`
  font-size: 16px;
  font-weight: bold;
`;
const Desc = styled.div`
  font-size: 14px;
`;

export default function WeddingDirectionsPreview() {
  const directionsTypeSelect = useSelector((state: any) => {
    return state.directions.type;
  });

  const directionsAlignSelect = useSelector((state: any) => {
    return state.directions.align;
  });

  return (
    <Wrap textAlign={directionsAlignSelect}>
      {directionsTypeSelect.map((item: any) => (
        <Item key={item?.id}>
          <Title>{item.title}</Title>
          <Desc>{item.desc}</Desc>
        </Item>
      ))}
    </Wrap>
  );
}
