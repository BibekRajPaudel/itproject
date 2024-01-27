const formatDate = (date: any) => {
  const options: any = { day: '2-digit', month: '2-digit', year: 'numeric' };
  const formatter = new Intl.DateTimeFormat('en-GB', options);
  return formatter.format(date);
};

export default formatDate;
