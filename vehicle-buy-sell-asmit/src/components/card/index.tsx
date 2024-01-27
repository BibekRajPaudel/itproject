import React from 'react';
import { Link } from 'react-router-dom';

interface IProps {
  className?: string;
  isSmall?: boolean;
}

const Card: React.FC<IProps> = ({ className, isSmall = false }) => (
  <Link to={`/vehicle/333`}>
    <div
      className={`${className} bg-white rounded-md cursor-pointer border border-light-grey`}
    >
      <div
        className={`${
          !isSmall ? 'h-60' : 'h-32'
        } w-full bg-cover rounded-t-md hover:scale-[0.9] hover:transition-all hover:duration-500 hover:ease-in-out`}
        style={{
          backgroundImage: `url(${'https://cdn.pixabay.com/photo/2019/09/19/07/26/extreme-4488462_1280.jpg'})`,
        }}
      />
      <div className="mt-1">
        <div className="px-3 py-2">
          <h1
            className={`${
              isSmall ? 'text-sm' : 'text-xl'
            } text-primary font-semibold`}
          >
            Bullet Classic
          </h1>
          <p
            className={`${
              isSmall ? 'text-[10px]' : 'text-xs'
            } text-secondary  pt-2 pb-1`}
          >
            Brand New
          </p>
        </div>
        <div className="flex items-center justify-between py-5 border-t border-light-grey px-3">
          <p className="text-xs text-secondary font-semibold"> Jan 4 2024 </p>

          <h6 className="text-secondary text-xs font-semibold">रू. 10,200</h6>
        </div>
      </div>
    </div>
  </Link>
);

export default React.memo(Card);
