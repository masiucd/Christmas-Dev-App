import * as React from 'react';

interface Props {
  className?: string;
}

const Icon: React.FC<Props> = ({ className }) => {
  return <i className={`fa ${className ? className : 'fa-facebook'}`}></i>;
};
export default Icon;
