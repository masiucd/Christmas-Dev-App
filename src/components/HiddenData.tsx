import * as React from 'react';

export interface IHiddenMessageProps {
  children: React.ReactNode;
}

const HiddenData: React.FC<IHiddenMessageProps> = ({ children }) => {
  const [showData, setShowData] = React.useState<boolean>(false);
  return (
    <div>
      <label htmlFor='toggle'>show</label>
      <input
        type='checkbox'
        id='toggle'
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setShowData(e.target.checked)
        }
      />
      {showData && children}
    </div>
  );
};

export default HiddenData;
