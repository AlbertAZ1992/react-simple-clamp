import React from 'react';

type Props = {
  label: string;
  count: number;
  onIncrement: () => void;
};

const FCCounter: React.FC<Props> = (properties) => {
  const { label, count, onIncrement } = properties;

  return (
    <div>
      <span>
        {label}: {count}
      </span>
      <div role="button" tabIndex={0} onClick={() => {}} onKeyDown={onIncrement}>
        Increment
      </div>
    </div>
  );
};

export default FCCounter;
// export default {};
