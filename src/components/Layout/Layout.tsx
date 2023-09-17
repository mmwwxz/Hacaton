import { FC, ReactNode } from 'react';
import { HeaderOrganism } from '../organism/HeaderOrganism/HeaderOrganism';
// import { FooterOrganism } from '../organism/FooterOrganism/FooterOrganism';

type LayoutProps = {
  children: ReactNode;
};

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <HeaderOrganism />
      <main>{children}</main>
      {/*<FooterOrganism />*/}
    </>
  );
};

export default Layout;
