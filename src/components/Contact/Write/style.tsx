import styled from '@emotion/styled';

// 공통으로 사용하는
export const Divider = styled.div`
  width: 100%;
  padding: 12px 0;
  margin: 12px 0;
  hr {
    border: 1px solid rgb(229, 229, 229);
  }
`;

export const Button = styled.button`
  width: 118px;
  padding: 5px 12px;
  border-radius: 25px;
  border: 1px solid #525252;
  background-color: #fff;
  margin: auto;
  
  span {
    margin-left: 5px;
    font-size: 12px;
  }
`;

export const ColWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  
  > .MuiSvgIcon-root {
    font-size: 16px;
    margin-left: 10px;
  }
`;

export const NoContact = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 152px;
    color: #a3a3a3;
    background-color: #f5f5f5;
  
  > .MuiSvgIcon-root {
    margin-bottom: 8px;
  }
`;

export const ColContent = styled.div`
  width: 100%;
`;

export const GroupRowItem = styled.div`
  display: flex;
  gap: 10px;
  > :last-child {
    min-width: 140px;
  }
`;