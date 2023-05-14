import React from 'react';
import * as S from '@/components/WeddingHall/Write/style';
import { Modal, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import DaumPostcode from 'react-daum-postcode';

export default function AddressSearchModal({ visible, setVisible, handleAddressSearch }: any) {
  return (
    <Modal
      open={visible}
      onClose={() => setVisible(false)}
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        '& .MuiPaper-root': {
          width: '80%',
          maxWidth: 600,
          overflow: 'scroll',
        },
      }}
    >
      <S.Modal>
        <S.ModalHead>
          <S.ModalHeadTitle>주소 검색</S.ModalHeadTitle>
          <IconButton onClick={() => setVisible(false)}>
            <CloseIcon sx={{ fontSize: 18 }} />
          </IconButton>
        </S.ModalHead>
        <S.ModalBody>
          <DaumPostcode onComplete={handleAddressSearch} className="daum-postcode" />
        </S.ModalBody>
      </S.Modal>
    </Modal>
  );
}
