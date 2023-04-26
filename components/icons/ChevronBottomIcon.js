const ChevronBottomIcon = (props) => {
  const { color = "#8F8F8F", width = 16, height = 16 } = props;

  return (
    <svg fill="none" height={height} viewBox="0 0 27 17" width={width} {...props}>
      <path d="M25 2L13.5 14L2 2" stroke={color} strokeWidth="3" />
    </svg>
  );
};

export default ChevronBottomIcon;
