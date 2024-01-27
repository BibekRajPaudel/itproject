import React from 'react';
import { FaUserAlt } from 'react-icons/fa';
import Container from '../container';
import Modal from '../modal';
import { Login } from '@/pages';
import { useDispatch, useSelector } from 'react-redux';
import { modalAction } from '@/redux/action/modal.action';
import { Link } from 'react-router-dom';

interface IProps {}

const navbarData = [
  {
    id: 0,
    title: 'Home',
    link: '/',
  },
  {
    id: 1,
    title: 'Bike',
    link: '/',
  },
  {
    id: 2,
    title: 'Car',
    link: '/',
  },
  {
    id: 3,
    title: 'About us',
    link: '/',
  },
  {
    id: 4,
    title: 'Contact Us',
    link: '/',
  },
];

const Navbar: React.FC<IProps> = ({}) => {
  const modalData = useSelector((state: any) => state?.modalData);
  const dispatch: any = useDispatch();
  const handleModalOpen = () => {
    dispatch(modalAction(true));
  };
  const handleModalClose = () => {
    dispatch(modalAction(false));
  };
  console.log('modal state', modalData);

  return (
    <div className="bg-white py-6 px-4 sm:px-4 md:px-0 border-b border-light-grey">
      <Container notPadding>
        <div className="flex items-center justify-between text-primary">
          <h1>Vehicle</h1>
          <div className="flex items-center gap-10">
            {navbarData?.map((item) => (
              <Link to={item?.link} key={item?.id} className="text-sm">
                {item?.title}
              </Link>
            ))}
            <button
              className="flex items-center gap-2.5"
              onClick={handleModalOpen}
            >
              <FaUserAlt />
              <p className="font-medium"> Login / Signup</p>
            </button>
          </div>
        </div>
      </Container>
      {modalData?.isOpen && (
        <Modal modalClose={handleModalClose}>
          <Login />
        </Modal>
      )}
    </div>
  );
};

export default React.memo(Navbar);
