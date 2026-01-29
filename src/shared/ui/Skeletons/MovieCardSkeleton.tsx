import ContentLoader from "react-content-loader";

type Props = {
  width: string;
  height: string;
}

export const MovieCardSkeleton = ({width, height}: Props) => {
  return (
    <ContentLoader width={width} height={height}>
      <rect x="0" y="20" rx="10" ry="10" width={width} height={height} />
    </ContentLoader>
  );
};