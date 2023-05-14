import React, { useRef } from 'react';
import * as S from './GuestBookStyle';
import { setCard, setOpenGuestBookModal } from '@/store/guestBookSlice';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from 'react-redux';
import dayjs from 'dayjs';

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

export default function GuestBookModal() {
  const dispatch = useDispatch();
  const guestBookState = useSelector((state: any) => state.guestBook);
  const { openGuestBookModal } = guestBookState;

  const stateModal = () => {
    dispatch(setOpenGuestBookModal(!openGuestBookModal));
  };

  const formRef = useRef<HTMLFormElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const contentRef = useRef<HTMLTextAreaElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const onSubmit = (event: any) => {
    event.preventDefault();
    const now = dayjs();
    const card = {
      id: Date.now(),
      name: nameRef.current?.value || '',
      time: now,
      content: contentRef.current?.value || '',
      password: passwordRef.current?.value || '',
    };

    formRef.current?.reset();
    dispatch(setCard(card));
    stateModal();
  };

  return (
    openGuestBookModal && (
      <>
        <div>
          <BootstrapDialog onClose={stateModal} aria-labelledby="customized-dialog-title" open={openGuestBookModal}>
            <BootstrapDialogTitle id="customized-dialog-title" onClose={stateModal}>
              방명록
            </BootstrapDialogTitle>
            <DialogContent dividers>
              <S.ModalWrap>
                <S.ModalBody ref={formRef} action="" method="post">
                  <S.SelectSample>
                    <label>작성자</label>
                    <input ref={nameRef} type="text" placeholder="작성자" />
                  </S.SelectSample>
                  <S.SelectSample>
                    <label>내용</label>
                    <textarea ref={contentRef} placeholder="내용" />
                  </S.SelectSample>
                  <S.SelectSample>
                    <label>비밀번호</label>
                    <input ref={passwordRef} type="password" placeholder="비밀번호" />
                  </S.SelectSample>
                </S.ModalBody>
              </S.ModalWrap>
            </DialogContent>
            <DialogActions>
              <Button autoFocus onClick={stateModal} className="close">
                닫기
              </Button>
              <Button autoFocus onClick={onSubmit} className="save">
                저장
              </Button>
            </DialogActions>
          </BootstrapDialog>
        </div>
      </>
    )
  );
}
