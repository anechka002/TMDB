import ContentLoader from "react-content-loader";

export const TitleSkeleton = () => {
  return (
    <ContentLoader width={240} height={50}>
      <rect x="0" y="20" rx="10" ry="10" width="240" height="30" />
    </ContentLoader>
  );
};