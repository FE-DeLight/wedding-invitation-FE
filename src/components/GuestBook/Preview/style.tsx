import styled from '@emotion/styled';

export const InvitationWrap = styled.div`
  width: 100%;
  align-items: center;
`;

export const PrevewCardHeader = styled.div`
  height: 40px;
  padding: 32px 0;
`;

export const Title = styled.p`
  font-size: 20px;
`;

export const Content = styled.p`
  padding-top: 64px;
  font-size: 14px;
  white-space: pre-wrap;
`;

export const PrevewCardBody = styled.div`
  padding: 32px 12px 16px;
  background-color: #eee;
  margin: 0 -30px -30px;

  hr {
    border: 1px solid rgb(229, 229, 229);
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  width: 120px;
  padding: 5px 12px;
  margin-top: 16px;
  border-radius: 25px;
  border: 1px solid #525252;
  background-color: #fff;

  span {
    margin-left: 5px;
    font-size: 12px;
  }
`;

// PrevewCard.tsx
export const CardUl = styled.div`
  overflow-y: auto;
  padding: 0 0 30px;
  max-height: 330px;
`;

export const CardEmpty = styled.div`
  padding: 64px 0;
`;

// Card.tsx
export const Cardli = styled.li`
  padding: 16px;
  border-radius: 10px;
  margin: 0 12px 8px;
  background-color: #fff;
  list-style: none;

  p {
    text-align: start;
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;

  > div {
    display: flex;
    align-items: center;
  }
  button {
    background-color: transparent;
  }

  span {
    color: #a3a3a3;
    font-size: 12px;
    margin-left: 8px;
  }
`;
