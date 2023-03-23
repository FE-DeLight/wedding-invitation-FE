import styled from '@emotion/styled';

const BoxLayout = styled.div`
  width: 150px;
  height: 250px;
  background-color: #f5f5f5;
`;

export default function priview() {
  return (
    <BoxLayout>
      <div className="invitation-phrases" />
    </BoxLayout>
  );
}
