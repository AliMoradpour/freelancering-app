import { ThreeDots } from "react-loader-spinner";

type Props = {
  width?: string;
  height?: string;
};

const Loading = ({ width = "75", height = "40" }: Props) => {
  return (
      <ThreeDots
      width={width}
      height={height}
      radius={9}
      color="var(--color-primary-900)"
      wrapperStyle={{
        display: "flex",
        justifyContent: 'center'
      }}
    />
  );
};

export default Loading;
