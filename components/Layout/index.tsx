import styled from '@emotion/styled';
import tw from 'twin.macro';
import {css} from '@emotion/react';
import {createContext, FC, useContext, useEffect, useState} from 'react';

export const Header = styled.header(() => [tw`bg-gray-300 h-12 flex border`]);

export const Footer = styled.footer(() => [tw`bg-gray-300 h-12 flex border`]);

export const Content = styled.main(() => [tw`flex-grow border`]);

const generateId = (() => {
  let i = 0;
  return () => {
    i += 1;
    return `${i}`;
  };
})();

const BasicSider = styled.aside(() => [tw`w-1/5 border overflow-auto`]);

export const Sider = (props: any) => {
  const {siderHook} = useContext(LayoutContext);
  const {children} = props;
  useEffect(() => {
    const uniqueId = generateId();
    siderHook.addSider(uniqueId);
    return () => siderHook.removeSider(uniqueId);
  }, []);

  return <BasicSider>{children}</BasicSider>;
};

interface BasicLayoutProps {
  hasSider: boolean;
}

const hasSider = ({hasSider = false}: BasicLayoutProps) => {
  if (hasSider) {
    return tw`flex-row`;
  } else {
    return tw`flex-col`;
  }
};

const BsicLayout: FC<BasicLayoutProps> = styled.section(
  (props: BasicLayoutProps) => [
    tw`flex overflow-auto`,
    hasSider(props),
    css`
      min-height: 90vh;
      width: 100%;
    `,
  ]
);

export interface LayoutContextProps {
  siderHook: {
    addSider: (id: string) => void;
    removeSider: (id: string) => void;
  };
}

export const LayoutContext = createContext<LayoutContextProps>({
  siderHook: {
    addSider: () => null,
    removeSider: () => null,
  },
});

export const Layout = (props: any) => {
  const [siders, setSiders] = useState<string[]>([]);
  const {children} = props;
  return (
    <LayoutContext.Provider
      value={{
        siderHook: {
          addSider: (id: string) => {
            setSiders((prev) => [...prev, id]);
          },
          removeSider: (id: string) => {
            setSiders((prev) => prev.filter((currentId) => currentId !== id));
          },
        },
      }}>
      <BsicLayout hasSider={siders.length > 0}>{children}</BsicLayout>
    </LayoutContext.Provider>
  );
};
