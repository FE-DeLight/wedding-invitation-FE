/* eslint-disable array-callback-return */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/button-has-type */
import styled from '@emotion/styled';
// import SortCard from '@/components/SortCard';

const MoreOptionContainer = styled.div`
  padding: 20px;
  width: 100%;
  min-height: 300px;
  background-color: white;
`;

const MoreOptionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  color: #000;
  border-bottom: 1px solid #000;
  background-color: white;
`;

const BodyWrap = styled.div`
  display: flex;
  flex-direction: column;
  padding: 48px 0 24px;
`;

const MoreOptionBody = styled.div`
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

const SelectWrap = styled.div`
  display: flex;
  align-items: center;
  label {
    width: 5rem;
    /* line-height: 5rem; */
    flex-shrink: 0;
  }
  div {
    width: 100%;
  }
`;

const Select = styled.select`
  width: 100%;
  height: 42px;
`;

const SelectGrop = styled.select`
  width: 50%;
  height: 42px;
  margin-right: 8px;
  &:last-child {
    margin-right: 0;
  }
`;

// 공통으로 사용하는
const Divider = styled.div`
  width: 100%;
  padding: 12px 0;
  margin: 12px 0;
  hr {
    border: 1px solid rgb(229, 229, 229);
  }
`;

const handleClose = () => {
  // console.log('나들어옴');
};

export default function MoreOption({ optionData, handleMoreOption }: any) {
  const { background, famliy, size } = optionData;

  const changeBackground = (e) => {
    const result = { background: e.target.value };
    handleMoreOption(result);
  };

  const changeTarget = (e) => {
    // console.log('changeTarget에 들어온 e.target.value :', e.target.value);
    // switch (e.target.value) {
    //   case '나눔명조':
    //     return console.log('나눔명조');
    //   case '나눔스퀘어':
    //     return console.log('나눔스퀘어');
    //   case '마루부리':
    //     return console.log('마루부리');
    //   case '디자인하우스':
    //     return console.log('디자인하우스');
    // }
    const result = { famliy: e.target.value };
    handleMoreOption(result);
  };

  const changeSize = (e) => {
    // console.log('changeSize에 들어온 e.target.value :', e.target.value);
    // switch (e.target.value) {
    //   case '작게':
    //     return console.log('작게');
    //   case '보통':
    //     return console.log('보통');
    //   case '크게':
    //     return console.log('크게');
    //   case '더 크게':
    //     return console.log('더 크게');
    // }
    const result = { size: e.target.value };
    handleMoreOption(result);
  };

  return (
    <MoreOptionContainer>
      <MoreOptionHeader>
        <h3>추가옵션</h3>
        <button onClick={handleClose}>닫기</button>
      </MoreOptionHeader>
      <BodyWrap>
        <MoreOptionBody>
          <SelectWrap>
            <label htmlFor="pet-select">배경지</label>
            <div>
              <Select name="fon-family" id="pet-select01" defaultValue={background} onChange={changeBackground}>
                <option value="없음">없음</option>
                <option value="배경지 A">배경지 A</option>
                <option value="배경지 B">배경지 B</option>
              </Select>
            </div>
          </SelectWrap>
          <Divider>
            <hr />
          </Divider>
          <SelectWrap>
            <label htmlFor="pet-select">글꼴</label>
            <SelectGrop name="fon-family" id="pet-select01" defaultValue={famliy} onChange={changeTarget}>
              <option value="나눔명조">나눔명조</option>
              <option value="나눔스퀘어">나눔스퀘어</option>
              <option value="마루부리">마루부리</option>
              <option value="디자인하우스">디자인하우스</option>
            </SelectGrop>
            <SelectGrop name="font-size" id="pet-select02" defaultValue={size} onChange={changeSize}>
              <option value="작게">작게</option>
              <option value="보통">보통</option>
              <option value="크게">크게</option>
              <option value="더 크게">더 크게</option>
            </SelectGrop>
          </SelectWrap>
          <Divider>
            <hr />
          </Divider>
          <SelectWrap>
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
          </SelectWrap>
        </MoreOptionBody>
      </BodyWrap>
    </MoreOptionContainer>
  );
}
