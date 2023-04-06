import React from 'react';
import { useSelector } from 'react-redux';

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

  return (
    <>
      {/* 부모님 데이터가 있는 경우 */}
      {(maleFatherName || maleMotherName || femaleFatherName || femaleMotherName) && (
        <>
          <div>
            {(maleFatherName || maleMotherName) && (
              <>
                {maleFatherIsDeceased && <span>故</span>}
                {maleFatherName && (
                  <>
                    <span>{maleFatherName}</span>
                    {maleMotherName && <span> · </span>}
                  </>
                )}
                {maleMotherIsDeceased && <span>故</span>}
                {maleMotherName && <span>{maleMotherName}</span>}
                {(maleFatherName || maleMotherName) && <span> 의</span>}
              </>
            )}
            {maleName && <span> {maleRelationship}</span>}
            {maleName && <span> {maleName}</span>}
          </div>

          <div>
            {(femaleFatherName || femaleMotherName) && (
              <>
                {femaleFatherIsDeceased && <span>故</span>}
                {femaleFatherName && (
                  <>
                    <span>{femaleFatherName}</span>
                    {femaleMotherName && <span> · </span>}
                  </>
                )}
                {femaleMotherIsDeceased && <span>故</span>}
                {femaleMotherName && <span>{femaleMotherName}</span>}
                {(femaleFatherName || femaleMotherName) && <span> 의</span>}
              </>
            )}
            {femaleName && <span> {femaleRelationship}</span>}
            {femaleName && <span> {femaleName}</span>}
          </div>
        </>
      )}

      {/* 부모님 데이터가 없는 경우 */}
      {!maleFatherName && !maleMotherName && !femaleFatherName && !femaleMotherName && (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div>
            {maleName && (
              <>
                <span> {maleRelationship}</span>
                {maleName && <span> {maleName}</span>}
                {femaleName && <span> · </span>}
              </>
            )}
          </div>

          <div>
            {femaleName && <span> {femaleRelationship}</span>}
            {femaleName && <span> {femaleName}</span>}
          </div>
        </div>
      )}
    </>
  );
}
