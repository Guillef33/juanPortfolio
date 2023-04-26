const ChevronRightIcon = (props) => {
  const { color = "#5D5D5D", width = 16, height = 16 } = props;

  return (
    <svg fill="none" height={height} viewBox="0 0 10 16" width={width} {...props}>
      <path d="M1.25 14.5L7.75 8L1.25 1.5" stroke={color} strokeWidth="2" />
    </svg>
  );
};

export default ChevronRightIcon;
