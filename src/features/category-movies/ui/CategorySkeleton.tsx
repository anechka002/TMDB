import ContentLoader from "react-content-loader";

export const CategorySkeleton = () => {
  return (
    <ContentLoader
      // speed={2}
      width={280}
      height={465}
      viewBox="0 0 280 465"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="20" y="325" rx="10" ry="10" width="180" height="25" />
      <rect x="10" y="10" rx="10" ry="10" width="200" height="300" />
    </ContentLoader>

  );
};
