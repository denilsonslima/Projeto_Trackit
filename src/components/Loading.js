import { ThreeDots } from "react-loader-spinner";

export default function Loading({ width, height }) {
  return (
    <ThreeDots
      height={height}
      radius="9"
      color="#ffffff"
      ariaLabel="three-dots-loading"
      wrapperStyle={{}}
      wrapperClassName=""
      visible={true}
    />
  );
}
