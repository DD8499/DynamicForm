import React from "react";

interface ErrorProps {}

const TextError: React.FC<ErrorProps> = (props: any) => {
  return <div className="error">{props.children}</div>;
};

export default TextError;
