import ContentLoader from "react-content-loader";

export const MainPageSkeleton = () => {
  return (
    <ContentLoader width={'100%'} height={700}>
      <rect x="0" y="600" rx="4" ry="4" width="271" height="20" />
      <rect x="0" y="77" rx="10" ry="10" width={"100%"} height="500" />
    </ContentLoader>
  )
};