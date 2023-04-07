import React from 'react';
import { useSelector } from 'react-redux';
import * as S from '@/components/Sender/Preview/style';

export default function SenderPreview() {
  const {
    male: {
      father: { name: maleFatherName, isDeceased: maleFatherIsDeceased },
      mother: { name: maleMotherName, isDeceased: maleMotherIsDeceased },
      relationship: maleRelationship,
      name: maleName,
    },
    female: {
      father: { name: femaleFatherName, isDeceased: femaleFatherIsDeceased },
      mother: { name: femaleMotherName, isDeceased: femaleMotherIsDeceased },
      relationship: femaleRelationship,
      name: femaleName,
    },
  } = useSelector((state: any) => state.user.senderForm);

  if (!maleFatherName && !maleMotherName && !femaleFatherName && !femaleMotherName && !maleName && !femaleName) {
    return null;
  }

  return (
    <>
      {/* 부모님 데이터가 있는 경우 */}
      {(maleFatherName || maleMotherName || femaleFatherName || femaleMotherName) && (
        <S.Wrap>
          <S.Male>
            {(maleFatherName || maleMotherName) && (
              <>
                {maleFatherIsDeceased && <S.Text>故</S.Text>}
                {maleFatherName && (
                  <>
                    <S.Text>{maleFatherName}</S.Text>
                    {maleMotherName && <S.Text space>·</S.Text>}
                  </>
                )}
                {maleMotherIsDeceased && <S.Text>故</S.Text>}
                {maleMotherName && <S.Text>{maleMotherName}</S.Text>}
                {(maleFatherName || maleMotherName) && (
                  <S.Text grey space>
                    의
                  </S.Text>
                )}
              </>
            )}
            {maleName && <S.Text grey>{maleRelationship}</S.Text>}
            {maleName && <S.Text> {maleName}</S.Text>}
          </S.Male>

          <S.Female>
            {(femaleFatherName || femaleMotherName) && (
              <>
                {femaleFatherIsDeceased && <S.Text>故</S.Text>}
                {femaleFatherName && (
                  <>
                    <S.Text>{femaleFatherName}</S.Text>
                    {femaleMotherName && <S.Text space>·</S.Text>}
                  </>
                )}
                {femaleMotherIsDeceased && <S.Text>故</S.Text>}
                {femaleMotherName && <S.Text>{femaleMotherName}</S.Text>}
                {(femaleFatherName || femaleMotherName) && (
                  <S.Text grey space>
                    의
                  </S.Text>
                )}
              </>
            )}
            {femaleName && <S.Text grey>{femaleRelationship}</S.Text>}
            {femaleName && <S.Text> {femaleName}</S.Text>}
          </S.Female>
        </S.Wrap>
      )}

      {/* 부모님 데이터가 없는 경우 */}
      {!maleFatherName && !maleMotherName && !femaleFatherName && !femaleMotherName && (
        <S.Wrap withoutParents>
          <div>
            {maleName && (
              <>
                <S.Text grey>{maleRelationship} </S.Text>
                {maleName && <S.Text>{maleName}</S.Text>}
                {femaleName && <S.Text space>·</S.Text>}
              </>
            )}
          </div>

          <div>
            {femaleName && <S.Text grey>{femaleRelationship} </S.Text>}
            {femaleName && <S.Text>{femaleName}</S.Text>}
          </div>
        </S.Wrap>
      )}
    </>
  );
}
