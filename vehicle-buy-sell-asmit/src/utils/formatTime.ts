const formatTime = (val: string) => {
  if (!val) return;

  const match = val?.match(/(\d+)hr(\d+)min/);

  if (match) {
    const hours = parseInt(match[1], 10);
    const minutes = parseInt(match[2], 10);

    const formattedDuration = `${hours}:${minutes} min`;
    return formattedDuration;
  }
};

export default formatTime;
