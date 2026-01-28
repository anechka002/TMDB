import ContentLoader from "react-content-loader";

export const TitleSkeleton = () => {
  return (
    <ContentLoader width={240} height={30}>
      <rect x="0" y="0" rx="10" ry="10" width="240" height="30" />
    </ContentLoader>
  );
};