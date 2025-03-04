import { ThreeDots } from "react-loader-spinner";

type Props = {
  height?: string;
  width?: string;
};

const Loading: React.FC<Props> = ({ height = "75", width = "40" }) => {
  return (
    <ThreeDots
      height={height}
      width={width}
      radius={9}
      color="var(--color-primary-900)"
      wrapperStyle={{
        display: "flex",
        justifyContent: "center",
      }}
    />
  );
};
export default Loading;
