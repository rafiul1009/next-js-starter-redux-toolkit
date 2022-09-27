import React, { useEffect } from 'react';
import Image from "next/image";
import { useCookies } from 'react-cookie';
import { refreshToken } from '../../../constants/storage';
import { useRouter } from 'next/router';

const ProtectedRoute = ({ children }) => {

  const [cookies, setCookie] = useCookies([refreshToken]);
  const router = useRouter();

  useEffect(() => {
    let mounted = true;
    if (mounted) {
      if (!cookies[refreshToken]) {
        router.push('/');
      }
    }
    return () => {

    }
  }, [refreshToken]);

  return (
    <>{children}</>
  );
}
export default ProtectedRoute;