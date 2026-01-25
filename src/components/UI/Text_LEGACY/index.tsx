import React, { ReactNode } from 'react';

type TextProp = {
  className?: string;
  children: JSX.Element | ReactNode;
};

const Text = ({ className, children }: TextProp) => {
  return <p className={`font-text text-xl ${className}`}>{children}</p>;
};

Text.defaultProps = {
  className: `  `,
};

export default Text;
