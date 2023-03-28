import React from 'react';
import { Title } from './styles';

interface Props {
  children?: string;
}
function PageTitleComponent(props: Props) {
  return <Title>{props?.children}</Title>;
}

export default PageTitleComponent;
