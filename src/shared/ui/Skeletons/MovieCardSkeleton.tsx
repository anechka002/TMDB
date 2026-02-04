import ContentLoader from "react-content-loader";

type Props = {
  width: string;
  height: string;
}

export const MovieCardSkeleton = ({width, height}: Props) => {
  return (
    <ContentLoader width={width} height={height}>
      <rect x="10" y="20" rx="0" ry="0" width={width} height={height} />
    </ContentLoader>
  );
};