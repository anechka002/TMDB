import ContentLoader from "react-content-loader";

export const MainPageSkeleton = () => {
  return (
    <ContentLoader width={'100%'} height={400}>
      <rect x="0" y="200" rx="10" ry="10" width="350" height="48" />
      <rect x="0" y="263" rx="10" ry="10" width="424" height="35" />
      <rect x="0" y="312" rx="10" ry="10" width="480" height="35" />
      <rect x="500" y="312" rx="10" ry="10" width="80" height="35" />
    </ContentLoader>
  )
};