import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import { appName, baseUrl } from '../../../config/config';
import { blurDataURL } from '../../../constants/image';
import { accessToken, refreshToken } from '../../../constants/storage';
import CustomImage from "../image/CustomImage";
import { logout } from '../../../redux/slices/auth';
import { connect } from 'react-redux';
import { useRouter } from 'next/router';

const Header = () => {

  const router = useRouter();

  const [cookies, setCookie, removeCookie] = useCookies();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    let mounted = true;
    if (mounted) {
      if (cookies[refreshToken]) {
        setUserData({
          user: "User"
        });
      } else {
        setUserData(null);
      }
    }

    return () => {
      mounted = false;
    }
  }, []);


  const logoutCookie = () => {
    // console.log("here");
    removeCookie(accessToken, { path: '/' });
    removeCookie(refreshToken, { path: '/' });
    setUserData(null);
    logout();
  }

  const handleLogout = () => {
    logoutCookie();
    router.push('/');
  }

  return (<>
    <div className="header-area py-3 border-bottom">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-3">
            <div className="header-logo position-relative">
              <Link href="/">
                <a className="d-flex w-100 h-100 position-relative">
                  <CustomImage
                    src={baseUrl + "/images/logo.png"}
                    alt={appName}
                    layout="fill"
                    objectFit="contain"
                    placeholder="blur"
                    blurDataURL={blurDataURL}
                  />
                </a>
              </Link>
            </div>
          </div>
          <div className="col-lg-9 text-end">
            <div className="header-right-links d-flex align-items-center justify-content-end">
              {userData ?
                <button type="button" className="btn btn-warning rounded-pill ms-2 px-3" onClick={() => handleLogout()}>Logout</button>
                :
                <Link href="/login">
                  <a className="btn btn-dark rounded-pill ms-2 px-3">Login</a>
                </Link>
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  </>);
};

const mapStateToProps = (state) => ({
  refreshToken: state.auth.auth.refreshToken
});

export default connect(mapStateToProps, { logout })(Header);