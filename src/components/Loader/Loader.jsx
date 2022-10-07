import { RotatingLines } from 'react-loader-spinner';



export default function Loader() {
  return (
    <RotatingLines
      strokeColor="#41d947"
      strokeWidth="3"
      animationDuration="2.5"
      width="100"
      visible={true}
    />
  );
}
