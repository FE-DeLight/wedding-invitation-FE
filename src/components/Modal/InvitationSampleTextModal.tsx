import React from 'react';
import * as S from '@/components/Modal/InvitationSampleTextStyle';
import { IoIosClose } from 'react-icons/io';
import { useDispatch, useSelector } from 'react-redux';
import { setText } from '@/store/invitationSlice';

export default function InvitationSampleTextModal({ openModal, setModal }: any) {
  const dispatch = useDispatch();
  const { text } = useSelector((state: any) => state.invitation); // Redux 스토어의 상태 가져오기

  const sandContent = (e: any) => {
    const content = e.target.innerHTML;
    const replaceSpace = content.replace(/(<br>|<br\/>|<br \/>)/g, '\r\n');
    setModal(!openModal);
    dispatch(
      setText({
        ...text,
        content: replaceSpace,
      }),
    );
  };

  const showSampleText = () => {
    setModal(!openModal);
  };

  return (
    openModal && (
      <S.ModalLayout>
        <S.ModalHeader>
          <header>샘플테스트</header>
          <button onClick={showSampleText}>
            <IoIosClose size={25} />
          </button>
        </S.ModalHeader>
        <S.ModalBody>
          <div>
            <S.SelectSample onClick={sandContent}>
              평생을 함께하고 싶은 사람이 생겼습니다.
              <br />
              <br />
              처음처럼 변치않는 마음으로 서로 아끼며
              <br />
              예쁘게 살겠습니다.
              <br />
              <br />
              부디 함께하시어
              <br />
              저희의 하나됨을 따듯한 미소로 축복해주시기를 바랍니다.
            </S.SelectSample>
            <S.SelectSample onClick={sandContent}>
              서로 다른 두 사람이 만나 <br />
              인생이라는 같은 길을 걷고자 합니다.
              <br />
              <br />
              모두가 어려운 시기, <br />
              결혼소식을 전하게 되어 마음이 무겁습니다.
              <br />
              <br />
              참석이 어려우시더라도, <br />
              축복해주시는 마음에 감사함을 가지며 서로
              <br />더 존중하고 사랑하며 살겠습니다.
              <br />
              <br /> 신랑 신부 올림
            </S.SelectSample>
            <S.SelectSample onClick={sandContent}>
              더 이상 헤어지는 길을 아쉬워하고 싶지 않습니다.
              <br />
              <br />
              오랜 만남 끝에 저희 두 사람이 하나되는 날<br />
              귀한 분들을 모시고 평생의 서약을 올리고자 합니다.
              <br />
              <br />
              저희의 첫 시작을 내딛는 ㅇ월의 오후.
              <br />
              참석해주셔서 함께 축복해주시면 감사하겠습니다.
              <br />
              <br />
              신랑 신부 올림
            </S.SelectSample>
            <S.SelectSample onClick={sandContent}>
              함께 맞이하는 N번째 봄<br />
              이제 함께라는 싹을 틔우려 합니다.
              <br />
              <br />
              하객 여러분의 관심과 애정이라는 거름으로
              <br />
              저희의 시작을 응원해주시면 감사하겠습니다.
              <br />
              <br />
              저희 두 사람 늘 봄날처럼 밝고
              <br />
              행복하게 살도록 노력하겠습니다.
              <br />
              감사합니다.
              <br />
            </S.SelectSample>
          </div>
        </S.ModalBody>
      </S.ModalLayout>
    )
  );
}
