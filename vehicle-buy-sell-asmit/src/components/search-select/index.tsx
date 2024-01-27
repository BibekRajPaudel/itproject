import { FieldProps } from 'formik';
import { memo } from 'react';
import Select from 'react-select';

interface CustomSelectProps extends FieldProps {
  options: any;
  isMulti?: boolean;
  className?: string;
  placeholder?: string;
  label?: string;
  icon: any;
  borderColor?: string;
}

export const CustomSelect = ({
  className,
  placeholder,
  field,
  form,
  options,
  isMulti = false,
  label = '',
  icon,
  borderColor,
}: CustomSelectProps) => {
  const customStylesMain = {
    control: (provided: any) => ({
      ...provided,
      padding: '10px 30px',
      borderRadius: '10px',
      outline: 'none',
      fontSize: '14px',
      fontWeight: '300',
      color: '#1D3557',
      focus: 'none',
      border: `1.5px solid ${borderColor ? borderColor : '#ccc'} !important`,
    }),
    indicatorSeparator: () => ({
      display: 'none',
    }),
    placeholder: (provided: any) => ({
      ...provided,
      color: '#9E9E9E',
      fontSize: '14px',
      fontWeight: '300',
    }),

    option: (provided: any, state: any) => ({
      ...provided,
      backgroundColor: state.isFocused ? '#E63946' : '#fff',
      color: state.isFocused ? 'white' : 'black',
      fontWeight: '400',
      fontSize: '14px',
      '&:hover': {
        backgroundColor: '#E63946',
        color: 'white',
      },
      zIndex: `99999999 !important`,
      // position: 'absolute',
      top: 0,
    }),
  };

  const filterOptions = options
    ? options?.map((item: { name: string; id: string }) => {
        return {
          label: item?.name,
          value: item?.id,
        };
      })
    : [];

  const onChange = (option: any) => {
    form.setFieldValue(field.name, option);
  };
  const getValue = () => {
    if (filterOptions) {
      return filterOptions.find(
        (option: { label: string }) => option === field.value
      );
    }
    return null;
  };

  console.log('get value', getValue());

  return (
    <div className="mb-3">
      <label
        className={`font-semibold text-xs  text-secondary block pb-2`}
        htmlFor={field.name}
      >
        {label}
      </label>
      <Select
        components={{
          DropdownIndicator: () => (icon ? icon : null),
          IndicatorSeparator: () => null,
        }}
        className={`${className} flex-1`}
        name={field.name}
        value={getValue()}
        onChange={onChange}
        placeholder={placeholder}
        options={filterOptions}
        isMulti={isMulti}
        classNamePrefix="react-select"
        styles={customStylesMain}
        theme={(theme) => ({
          ...theme,
          colors: {
            ...theme.colors,
            primary25: '#002a32cc',
            primary: '#002a32cc',
          },
        })}
      />
    </div>
  );
};

export default memo(CustomSelect);
