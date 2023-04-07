import styled from '@emotion/styled';

export const SelectWrap = styled.div`
  width: 100%;
  position: relative;
  &::after {
    position: absolute;
    top: 50%;
    transform: translateY(-50%) rotate(-45deg);
    right: 17px;
    width: 10px;
    height: 2px;
    background-color: #333;
    content: '';
  }
  &::before {
    position: absolute;
    top: 50%;
    right: 23px;
    transform: translateY(-50%) rotate(45deg);
    width: 10px;
    height: 2px;
    background-color: #333;
    content: '';
  }
`;
export const Select = styled.select``;
