import React, { useRef, useState } from 'react';
import * as S from './style';
import * as G from '@/styles/globals';
import {
  Checkbox,
  FormControlLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  SelectChangeEvent,
  TextField,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

export default function ContactWrite({ contacts, selectContact, setSelectContact }) {
  const contactLength = selectContact?.contact?.contact ? Object.values(selectContact.contact.contact) : 0;
  const [select, setSelect] = useState([{ id: 1, group: '', title: '', name: '', phone: '' }]);

  const groupRef = useRef(null);
  const nickNameRef = useRef(null);
  const nameRef = useRef(null);
  const phoneRef = useRef(null);

  const handleChange = (event: SelectChangeEvent) => {
    const newContacts = Object.values(contacts);
    const value = event.target.value;

    if (value === '신랑에게 연락하기') {
      setSelectContact({
        name: 'groom',
        contact: {
          ...newContacts[0],
        },
      });
      // const groupName = 'groom';
      // const newKey = 'contact' + (Object.keys(contacts[groupName].contact).length + 1);
      // setContacts((contacts) => {
      //   return {
      //     ...contacts,
      //     [groupName]: {
      //       contact: {
      //         ...contacts[groupName].contact,
      //         [newKey]: {
      //           title: 'Mr.',
      //           name: nameRef.current.value,
      //           phone: phoneRef.current.value,
      //           email: 'john.smith@email.com',
      //         },
      //       },
      //     },
      //   };
      // });
    } else if (value === '신부에게 연락하기') {
      setSelectContact({
        name: 'bride',
        contact: {
          ...newContacts[1],
        },
      });
    } else {
      setSelectContact({
        name: 'host',
        contact: {
          ...newContacts[2],
        },
      });
    }
  };

  const AddContact = (contactCount) => {
    setSelect((select) => {
      const newContact = { id: contactCount + 1, group: '', title: '', name: '', phone: '' };
      return [...select, newContact];
    });
  };

  const handleDeleteContact = (contactId: any) => {
    const updatedContacts = select.filter((item) => item.id !== contactId);
    setSelect(updatedContacts);
  };

  return (
    <>
      <G.RowWrap>
        <G.Row>
          <G.ColTitle>버튼 이름</G.ColTitle>
          <G.ColContent>
            <G.RowItem>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                size="small"
                fullWidth
                // value={contact}
                onChange={handleChange}
              >
                <MenuItem value="신랑에게 연락하기">신랑에게 연락하기</MenuItem>
                <MenuItem value="신부에게 연락하기">신부에게 연락하기</MenuItem>
                <MenuItem value="혼주에게 연락하기">혼주에게 연락하기</MenuItem>
              </Select>
            </G.RowItem>
          </G.ColContent>
        </G.Row>
        <S.Divider>
          <hr />
        </S.Divider>
        {contactLength.length === 0 ? (
          <G.Row>
            <G.ColTitle></G.ColTitle>
            <S.ColWrap>
              <S.NoContact>
                <ErrorOutlineIcon />
                <span>등록 된 연락처가 없습니다.</span>
              </S.NoContact>
            </S.ColWrap>
          </G.Row>
        ) : contactLength.length === 1 ? (
          <G.Row>
            <G.ColTitle>연락처</G.ColTitle>
            <S.ColWrap>
              <S.ColContent>
                <G.RowItem>
                  <TextField size="small" fullWidth placeholder={'연락처'} />
                </G.RowItem>
              </S.ColContent>
              <CloseIcon onClick={() => handleDeleteContact(select[0].id)} />
            </S.ColWrap>
          </G.Row>
        ) : (
          Object.values(selectContact?.contact?.contact || {}).map((contact) => (
            <G.Row>
              <G.ColTitle>연락처</G.ColTitle>
              <S.ColWrap>
                <S.ColContent>
                  <S.GroupRowItem>
                    <TextField size="small" value={contact.title} ref={groupRef} fullWidth placeholder={'그룹'} />
                    <TextField size="small" value={contact.name} ref={nickNameRef} fullWidth placeholder={'호칭'} />
                    <TextField size="small" value={contact.phone} ref={nameRef} fullWidth placeholder={'이름'} />
                    <TextField size="small" value={contact.email} ref={phoneRef} fullWidth placeholder={'연락처'} />
                  </S.GroupRowItem>
                </S.ColContent>
                <CloseIcon onClick={() => handleDeleteContact(contact.id)} />
              </S.ColWrap>
            </G.Row>
          ))
        )}
        <S.Button onClick={AddContact}>
          <span>연락처 추가하기</span>
        </S.Button>
        <S.Divider>
          <hr />
        </S.Divider>
        <G.Row>
          <G.ColTitle></G.ColTitle>
          <S.ColTextContent>
            <p>
              ※ 버튼에 소속 된 <strong>연락처가 2개 이상 일 경우</strong> 버튼이 <strong>팝업</strong>으로 대체됩니다.
            </p>
            <p>
              ※ 팝업에서 <strong>그룹 명이 같은 경우</strong> 묶여서 표시됩니다.
            </p>
          </S.ColTextContent>
        </G.Row>
      </G.RowWrap>
    </>
  );
}
