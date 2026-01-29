import ContentLoader from "react-content-loader";

export const FilterSkeleton = () => {
  return (
    <ContentLoader width={300} height={'100vh'}>
      <rect x="0" y="20" rx="10" ry="10" width="300" height="100vh" />
    </ContentLoader>
  );
};