/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/react-in-jsx-scope */
export default function page({ handleChange, showSampleText }) {
  return (
    <>
      <label htmlFor="title">제목 : </label>
      <input type="text" id="title" onChange={handleChange} />
      <br />
      <label htmlFor="contents">내용 : </label>
      <input type="text" id="contents" onChange={handleChange} />
      <button onClick={showSampleText}>샘플 텍스트 보기</button>
    </>
  );
}
