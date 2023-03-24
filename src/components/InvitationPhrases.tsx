/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/react-in-jsx-scope */
import styled from '@emotion/styled';

const Textarea = styled.textarea`
  width: 100%;
  height: 200px;
`;

export default function page({ text, test, handleChange, showSampleText }) {
  console.log('invitationph:', text);
  return (
    <>
      <label htmlFor="title">제목 : </label>
      <input type="text" id="title" onChange={handleChange} />
      <br />
      <label htmlFor="contents">내용 : </label>
      <Textarea id="contents" ref={test} onChange={handleChange} value={text.content} />
      <button onClick={showSampleText}>샘플 텍스트 보기</button>
    </>
  );
}
