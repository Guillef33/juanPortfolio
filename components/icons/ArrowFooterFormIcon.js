const ArrowFooterFormIcon = (props) => {
  const { color = "#696969", width = 16, height = 16 } = props;

  return (
    <svg fill="none" height={height} viewBox="0 0 21 12" width={width} {...props}>
      <path d="M15.1562 1.27148L20.0002 6.11523L15.1562 10.9595" stroke={color} strokeWidth="1.4" />
      <path d="M20.0002 6.11523H0.573242" stroke={color} strokeWidth="1.4" />
    </svg>
  );
};

export default ArrowFooterFormIcon;
