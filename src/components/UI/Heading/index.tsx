import React, { ReactNode } from 'react';

type HeadingProps = {
  className?: string;
  children: JSX.Element | ReactNode;
};

const Heading = ({ className, children }: HeadingProps) => {
  return (
    <h1
      className={`text-4xl lg:text-[4.125rem] leading-none font-bold text-[#39405E] font-main tracking-tight ${className}`}
    >
      {children}
    </h1>
  );
};

Heading.defaultProps = {
  className: `  `,
};

export default Heading;
