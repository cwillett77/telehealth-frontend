const formatDateTime = (dateTimeStr) => {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    timeZoneName: "short",
  };
  const dateTime = new Date(dateTimeStr);
  return dateTime.toLocaleDateString("en-US", options);
};

export { formatDateTime };
