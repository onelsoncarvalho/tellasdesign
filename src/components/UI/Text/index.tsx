import React, { ReactNode } from 'react';

type TextProp = {
  className?: string;
  children: JSX.Element | ReactNode;
};

const Text = ({ className, children }: TextProp) => {
  // Light Gray color: text-[#6d748f]
  return (
    <p
      className={`text-[1.125rem] lg:text-[1.25rem] font-medium leading-tight font-main max-w-lg ${className}`}
    >
      {children}
    </p>
  );
};

Text.defaultProps = {
  className: `  `,
};

export default Text;
