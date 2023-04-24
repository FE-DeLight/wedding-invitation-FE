import React, { useRef, useState } from 'react';
import Card from '@/components/Card';
import * as S from '@/components/Board/Write/style';
import { useRouter } from 'next/router';
import TemplateWrite from '@/components/WeddingTemplate/Write';
import TemplatePreview from '@/components/WeddingTemplate/Preview';
import InvitationSampleTextModal from '@/components/Modal/InvitationSampleTextModal';
import InvitationPreview from '@/components/Invitation/Preview';
import InvitationWrite from '@/components/Invitation/Write';
import GuestBookWrite from '@/components/GuestBook/Write';
import GuestBookPreview from '@/components/GuestBook/Preview';
import WeddingDayWrite from '@/components/WeddingDay/Write';
import WeddingDayPreview from '@/components/WeddingDay/Preview';
import SenderWrite from '@/components/Sender/Write';
import CalendarStyleWrite from '@/components/CalendarStyle/Write';
import SenderPreview from '@/components/Sender/Preview';
import MoreOption from '@/components/MoreOption/MoreOption';
import styled from '@emotion/styled';
import Contact from '@/components/Contact/Write';
import SampleForm from '@/components/SampleForm';
import ContactPreview from '@/components/Contact/Preview';

type TemplateType = {
  id: number;
  value: string;
};

// 템플릿
const templateType: TemplateType[] = [
  { id: 1, value: 'A' },
  { id: 2, value: 'B' },
  { id: 3, value: 'C' },
  { id: 4, value: 'Img' },
];
const templateColor = [
  { id: 1, value: 'Ink Black', color: 'rgb(6, 8, 15)' },
  { id: 2, value: 'Sour Cream', color: 'rgb(255, 253, 247)' },
  { id: 3, value: 'Misty Rose', color: 'rgb(245, 230, 227)' },
  { id: 4, value: 'Dusty Ash', color: 'rgb(92, 107, 100)' },
  { id: 5, value: 'Wenge', color: 'rgb(105, 94, 78)' },
  { id: 6, value: 'Purple Violet', color: 'rgb(65, 53, 77)' },
  { id: 7, value: 'Deep Blue', color: 'rgb(8, 17, 59)' },
];

// 템플릿

export default function BoardWrite() {
  const router = useRouter();
  const handleSave = () => {
    router.push('/boards/');
  };

  // 청첩장 문구 모달
  const [openModal, setModal] = useState(false);
  const [weddingDay, setWeddingDay] = useState<Date>(new Date());

  // 추가옵션 State, Function
  const [optionData, setOptionData] = useState({
    background: '없음',
    famliy: '나눔명조',
    size: '32px',
  });

  const handleMoreOption = (value: any) => {
    const family = Object.keys(value).includes('famliy');
    const size = Object.keys(value).includes('size');

    if (family) {
      setOptionData((optionData) => {
        const updated = { ...optionData };
        updated.famliy = value.famliy;
        return updated;
      });
    } else if (size) {
      // handleFontSize(value.size);
      setOptionData((optionData) => {
        const updated = { ...optionData };
        updated.size = value.size;
        return updated;
      });
    } else {
      setOptionData((optionData) => {
        const updated = { ...optionData };
        updated.background = value.background;
        return updated;
      });
    }
  };

  interface GlobalStyleProps {
    fontSize?: string;
    fontWeight?: string;
    fontFamily?: string;
  }

  const GlobalStyle = styled.div<GlobalStyleProps>`
    background-color: green;
    font-size: ${({ fontSize }) => {
      return fontSize === '32px' ? '32px' : '48px'; // TODO : 차이 보기 위해 임시적으로 해놓음
    }};
    font-weight: ${({ fontWeight }) => {
      return fontWeight === '작게' ? '300' : '700'; // TODO : 400도 있음 -> 차이 보기 위해 임시적으로 해놓음
    }};
    font-family: ${({ fontFamily }) => {
      return fontFamily === '나눔명조' ? 'Noto Sans KR' : 'Dongle'; // TODO : 나중에 font 추가 시키기 그리고 상의해보기
    }};
  `;

  // 체크박스 상태를 관리할 상태 변수
  const [showDday, setShowDday] = useState(true);

  // 연락처정보
  const [contacts, setContacts] = useState({
    groom: {
      contact: {
        contact1: {
          title: 'Mr.',
          name: 'John Smith',
          phone: '123-456-7890',
          email: 'john.smith@email.com',
        },
        contact2: {
          title: 'Ms.',
          name: 'Jane Doe',
          phone: '123-456-7890',
          email: 'jane.doe@email.com',
        },
      },
    },
    bride: {
      contact: {
        contact1: {
          title: 'Mr.',
          name: 'John Smith',
          phone: '123-456-7890',
          email: 'john.smith@email.com',
        },
      },
    },
    host: {
      contact: {
        contact1: {
          title: 'Mr.',
          name: 'John Smith',
          phone: '123-456-7890',
          email: 'john.smith@email.com',
        },
        contact2: {
          title: 'Ms.',
          name: 'Jane Doe',
          phone: '123-456-7890',
          email: 'jane.doe@email.com',
        },
      },
    },
  });
  const [selectContact, setSelectContact] = useState({
    groom: {
      contact: {
        contact1: {
          title: 'Mr.',
          name: 'John Smith',
          phone: '123-456-7890',
          email: 'john.smith@email.com',
        },
        contact2: {
          title: 'Ms.',
          name: 'Jane Doe',
          phone: '123-456-7890',
          email: 'jane.doe@email.com',
        },
      },
    },
    // name: 'groom',
    // contact1: {
    //   title: 'Mr.',
    //   name: 'John Smith',
    //   phone: '123-456-7890',
    //   email: 'john.smith@email.com',
    // },
    // contact2: {
    //   title: 'Ms.',
    //   name: 'Jane Doe',
    //   phone: '123-456-7890',
    //   email: 'jane.doe@email.com',
    // },
  });
  // contacts 데이터를 돌려서, 만약 contacts.group이 '신랑에게 연락하기'라면
  // 그 데이터들을 아래 연락처 부분에 보여준다.

  return (
    <S.Wrapper>
      <S.ContentLeft>
        {/* Dongle 32px, 36px, 48px  */}
        <GlobalStyle fontSize={optionData.size} fontWeight={optionData.size} fontFamily={optionData.famliy}>
          <Card type="preview" color="#eee" backgroundImage="없음">
            <TemplatePreview />
          </Card>
          <Card color="white" type="preview">
            <SenderPreview />
          </Card>
          <Card title="청첩장문구" type="preview" color="#fff" backgroundImage={optionData.background}>
            <InvitationPreview />
          </Card>
          <Card title="예식일" type="preview" color="#eee" backgroundImage="없음">
            <WeddingDayPreview weddingDay={weddingDay} showDday={showDday} />
          </Card>
          <Card title="방명록" type="preview" color="#fff" backgroundImage={optionData.background}>
            <GuestBookPreview />
          </Card>
          <Card title="마음전하실곳" type="preview" color="#fff" backgroundImage={optionData.background}>
            <ContactPreview contacts={contacts} selectContact={selectContact} setSelectContact={setSelectContact} />
          </Card>
        </GlobalStyle>
      </S.ContentLeft>

      <S.ContentRight>
        <Card title="템플릿" backgroundImage="없음">
          <TemplateWrite color={templateColor} type={templateType} />
        </Card>
        <Card color="white" title="예식일" backgroundImage="없음">
          <WeddingDayWrite weddingDay={weddingDay} setWeddingDay={setWeddingDay} />
        </Card>
        <Card color="white" title="첫 화면" backgroundImage="없음">
          <SampleForm />
        </Card>
        <Card title="청첩장 문구" backgroundImage="없음">
          <InvitationWrite openModal={openModal} setModal={setModal} />
          <InvitationSampleTextModal openModal={openModal} setModal={setModal} />
        </Card>
        <Card color="white" title="보내는 사람" backgroundImage="없음">
          <SenderWrite />
        </Card>
        <Card color="white" title="캘린더 스타일" backgroundImage="없음">
          <CalendarStyleWrite showDday={showDday} setShowDday={setShowDday} />
        </Card>
        <Card title="갤러리" backgroundImage="없음" />
        <Card title="예식장 정보" backgroundImage="없음" />
        <Card title="길 안내" backgroundImage="없음" />
        <Card title="계좌 정보" backgroundImage="없음" />
        <Card color="white" title="연락처 정보" backgroundImage="없음">
          <Contact contacts={contacts} selectContact={selectContact} setSelectContact={setSelectContact} />
        </Card>
        <Card title="식전 영상" backgroundImage="없음" />
        <Card title="안내사항" backgroundImage="없음" />
        <Card title="썸네일" backgroundImage="없음" />
        <Card title="애니메이션 효과" backgroundImage="없음" />
        <Card title="배경 음악" backgroundImage="없음" />
        <Card title="방명록" backgroundImage="없음">
          <GuestBookWrite />
        </Card>
        <Card color="white" title="추가 옵션" backgroundImage="없음">
          <MoreOption optionData={optionData} handleMoreOption={handleMoreOption} />
        </Card>
      </S.ContentRight>
      <S.ContentBottom>
        <S.SubmitButton onClick={handleSave}>저장하기</S.SubmitButton>
      </S.ContentBottom>
    </S.Wrapper>
  );
}
