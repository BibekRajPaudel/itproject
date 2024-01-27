import * as React from 'react';
import {
  addDays,
  endOfMonth,
  format,
  isBefore,
  isSameDay,
  startOfMonth,
} from 'date-fns';
import { DayPicker, useInput } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { FaCalendarAlt } from 'react-icons/fa';
import { useFormikContext } from 'formik';

interface IProps {
  isNextDayBtn?: Boolean;
  name: string;
}

const Calender: React.FC<IProps> = ({ isNextDayBtn = true, name }) => {
  const [isCalendarVisible, setCalendarVisible] = React.useState(false);
  const formik: any = useFormikContext();
  const initialValue = formik.values[name];

  const [selectedDate, setSelectedDate] = React.useState(
    initialValue || new Date()
  );
  const options: any = {
    defaultSelected: format(selectedDate, 'yyyy-MM-dd'),
    fromMonth: startOfMonth(selectedDate),
    toMonth: endOfMonth(selectedDate),
    format: 'yyyy-MM-dd',
    required: true,
    onDayClick: (day: any) => {
      setSelectedDate(day);
      setCalendarVisible(false);
      formik.setFieldValue(name, format(selectedDate, options.format));
    },
  };

  const input: any = useInput(options);

  const toggleCalendarVisibility = () => {
    setCalendarVisible((prev) => !prev);
  };

  React.useEffect(() => {
    formik.setFieldValue(name, format(selectedDate, 'yyyy-MM-dd'));
  }, []);

  React.useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (
        input.containerRef?.current &&
        !input.containerRef?.current.contains(event.target)
      ) {
        setCalendarVisible(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [input.containerRef]);

  const setToday = () => {
    const today = new Date();
    setSelectedDate(today);
    setCalendarVisible(false);
    formik.setFieldValue(name, format(today, options.format));
  };

  const setTomorrow = () => {
    const tomorrow = addDays(new Date(), 1);
    setSelectedDate(tomorrow);
    setCalendarVisible(false);
    formik.setFieldValue(name, format(tomorrow, options.format));
  };

  return (
    <div ref={input.containerRef} className="relative">
      {isCalendarVisible && (
        <div className="absolute bg-white z-[999999999999999] right-3 shadow-md top-2 border border-light-grey rounded-[10px]">
          <DayPicker
            {...input.dayPickerProps}
            fromMonth={options.fromMonth}
            toMonth={options.toMonth}
            onDayClick={options.onDayClick}
            selected={selectedDate}
            disabled={(day) =>
              isBefore(day, new Date()) && !isSameDay(day, new Date())
            }
          />
        </div>
      )}
      <div
        className={`${
          isNextDayBtn ? 'py-4 px-3' : 'py-3 px-2.5'
        } flex items-center space-x-3 border border-dark-grey rounded-[10px]`}
      >
        <FaCalendarAlt color="#1D3557" size={20} className="" />
        <input
          {...input.fieldProps}
          readOnly
          placeholder={format(selectedDate, options.format)}
          onClick={toggleCalendarVisibility}
          value={format(selectedDate, options.format)}
          className="appearance-none font-light text-dark text-sm focus-within:outline-none focus:outline-none"
        />
        <div className="md:flex sm:hidden items-center space-x-3 hidden">
          {isNextDayBtn && (
            <>
              <button
                className="bg-primary-light rounded-[10px] py-2 px-3 text-sm font-light text-dark"
                onClick={setToday}
                type="button"
              >
                Today
              </button>
              <button
                className="bg-primary-light rounded-[10px] py-2 px-3 text-sm font-light text-dark"
                onClick={setTomorrow}
                type="button"
              >
                Tomorrow
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default React.memo(Calender);
