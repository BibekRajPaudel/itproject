import { Card, Container } from '@/components';
import React from 'react';
import Row from './components/Row';

interface IProps {}

const SingleVehicle: React.FC<IProps> = ({}) => {
  return (
    <div>
      <Container className="">
        <div className="grid grid-cols-12 gap-5 min-h-screen">
          <div className="col-span-3">
            <img
              src="https://cdn03.hamrobazaar.com/User/Posts/2023/06/21/8b9e1ab8-1fa8-9cb0-3880-f39e0bf04523.webp?x-image-process=image/resize,m_lfit,h_500,w_500"
              alt="vehicles"
              className="h-60 w-full object-cover rounded-md"
            />
            <div className="flex items-center justify-between py-3.5 text-sm font-semibold text-dark border-b border-light-grey">
              <p className="">Like new</p>
              <p className="">रू. 10,200</p>
            </div>
            <div className=" py-2">
              <h1 className="text-primary font-semibold text-sm">
                Descriptions :{' '}
              </h1>
              <p className="text-xs text-secondary mt-1">
                {`- land size: 10.5 Anna
- 1.5 km from Budhanilkantha Mandir.
- Fabulous City view from the plot.
- It's a plotting and hence has road access with gutter pipeline, electricity pole shorted.
- Has a nea...`}
              </p>
            </div>
          </div>
          <div className="col-span-5 border-l border-r border-light-grey px-5">
            <h3 className="text-primary font-bold text-center text-xl">
              Bullet Car Brand New For Sale
            </h3>
            <div className="my-10">
              <h5 className="text-lg font-semibold text-secondary mb-4">
                General
              </h5>
              <div className="bg-light-grey bg-opacity-20 rounded-xl p-5">
                <Row
                  label="Location"
                  value="simali mahila samuha, Taulung road, Budhanilkantha-01, बूढानीलकण्ठ, बूढानिलकण्ठ नगरपालिका, काठमाडौं, बाग्मती प्रदेश, 22644, नेपाल"
                />
                <Row label="Delivery" value="Not Available" />
                <Row label="Negotiable" value="Negotiable" />
                <Row label="Posted on" value="8 Moths ago" />
              </div>
            </div>
            <div className="my-10">
              <h5 className="text-lg font-semibold text-secondary mb-4">
                Specification
              </h5>
              <div className="bg-light-grey bg-opacity-20 rounded-xl p-5">
                <Row label="Colour" value="Red" />
                <Row label="Make Year" value="2022" />
                <Row label="Engine (CC)" value="1199" />
                <Row label="Fuel" value="Petrol" />
                <Row label="Kilometer Run" value="1726 KM" />
              </div>
            </div>
          </div>
          <div className="col-span-4">
            <div className="grid grid-cols-2 gap-5 mt-14">
              {Array(4)
                .fill('')
                .map((_, idx) => (
                  <Card key={idx} isSmall />
                ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default React.memo(SingleVehicle);
