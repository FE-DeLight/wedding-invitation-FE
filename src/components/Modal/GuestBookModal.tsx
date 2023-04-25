import React, { useRef } from 'react';
import * as S from './GuestBookStyle';
import dayjs from 'dayjs';
import { useDispatch, useSelector } from 'react-redux';
import { setCard, setOpenGuestBookModal } from '@/store/guestBookSlice';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

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

  const now = dayjs();
  const year = now.year();
  const month = now.month();
  const date = now.date();
  const minute = now.minute(); // 분
  // const second = now.second();
  const stringYear = year.toString();
  const stringMonth = month.toString();
  const stringDate = date.toString();
  const stringMinute = minute.toString();

  const formRef = useRef<HTMLFormElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const dateResult = [stringYear, stringMonth, stringDate, stringMinute].join('');
  const contentRef = useRef<HTMLTextAreaElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const onSubmit = (event: any) => {
    event.preventDefault();
    // onSubmit 함수에서 유효성 체크 검사 해야될 것 같음!
    const card = {
      id: Date.now() + 1, // uuid
      name: nameRef.current?.value || '',
      time: dateResult, // 여기는 무조건 그 고정값을 가져와야돼!
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
