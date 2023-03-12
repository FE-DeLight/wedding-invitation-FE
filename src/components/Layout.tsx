import styled from '@emotion/styled';
import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = styled.div`
  width: 100%;
`;

export default function LayoutComponent({ children }: LayoutProps): JSX.Element {
  return <Layout>{children}</Layout>;
}
