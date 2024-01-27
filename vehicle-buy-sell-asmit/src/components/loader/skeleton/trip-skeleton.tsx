import React from 'react';

interface IProps {}

const TripSkeleton: React.FC<IProps> = ({}) => {
  return (
    <div className="bg-[#C7C7C7] animate-pulse shadow-lg border border-border-color rounded-md cursor-pointer overflow-hidden">
      <div className="h-56 bg-[#c7c7c7] rounded-lg"></div>
    </div>
  );
};

export default React.memo(TripSkeleton);
