/* eslint-disable react/button-has-type */
/* eslint-disable react/react-in-jsx-scope */
import styled from '@emotion/styled';

const Cardli = styled.li`
  padding: 16px;
  margin-bottom: 8px;
  background-color: #fff;

  p {
    text-align: start;
  }
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

type CardProp = {
  card: {
    name: string;
    content: string;
  };
};

export default function Card({ card }: CardProp) {
  const { name, content } = card;

  return (
    <Cardli>
      <CardHeader>
        <h4>{name}</h4>
        <button>닫기</button>
      </CardHeader>
      <p>{content}</p>
    </Cardli>
  );
}
