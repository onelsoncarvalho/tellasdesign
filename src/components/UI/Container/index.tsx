import React, { ReactNode } from 'react';

type ContainerProps = {
  className?: string;
  children: JSX.Element | ReactNode;
};

const Container = ({ className, children }: ContainerProps) => {
  return (
    <div className={`container mx-auto h-full px-4 md:px-8 ${className}`}>
      {children}
    </div>
  );
};

Container.defaultProps = {
  className: `  `,
};

export default Container;
