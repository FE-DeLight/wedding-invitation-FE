import React from 'react';
import * as G from '@/styles/globals';
import { useDispatch, useSelector } from 'react-redux';
import { setSenderForm } from '@/store/userInfoSlice';

export default function SenderWrite() {
  const dispatch = useDispatch();
  const senderForm = useSelector((state: any) => state.user.senderForm);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = event.target;

    const [senderType, senderKey, subKey] = name.split('.');
    if (!senderType || !senderKey) return;

    const updatedSenderForm = {
      ...senderForm,
      [senderType]: {
        ...senderForm[senderType],
        [senderKey]: !subKey
          ? value
          : {
              ...senderForm[senderType][senderKey],
              [subKey]: type === 'checkbox' ? checked : value,
            },
      },
    };

    dispatch(setSenderForm(updatedSenderForm));
  };

  console.log(senderForm);

  return (
    <>
      <G.RowWrap>
        <G.Row>
          <G.ColTitle>신랑</G.ColTitle>
          <G.ColContent>
            <input type="text" name="male.name" onChange={handleInputChange} />
            <input type="text" name="male.relationship" onChange={handleInputChange} />
          </G.ColContent>
        </G.Row>
        <G.Row>
          <G.ColTitle>아버지</G.ColTitle>
          <G.ColContent>
            <input type="text" name="male.father.name" onChange={handleInputChange} />
            <input type="checkbox" name="male.father.isDeceased" onChange={handleInputChange} />
          </G.ColContent>
        </G.Row>
        <G.Row>
          <G.ColTitle>어머니</G.ColTitle>
          <G.ColContent>
            <input type="text" name="male.mother.name" onChange={handleInputChange} />
            <input type="checkbox" name="male.mother.isDeceased" onChange={handleInputChange} />
          </G.ColContent>
        </G.Row>
      </G.RowWrap>
      <G.RowWrap>
        <G.Row>
          <G.ColTitle>신부</G.ColTitle>
          <G.ColContent>
            <input type="text" name="female.name" onChange={handleInputChange} />
            <input type="text" name="female.relationship" onChange={handleInputChange} />
          </G.ColContent>
        </G.Row>
        <G.Row>
          <G.ColTitle>아버지</G.ColTitle>
          <G.ColContent>
            <input type="text" name="female.father.name" onChange={handleInputChange} />
            <input type="checkbox" name="female.father.isDeceased" onChange={handleInputChange} />
          </G.ColContent>
        </G.Row>
        <G.Row>
          <G.ColTitle>어머니</G.ColTitle>
          <G.ColContent>
            <input type="text" name="female.mother.name" onChange={handleInputChange} />
            <input type="checkbox" name="female.mother.isDeceased" onChange={handleInputChange} />
          </G.ColContent>
        </G.Row>
      </G.RowWrap>
    </>
  );
}
