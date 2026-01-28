import ContentLoader from "react-content-loader";

export const TabsSkeleton = () => {
  return (
    <ContentLoader width={600} height={40}>
      <rect x="15" y="10" rx="10" ry="10" width="130" height="30" />
      <rect x="160" y="10" rx="10" ry="10" width="130" height="30" />
      <rect x="300" y="10" rx="10" ry="10" width="130" height="30" />
      <rect x="440" y="10" rx="10" ry="10" width="130" height="30" />
    </ContentLoader>
  );
};