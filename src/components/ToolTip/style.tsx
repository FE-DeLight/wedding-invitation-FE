/* eslint-disable import/prefer-default-export */
import styled from '@emotion/styled';

export const TooltipWrap = styled.div`
  position: absolute;
  width: 158px;
  height: 147px;
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

  button {
    width: 100%;
    padding: 8px;
    border-bottom: 1px solid #f5f5f5;
    text-align: start;
    background-color: transparent;
  }
`;
