import * as S from './style';
// import SortCard from '@/components/SortCard';

const handleClose = () => {
  // console.log('나들어옴');
};

export default function MoreOption({ optionData, handleMoreOption }: any) {
  const { background, famliy, size } = optionData;

  const changeBackground = (e:any) => {
    const result = { background: e.target.value };
    handleMoreOption(result);
  };

  const changeTarget = (e:any) => {
    const result = { famliy: e.target.value };
    handleMoreOption(result);
  };

  const changeSize = (e:any) => {
    const result = { size: e.target.value };
    handleMoreOption(result);
  };

  return (
      <S.MoreOptionWrap>
        <S.MoreOptionBody>
          <S.SelectWrap>
            <label htmlFor="pet-select">배경지</label>
            <div>
              <S.Select name="fon-family" id="pet-select01" defaultValue={background} onChange={changeBackground}>
                <option value="없음">없음</option>
                <option value="배경지 A">배경지 A</option>
                <option value="배경지 B">배경지 B</option>
              </S.Select>
            </div>
          </S.SelectWrap>
          <S.Divider>
            <hr />
          </S.Divider>
          <S.SelectWrap>
            <label htmlFor="pet-select">글꼴</label>
            <S.SelectGrop name="fon-family" id="pet-select01" defaultValue={famliy} onChange={changeTarget}>
              <option value="나눔명조">나눔명조</option>
              <option value="나눔스퀘어">나눔스퀘어</option>
              <option value="마루부리">마루부리</option>
              <option value="디자인하우스">디자인하우스</option>
            </S.SelectGrop>
            <S.SelectGrop name="font-size" id="pet-select02" defaultValue={size} onChange={changeSize}>
              <option value="32px">작게</option>
              <option value="36px">보통</option>
              <option value="48px">크게</option>
              {/*<option value="더 크게">더 크게</option>*/}
            </S.SelectGrop>
          </S.SelectWrap>
          <S.Divider>
            <hr />
          </S.Divider>
          <S.SelectWrap>
            <label htmlFor="pet-select">배경지</label>
            <div>
              {/* <SortCard components={components} setComponents={setComponents} HandleAllLayout={HandleAllLayout} /> */}
              {/* 
                <SortCard componentArray={componentArray[1]} HandleAllLayout={HandleAllLayout} />
                <SortCard componentArray={componentArray[2]} HandleAllLayout={HandleAllLayout} />
                <SortCard componentArray={componentArray[3]} HandleAllLayout={HandleAllLayout} />
                <SortCard componentArray={componentArray[5]} HandleAllLayout={HandleAllLayout} /> 
              */}
            </div>
          </S.SelectWrap>
        </S.MoreOptionBody>
      </S.MoreOptionWrap>
  );
}
