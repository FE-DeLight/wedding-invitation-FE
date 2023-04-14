import React, { useRef, useState } from 'react';
import * as SG from './guestBookDelectStyle';
import { useDispatch, useSelector } from 'react-redux';
import { deleteCard, setOpenGuestBookDelectModal } from '@/store/guestBookSlice';
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import DialogContent from "@mui/material/DialogContent";
import * as S from "@/components/Modal/GuestBookStyle";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

export interface DialogTitleProps {
  id: string;
  children?: React.ReactNode;
  onClose: () => void;
}

function BootstrapDialogTitle(props: DialogTitleProps) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}


export default function GuestBookDelectModal({ id, password }: any) {
  const dispatch = useDispatch();
  const guestBookState = useSelector((state: any) => state.guestBook);
  const { openGuestBookDelectModal, cards } = guestBookState;

  const [passwordValidation, setPasswordValidation] = useState('');

  const handleValidation = () => {
    setPasswordValidation('');
  };
  const HandleGBDelectVisibility = () => {
    handleValidation();
    dispatch(setOpenGuestBookDelectModal(!openGuestBookDelectModal));
  };

  const formRef = useRef<HTMLFormElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const onChangeInput = (e: any) => {
    //   if (e.target.value > 0) {
    //     // 0 보다 크면서 값이 입력되어있으면 '비밀번호가 틀렸습니다'를 지워준다.
    //     // console.log('비밀번호가 틀렸습니다.');
    //     handleValidation();
    //   }
  };

  // 사용자입력된 값, prpos로 받아온 id, props로 받아온 password
  // const deleteCard = (cardPassword: any, id: any, propsPassword: any) => {
  // // 그리고,
  // if (updated[0].password === cardPassword) {
  //   // dispatch(
  //   //   setCard(() => {
  //   //     delete updated[0];
  //   //     return updated;
  //   //   }),
  //   // );
  //   dispatch(setOpenGuestBookDelectModal(!openGuestBookDelectModal));
  // } else if (updated[id]?.password !== cardPassword) {
  //   // setPasswordValidation(!passwordValidation); error 발생
  // } else {
  //   // 공백 && 포커스를 가져길을때 === 비밀번호를 입력해주세요.
  // }
  // };

  const onSubmit = (event: any) => {
    event.preventDefault();
    // 저장을 눌렀는데, 만약 비밀번호가 공백 이라면 '입력해주세요 띄우기'
    // const passWord = passwordRef.current?.value;
    dispatch(deleteCard(cards)); // 사용자입력된 값, prpos로 받아온 id, props로 받아온 password
    // formRef.current?.reset();
  };

  return (
    <BootstrapDialog
      onClose={HandleGBDelectVisibility}
      aria-labelledby="customized-dialog-title"
      open={openGuestBookDelectModal}
    >
      <BootstrapDialogTitle id="customized-dialog-title" onClose={HandleGBDelectVisibility}>
        방명록
      </BootstrapDialogTitle>
      <DialogContent dividers>
        <SG.ModalBody ref={formRef} action="" method="post">
          <SG.SelectSample>
            <label>비밀번호</label>
            <input ref={passwordRef} type="password" placeholder="비밀번호" onChange={onChangeInput} />
          </SG.SelectSample>
          {passwordValidation && <SG.Validation>비밀번호가 틀렸습니다.</SG.Validation>}
        </SG.ModalBody>
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={HandleGBDelectVisibility} className="close">
          닫기
        </Button>
        <Button autoFocus onClick={onSubmit} className="save">
          저장
        </Button>
      </DialogActions>
    </BootstrapDialog>
  );
}
