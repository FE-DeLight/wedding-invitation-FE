/* eslint-disable import/prefer-default-export */
import styled from '@emotion/styled';

export const TooltipWrap = styled.div`
  position: absolute;
  width: 158px;
  top: 40px;
  right: 8px;
  border: 1px solid #e5e5e5;
  border-radius: 5px;
  background-color: #fff;
`;

export const ToolListWrap = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
`;

export const List = styled.div`
  width: 100%;
  padding: 2px;
  color: #000;
  border-bottom: 1px solid #f5f5f5;

  button {
    width: 100%;
    padding: 8px;

    text-align: start;
    font-size: 12px;
    background-color: transparent;

    &:hover {
      background-color: #525252;
      border-radius: 5px;
      color: #f5f5f5;
    }
  }
`;
