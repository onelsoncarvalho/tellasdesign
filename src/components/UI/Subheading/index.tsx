import React, { ReactNode } from 'react';

type SubHeadingProps = {
  className?: string;
  children: JSX.Element | ReactNode;
};

const SubHeading = ({ className, children }: SubHeadingProps) => {
  return (
    <h2
      className={`font-heading font-semibold font-medium text-5xl ${className}`}
    >
      {children}
    </h2>
  );
};

SubHeading.defaultProps = {
  className: `  `,
};

export default SubHeading;
