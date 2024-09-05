import { RotatingLines } from "react-loader-spinner";

export default function Spinner() {
  return (
    <div className="spinner">
      <RotatingLines strokeColor="grey" height={80} width={80} />
    </div>
  );
}
