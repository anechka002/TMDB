import ContentLoader from "react-content-loader";

type Props = {
  width: string;
}

export const MovieCardSkeleton = ({width}: Props) => {
  return (
    <ContentLoader width={width} height={375}>
      <rect x="0" y="325" rx="10" ry="10" width="180" height="25" />
      <rect x="0" y="10" rx="10" ry="10" width="200" height="300" />
    </ContentLoader>
  );
};