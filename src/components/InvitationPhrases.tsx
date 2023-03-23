export default function page() {
  return (
    <>
      <label htmlFor="title">제목 : </label>
      <input type="text" id="title" />
      <br />
      <label htmlFor="contents">내용 : </label>
      <input type="text" id="contents" />
    </>
  );
}
