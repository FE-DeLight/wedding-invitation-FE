import React, { useRef, useState } from 'react';
import BoardWrite from '@/components/Board/Write';

export default function BoardEditPage() {
  // InvitationPhrases관련 함수
  const [openModal, setModal] = useState(false);
  const textAreaRef = useRef();
  const [text, setText] = useState({
    title: '확인',
    content: '확인',
  });
  console.log('texttexttexttext:', text);
  const sandContent = (e) => {
    const content = e.target.innerHTML;
    const replaceSpace = content.replace(/(<br>|<br\/>|<br \/>)/g, '\r\n');
    setModal(!openModal);
    setText({
      ...text,
      content: replaceSpace,
    });
  };

  const handleChange = (e) => {
    if (e.target.id === 'title') {
      setText({
        ...text,
        title: e.target.value,
      });
    } else {
      setText({
        ...text,
        content: e.target.value,
      });
    }
  };
  const showSampleText = () => {
    setModal(!openModal);
  };

  return (
    <BoardWrite
      showSampleText={showSampleText}
      sandContent={sandContent}
      openModal={openModal}
      text={text}
      textAreaRef={textAreaRef}
      setText={setText}
      handleChange={handleChange}
    />
  );
}
