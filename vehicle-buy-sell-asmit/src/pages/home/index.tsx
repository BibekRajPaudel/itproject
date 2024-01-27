import React from 'react';
import { Card, Container } from '@/components';
import { TbPlayerTrackNextFilled } from 'react-icons/tb';
import { Link } from 'react-router-dom';

interface IProps {}

const Home: React.FC<IProps> = ({}) => {
  return (
    <main className="overflow-hidden">
      <div
        className="bg-no-repeat bg-cover relative h-screen bg-fixed"
        style={{
          backgroundImage: `url(${'https://cdn.pixabay.com/photo/2019/09/19/07/26/extreme-4488462_1280.jpg'})`,
        }}
      >
        <div className="absolute center">
          <h1 className="text-5xl text-white font-bold text-center">
            Vehicle Renting Service
          </h1>
          <p className="text-white text-center mt-5">
            We provide the best vehicle renting service in Nepal
          </p>
        </div>
      </div>

      <section className="bg-light-grey">
        <Container>
          <div className="py-10">
            <div className="flex items-center justify-between">
              <h1 className="text-secondary font-extrabold text-3xl">
                Our Best Bike
              </h1>
              <div className="flex items-center gap-2 bg-primary text-white rounded-lg px-4 py-2">
                <Link to={'/'} className="text-xs font-semibold">
                  Show more
                </Link>
                <TbPlayerTrackNextFilled color="#fff" />
              </div>
            </div>
            <div className="grid grid-cols-4 gap-5 mt-14">
              {Array(4)
                .fill('')
                .map((_, idx) => (
                  <Card key={idx} />
                ))}
            </div>
          </div>
        </Container>
      </section>
      <Container>
        <div className="py-10">
          <div className="flex items-center justify-between">
            <h1 className="text-secondary font-extrabold text-3xl">
              Our Best Car
            </h1>
            <div className="flex items-center gap-2 bg-primary text-white rounded-lg p-2">
              <Link to={'/'} className="text-xs font-semibold">
                Show more
              </Link>
              <TbPlayerTrackNextFilled color="#fff" />
            </div>
          </div>
          <div className="grid grid-cols-4 gap-5 mt-14">
            {Array(4)
              .fill('')
              .map((_, idx) => (
                <Card key={idx} />
              ))}
          </div>
        </div>
      </Container>
    </main>
  );
};

export default React.memo(Home);
