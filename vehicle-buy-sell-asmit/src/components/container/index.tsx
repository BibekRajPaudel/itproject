import React from 'react';

interface IProps {
  className?: string;
  children: React.ReactNode;
  notPadding?: boolean;
}

const Container: React.FC<IProps> = ({ children, className, notPadding }) => (
  <div
    className={`container lg:max-w-[10px] md:max-w-[720px] sm:max-w-[540px] xl:max-w-[1140px] 2xl:max-w-[1280px] w-full mx-auto ${className} ${
      !notPadding && 'py-10'
    }`}
  >
    {children}
  </div>
);

export default React.memo(Container);
