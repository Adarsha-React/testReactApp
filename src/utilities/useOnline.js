import { useEffect, useState } from "react";

export const useOnline = () => {
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    const hanldeOnline = () => {
      setIsOnline(true);
    };
    const handleOffline = () => {
      setIsOnline(false);
    };
    window.addEventListener("online", hanldeOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", hanldeOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  return isOnline;
};
