import React, { ReactNode } from 'react';

type HeadingProps = {
  className?: string;
  children: JSX.Element | ReactNode;
};

const Heading = ({ className, children }: HeadingProps) => {
  return (
    <h1
      className={`font-heading font-semibold md:text-4xl lg:text-5xl ${className}`}
    >
      {children}
    </h1>
  );
};

Heading.defaultProps = {
  className: `  `,
};

export default Heading;
