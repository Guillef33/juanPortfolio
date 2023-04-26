const FacebookIcon = (props) => {
  const { color = "#232323", width = 16, height = 16 } = props;

  return (
    <svg fill={color} height={height} viewBox="0 0 9 20" width={width} {...props}>
      <path d="M2.25718 19.5578H6.05218V10.0588H8.70018L8.98118 6.87775H6.05218V5.06575C6.05218 4.31675 6.20318 4.01875 6.92918 4.01875H8.98218V0.71875H6.35218C3.52918 0.71875 2.25218 1.96175 2.25218 4.34075V6.87775H0.28418V10.0988H2.25718V19.5578Z" />
    </svg>
  );
};

export default FacebookIcon;
