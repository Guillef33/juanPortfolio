const ArrowFormIcon = (props) => {
  const { color = "#232323", width = 16, height = 16 } = props;

  return (
    <svg fill="none" height={height} viewBox="0 0 46 25" width={width} {...props}>
      <path d="M32.3818 1.71533L42.9999 12.333L32.3818 22.9512" stroke={color} strokeWidth="3.4" />
      <path d="M42.9999 12.3325H0.419922" stroke={color} strokeWidth="3.4" />
    </svg>
  );
};

export default ArrowFormIcon;
