import styled from '@emotion/styled';


export const MoreOptionWrap = styled.div`
  display: flex;
  flex-direction: column;
  padding: 48px 0 24px;
`;

export const MoreOptionBody = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  color: #000;
  select {
    background: transparent;
  }
  label {
    color: #000;
  }
`;

export const SelectWrap = styled.div`
  display: flex;
  align-items: center;
  label {
    width: 5rem;
    flex-shrink: 0;
  }
  div {
    width: 100%;
  }
`;

export const Select = styled.select`
  width: 100%;
  height: 42px;
`;

export const SelectGrop = styled.select`
  width: 50%;
  height: 42px;
  margin-right: 8px;
  &:last-child {
    margin-right: 0;
  }
`;

// 공통으로 사용하는
export const Divider = styled.div`
  width: 100%;
  padding: 12px 0;
  margin: 12px 0;
  hr {
    border: 1px solid rgb(229, 229, 229);
  }
`;