import React from 'react';
import Card from '@/components/units/card';
import * as S from '@/components/units/board/writeEdit/style';
import { useRouter } from 'next/router';

export default function BoardWriteEdit() {
  const router = useRouter();
  const handleSave = () => {
    router.push('/boards/');

    console.log('저장');
  };
  return (
    <S.Wrapper>
      <S.ContentLeft>
        <Card color="white" type="preview">
          내용1
        </Card>
        <Card title="제목2" type="preview">
          내용2
        </Card>
      </S.ContentLeft>
      <S.ContentRight>
        <Card title="템플릿">
          <S.RowWrap>
            <S.Row>
              <S.ColTitle>스타일</S.ColTitle>
              <S.ColContent>
                <select>
                  <option value="">심플</option>
                  <option value="">직접 디자인하기</option>
                </select>
              </S.ColContent>
            </S.Row>
            <S.Row>
              <S.ColTitle>색상</S.ColTitle>
              <S.ColContent>
                <S.RadioGroup>
                  <S.LabelRadio htmlFor="templateColorBlack">
                    Black
                    <S.InputRadio type="radio" id="templateColorBlack" name="templateColor" />
                  </S.LabelRadio>
                  <S.LabelRadio htmlFor="templateColorWhite">
                    White
                    <S.InputRadio type="radio" id="templateColorWhite" name="templateColor" />
                  </S.LabelRadio>
                </S.RadioGroup>
              </S.ColContent>
            </S.Row>
            <S.Row>
              <S.ColTitle>색상</S.ColTitle>
              <S.ColContent>
                <S.InputText type="text" />
              </S.ColContent>
            </S.Row>
          </S.RowWrap>
        </Card>
        <Card title="예식일">
          <S.RowWrap>
            <S.Row>
              <S.ColTitle>스타일</S.ColTitle>
              <S.ColContent>
                <select>
                  <option value="">심플</option>
                  <option value="">직접 디자인하기</option>
                </select>
              </S.ColContent>
            </S.Row>
            <S.Row>
              <S.ColTitle>색상</S.ColTitle>
              <S.ColContent>
                <S.RadioGroup>
                  <S.LabelRadio htmlFor="templateColorBlack">
                    Black
                    <S.InputRadio type="radio" id="templateColorBlack" name="templateColor" />
                  </S.LabelRadio>
                  <S.LabelRadio htmlFor="templateColorWhite">
                    White
                    <S.InputRadio type="radio" id="templateColorWhite" name="templateColor" />
                  </S.LabelRadio>
                </S.RadioGroup>
              </S.ColContent>
            </S.Row>
            <S.Row>
              <S.ColTitle>색상</S.ColTitle>
              <S.ColContent>
                <S.InputText type="text" />
              </S.ColContent>
            </S.Row>
          </S.RowWrap>
        </Card>
        <Card color="white" title="첫 화면">
          <S.RowWrap>
            <S.Row>
              <S.ColTitle>스타일</S.ColTitle>
              <S.ColContent>
                <select>
                  <option value="">심플</option>
                  <option value="">직접 디자인하기</option>
                </select>
              </S.ColContent>
            </S.Row>
            <S.Row>
              <S.ColTitle>색상</S.ColTitle>
              <S.ColContent>
                <S.InputText type="text" />
              </S.ColContent>
            </S.Row>
          </S.RowWrap>
        </Card>
        <Card title="청첩장 문구">
          <S.RowWrap>
            <S.Row>
              <S.ColTitle>스타일</S.ColTitle>
              <S.ColContent>
                <select>
                  <option value="">심플</option>
                  <option value="">직접 디자인하기</option>
                </select>
              </S.ColContent>
            </S.Row>
            <S.Row>
              <S.ColTitle>색상</S.ColTitle>
              <S.ColContent>
                <S.RadioGroup>
                  <S.LabelRadio htmlFor="templateColorBlack">
                    Black
                    <S.InputRadio type="radio" id="templateColorBlack" name="templateColor" />
                  </S.LabelRadio>
                  <S.LabelRadio htmlFor="templateColorWhite">
                    White
                    <S.InputRadio type="radio" id="templateColorWhite" name="templateColor" />
                  </S.LabelRadio>
                </S.RadioGroup>
              </S.ColContent>
            </S.Row>
            <S.Row>
              <S.ColTitle>색상</S.ColTitle>
              <S.ColContent>
                <S.InputText type="text" />
              </S.ColContent>
            </S.Row>
          </S.RowWrap>
        </Card>
        <Card color="white" title="보내는 사람">
          <S.RowWrap>
            <S.Row>
              <S.ColTitle>스타일</S.ColTitle>
              <S.ColContent>
                <select>
                  <option value="">심플</option>
                  <option value="">직접 디자인하기</option>
                </select>
              </S.ColContent>
            </S.Row>
            <S.Row>
              <S.ColTitle>색상</S.ColTitle>
              <S.ColContent>
                <S.InputText type="text" />
              </S.ColContent>
            </S.Row>
          </S.RowWrap>
        </Card>
        <Card color="white" title="캘린더 스타일">
          <S.RowWrap>
            <S.Row>
              <S.ColTitle>스타일</S.ColTitle>
              <S.ColContent>
                <select>
                  <option value="">심플</option>
                  <option value="">직접 디자인하기</option>
                </select>
              </S.ColContent>
            </S.Row>
            <S.Row>
              <S.ColTitle>색상</S.ColTitle>
              <S.ColContent>
                <S.InputText type="text" />
              </S.ColContent>
            </S.Row>
          </S.RowWrap>
        </Card>
        <Card color="white" title="갤러리">
          <S.RowWrap>
            <S.Row>
              <S.ColTitle>스타일</S.ColTitle>
              <S.ColContent>
                <select>
                  <option value="">심플</option>
                  <option value="">직접 디자인하기</option>
                </select>
              </S.ColContent>
            </S.Row>
            <S.Row>
              <S.ColTitle>색상</S.ColTitle>
              <S.ColContent>
                <S.InputText type="text" />
              </S.ColContent>
            </S.Row>
          </S.RowWrap>
        </Card>
        <Card color="white" title="예식장 정보">
          <S.RowWrap>
            <S.Row>
              <S.ColTitle>스타일</S.ColTitle>
              <S.ColContent>
                <select>
                  <option value="">심플</option>
                  <option value="">직접 디자인하기</option>
                </select>
              </S.ColContent>
            </S.Row>
            <S.Row>
              <S.ColTitle>색상</S.ColTitle>
              <S.ColContent>
                <S.InputText type="text" />
              </S.ColContent>
            </S.Row>
          </S.RowWrap>
        </Card>
        <Card color="white" title="길 안내">
          <S.RowWrap>
            <S.Row>
              <S.ColTitle>스타일</S.ColTitle>
              <S.ColContent>
                <select>
                  <option value="">심플</option>
                  <option value="">직접 디자인하기</option>
                </select>
              </S.ColContent>
            </S.Row>
            <S.Row>
              <S.ColTitle>색상</S.ColTitle>
              <S.ColContent>
                <S.InputText type="text" />
              </S.ColContent>
            </S.Row>
          </S.RowWrap>
        </Card>
        <Card color="white" title="계좌 정보">
          <S.RowWrap>
            <S.Row>
              <S.ColTitle>스타일</S.ColTitle>
              <S.ColContent>
                <select>
                  <option value="">심플</option>
                  <option value="">직접 디자인하기</option>
                </select>
              </S.ColContent>
            </S.Row>
            <S.Row>
              <S.ColTitle>색상</S.ColTitle>
              <S.ColContent>
                <S.InputText type="text" />
              </S.ColContent>
            </S.Row>
          </S.RowWrap>
        </Card>
        <Card title="연락처 정보">
          <S.RowWrap>
            <S.Row>
              <S.ColTitle>스타일</S.ColTitle>
              <S.ColContent>
                <select>
                  <option value="">심플</option>
                  <option value="">직접 디자인하기</option>
                </select>
              </S.ColContent>
            </S.Row>
            <S.Row>
              <S.ColTitle>색상</S.ColTitle>
              <S.ColContent>
                <S.InputText type="text" />
              </S.ColContent>
            </S.Row>
          </S.RowWrap>
        </Card>
        <Card title="식전 영상">
          <S.RowWrap>
            <S.Row>
              <S.ColTitle>스타일</S.ColTitle>
              <S.ColContent>
                <select>
                  <option value="">심플</option>
                  <option value="">직접 디자인하기</option>
                </select>
              </S.ColContent>
            </S.Row>
            <S.Row>
              <S.ColTitle>색상</S.ColTitle>
              <S.ColContent>
                <S.InputText type="text" />
              </S.ColContent>
            </S.Row>
          </S.RowWrap>
        </Card>
        <Card title="안내사항">
          <S.RowWrap>
            <S.Row>
              <S.ColTitle>스타일</S.ColTitle>
              <S.ColContent>
                <select>
                  <option value="">심플</option>
                  <option value="">직접 디자인하기</option>
                </select>
              </S.ColContent>
            </S.Row>
            <S.Row>
              <S.ColTitle>색상</S.ColTitle>
              <S.ColContent>
                <S.InputText type="text" />
              </S.ColContent>
            </S.Row>
          </S.RowWrap>
        </Card>
        <Card title="썸네일">
          <S.RowWrap>
            <S.Row>
              <S.ColTitle>스타일</S.ColTitle>
              <S.ColContent>
                <select>
                  <option value="">심플</option>
                  <option value="">직접 디자인하기</option>
                </select>
              </S.ColContent>
            </S.Row>
            <S.Row>
              <S.ColTitle>색상</S.ColTitle>
              <S.ColContent>
                <S.InputText type="text" />
              </S.ColContent>
            </S.Row>
          </S.RowWrap>
        </Card>
        <Card title="애니메이션 효과">
          <S.RowWrap>
            <S.Row>
              <S.ColTitle>스타일</S.ColTitle>
              <S.ColContent>
                <select>
                  <option value="">심플</option>
                  <option value="">직접 디자인하기</option>
                </select>
              </S.ColContent>
            </S.Row>
            <S.Row>
              <S.ColTitle>색상</S.ColTitle>
              <S.ColContent>
                <S.InputText type="text" />
              </S.ColContent>
            </S.Row>
          </S.RowWrap>
        </Card>
        <Card title="배경 음악">
          <S.RowWrap>
            <S.Row>
              <S.ColTitle>스타일</S.ColTitle>
              <S.ColContent>
                <select>
                  <option value="">심플</option>
                  <option value="">직접 디자인하기</option>
                </select>
              </S.ColContent>
            </S.Row>
            <S.Row>
              <S.ColTitle>색상</S.ColTitle>
              <S.ColContent>
                <S.InputText type="text" />
              </S.ColContent>
            </S.Row>
          </S.RowWrap>
        </Card>
        <Card title="방명록">
          <S.RowWrap>
            <S.Row>
              <S.ColTitle>스타일</S.ColTitle>
              <S.ColContent>
                <select>
                  <option value="">심플</option>
                  <option value="">직접 디자인하기</option>
                </select>
              </S.ColContent>
            </S.Row>
            <S.Row>
              <S.ColTitle>색상</S.ColTitle>
              <S.ColContent>
                <S.InputText type="text" />
              </S.ColContent>
            </S.Row>
          </S.RowWrap>
        </Card>
        <Card title="추가 옵션">
          <S.RowWrap>
            <S.Row>
              <S.ColTitle>스타일</S.ColTitle>
              <S.ColContent>
                <select>
                  <option value="">심플</option>
                  <option value="">직접 디자인하기</option>
                </select>
              </S.ColContent>
            </S.Row>
            <S.Row>
              <S.ColTitle>색상</S.ColTitle>
              <S.ColContent>
                <S.InputText type="text" />
              </S.ColContent>
            </S.Row>
          </S.RowWrap>
        </Card>
      </S.ContentRight>
      <S.ContentBottom>
        <S.SubmitButton onClick={handleSave}>저장하기</S.SubmitButton>
      </S.ContentBottom>
    </S.Wrapper>
  );
}
