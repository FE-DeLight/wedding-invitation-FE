/* eslint-disable react/react-in-jsx-scope */
import styled from '@emotion/styled';

const BoxLayout = styled.div`
  width: 150px;
  height: 250px;
  background-color: #f5f5f5;
  color: black;
`;

type PriviewProps = {
  text: {
    title: string;
    content: string;
  };
};

export default function priview({ text }: PriviewProps) {
  return (
    <BoxLayout>
      <div className="invitation-phrases">
        <p>{text.title}</p>
      </div>
      <div>
        <p>{text.content}</p>
      </div>
    </BoxLayout>
  );
}
