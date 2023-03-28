import React from 'react';

interface Props {
  children?: string;
}
function PageTitleComponent(props: Props) {
  return <div>{props?.children}</div>;
}

export default PageTitleComponent;
