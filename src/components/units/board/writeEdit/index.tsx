import React from 'react';
import Card from '@/components/units/card';
import * as S from '@/components/units/board/writeEdit/style';

export default function BoardWriteEdit() {
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
        <Card color="white" title="제목4">
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
        <Card color="white" title="제목4">
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
        <Card color="white" title="제목4">
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
        <Card color="white" title="제목4">
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
        <Card color="white" title="제목4">
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
        <Card color="white" title="제목4">
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
        <Card color="white" title="제목4">
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
    </S.Wrapper>
  );
}
