import ContentLoader from "react-content-loader";

export const SearchSkeleton = () => {
  return (
    <ContentLoader width={500} height={80}>
      <rect x="0" y="10" rx="20" ry="20" width="350" height="40" />
      <rect x="365" y="10" rx="20" ry="20" width="80" height="40" />
    </ContentLoader>
  );
};