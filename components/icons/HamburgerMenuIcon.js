const HamburgerMenuIcon = (props) => {
  const { height = 25, width = 27, color = "white" } = props;

  return (
    <svg fill="none" height={height} viewBox="0 0 27 25" width={width} {...props}>
      <path d="M0.751953 2.61328H26.2475" stroke={color} strokeWidth="4" />
      <path d="M0.751953 12.6133H26.2475" stroke={color} strokeWidth="4" />
      <path d="M0.751953 22.6133H26.2475" stroke={color} strokeWidth="4" />
    </svg>
  );
};

export default HamburgerMenuIcon;
