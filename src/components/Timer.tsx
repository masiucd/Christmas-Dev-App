import * as React from 'react';

interface Props {}

const Timer: React.FC<Props> = () => {
  const [counter, setCounter] = React.useState<number>(0);
  const [isClicked, setIsClicked] = React.useState<boolean>(false);

  const delayCount = (amount: number): void => {
    setIsClicked(true);
    setTimeout(() => {
      setCounter(counter + 1);
    }, amount);

    setTimeout(() => {
      setIsClicked(false);
    }, amount + 100);
  };

  return (
    <>
      <h1 data-testid='counter'> {counter} </h1>
      <button
        disabled={isClicked}
        data-testid='btn-up'
        onClick={() => {
          delayCount(800);
        }}>
        Up
      </button>
      <button
        data-testid='btn-down'
        onClick={() => setCounter((prev) => prev - 1)}>
        Down
      </button>
    </>
  );
};
export default Timer;
