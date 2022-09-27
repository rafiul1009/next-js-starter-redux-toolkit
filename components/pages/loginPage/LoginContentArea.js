import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useForm } from 'react-hook-form';
import { login } from '../../../redux/slices/auth';
import AuthService from "../../../services/api/auth.service";
import { useCookies } from 'react-cookie';
import { useRouter } from 'next/router';
import { Spinner } from 'react-bootstrap';
import { accessToken, refreshToken } from '../../../constants/storage';

const LoginContentArea = () => {

  const router = useRouter();

  const [cookies, setCookie] = useCookies();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { register, handleSubmit, formState: { errors } } = useForm({
    mode: 'onChange'
  });

  const onSubmit = (data) => {
    // console.log(data);
    const formData = new FormData();
    formData.append('username', data.username ? data.username : '');
    formData.append('password', data.password ? data.password : '');
    setIsSubmitting(true);

    //Move this code to after api call
    var now = new Date();
    var time = now.getTime();
    var expireTime = time + (860000 * 1000);
    now.setTime(expireTime);
    setCookie(accessToken, "dsdujkcs-sdsdjskjsdksdsdsncxzncjc", { path: '/', expires: now });
    setCookie(refreshToken, "dsdujkcs-sdsdjskjsdksdsdsncxzncjc", { path: '/' });
    login({
      loaded: true,
      loggedIn: true,
      accessToken: "dsdujkcs-sdsdjskjsdksdsdsncxzncjc",
      refreshToken: "dsdujkcs-sdsdjskjsdksdsdsncxzncjc",
    });
    router.push("/user/dashboard");

    AuthService.signIn(formData).then(
      (data) => {
        if (data) {
          // Move code here
        }
        setIsSubmitting(false);
        return Promise.resolve();
      },
      (error) => {
        // console.log(error?.response?.data?.message);
        setTimeout(() => {
          setIsSubmitting(false);
        }, 2100);
        return Promise.reject();
      }
    );
  };


  return (<>
    <div className={`login-page-content vh-100 d-flex align-items-center justify-content-center`}>
      <form autoComplete="off" onSubmit={handleSubmit(onSubmit)} className="border p-3 rounded-3">
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Username</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            defaultValue={"user"}
            {...register("username", {
              required: "Username required"
            })}
          />
          {errors.username && <div className="invalid-feedback">{errors.username.message}</div>}
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            defaultValue={"12345678"}
            {...register("password", {
              required: "Password required"
            })}
          />
          {errors.password && <div className="invalid-feedback">{errors.password.message}</div>}
        </div>
        <button type="submit" className="btn btn-primary w-100" disabled={isSubmitting}>
          {isSubmitting ?
            <span className="loading d-inline-flex align-items-center justify-content-center">
              <Spinner
                as="span"
                animation="border"
                size="sm"
                role="status"
                aria-hidden="true"
              />
            </span>
            :
            <span>Sign in</span>
          }
        </button>
      </form>
    </div>
  </>)
}

export default connect(null, { login })(LoginContentArea);