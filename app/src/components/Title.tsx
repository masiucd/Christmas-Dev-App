import * as React from 'react';

interface Props {
  mainTitle: string;
  subTitle?: string;
}

const Title: React.FC<Props> = ({ mainTitle, subTitle }) => {
  const [on, setOn] = React.useState<boolean>(false);
  return (
    <div className='mainTitle' data-testid='mainTitle'>
      <h1> {mainTitle} </h1> <h3> {subTitle} </h3>
      <button data-testid='cta-btn' onClick={() => setOn((prev) => !prev)}>
        {on ? 'hello' : 'cta button'}
      </button>
    </div>
  );
};
export default Title;
