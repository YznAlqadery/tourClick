import { useSearchParams } from "react-router-dom";

export default function useLocation() {
  const [searchParams] = useSearchParams();
  const latitude = searchParams.get("lat");
  const longitude = searchParams.get("lng");
  return [latitude, longitude];
}
