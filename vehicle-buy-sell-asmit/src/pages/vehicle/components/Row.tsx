import React from 'react';

interface IProps {
  label: string;
  value: string;
}

const Row: React.FC<IProps> = ({ label, value }) => {
  return (
    <div className="flex items-start gap-4 text-sm py-4 border-b last:border-0 border-light-grey">
      <p className="min-w-[150px] w-[20%] font-medium"> {label} </p>
      <p className="text-secondary"> {value} </p>
    </div>
  );
};

export default React.memo(Row);
