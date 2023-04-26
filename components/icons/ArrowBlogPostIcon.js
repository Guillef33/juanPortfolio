const ArrowBlogPostIcon = (props) => {
  const { color = "#232323", width = "16", height = "16" } = props;

  return (
    <svg fill="none" height={height} viewBox="0 0 15 13" width={width} {...props}>
      <path
        d="M8.8418 1.48828L12.9184 6.62816L8.8418 11.7683"
        stroke={color}
        strokeWidth="1.77694"
      />
      <path d="M12.9172 6.46484L0.833984 6.46484" stroke={color} strokeWidth="1.77694" />
    </svg>
  );
};

export default ArrowBlogPostIcon;
