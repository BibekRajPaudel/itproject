import React from 'react';

interface IProps {
  children: React.ReactNode;
}

const AuthLayout: React.FC<IProps> = ({ children }) => {
  return (
    <div className="grid md:grid-cols-2 sm:grid-cols-1 grid-cols-1">
      {children}
      <div
        className="bg-no-repeat bg-cover md:relative sm:hidden hidden "
        style={{
          backgroundImage: `url(${'https://cdn.pixabay.com/photo/2014/10/09/23/36/mountains-482689_1280.jpg'})`,
        }}
      >
        <div className="absolute bottom-10 left-10">
          <h3 className="text-white font-medium text-2xl">
            Have a comfortable journey with us
          </h3>
        </div>
      </div>
    </div>
  );
};

export default React.memo(AuthLayout);
