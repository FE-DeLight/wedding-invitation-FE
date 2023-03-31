/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
/* eslint-disable import/extensions */
import styled from '@emotion/styled';
import Card from './Card.tsx';

const PrivewCardSection = styled.section`
  background-color: #9d9898;
  padding: 12px 12px;
  margin-bottom: 16px;
`;

const CardUl = styled.div`
  overflow-y: auto;
  max-height: 150px;
`;
export default function PrivewCard({
  cards,
  deleteCard,
  openGuestBookDelectModal,
  HandleGBDelectVisibility,
  setGuestDelectModal,
  passwordValidation,
  handleValidation,
}) {
  return (
    <PrivewCardSection>
      <CardUl>
        {Object.keys(cards).length === 0
          ? '축하 메시지를 남겨주세요!'
          : Object.keys(cards).map((key) => (
              <Card
                key={key}
                card={cards[key]}
                deleteCard={deleteCard}
                openGuestBookDelectModal={openGuestBookDelectModal}
                HandleGBDelectVisibility={HandleGBDelectVisibility}
                setGuestDelectModal={setGuestDelectModal}
                passwordValidation={passwordValidation}
                handleValidation={handleValidation}
              />
            ))}
      </CardUl>
    </PrivewCardSection>
  );
}
