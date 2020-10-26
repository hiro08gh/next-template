import React from 'react';
import { GlobalStyles } from '@/styles/globalStyles';

type Props = {
  children: React.ReactNode;
};

export const MainLayout: React.FC<Props> = (props) => {
  const { children } = props;
  return (
    <div className="main">
      <GlobalStyles />
      {children}
    </div>
  );
};
