import React, {createContext, useContext, useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {connect, useDispatch} from 'react-redux';
import {
  FETCH_ERROR,
  FETCH_START,
  FETCH_SUCCESS,
} from 'shared/constants/ActionTypes';
import jwtAxios, {setAuthToken} from './index';
import {addAccessTokenToAxios, login} from "../../../../redux/actions";

const JWTAuthContext = createContext();
const JWTAuthActionsContext = createContext();

export const useJWTAuth = () => useContext(JWTAuthContext);

export const useJWTAuthActions = () => useContext(JWTAuthActionsContext);

const JWTAuthAuthProvider = ({children,user,login}) => {
  const [JWTAuthData, setJWTAuthData] = useState({
    user: null,
    isAuthenticated: false,
    isLoading: true,
  });
  const dispatch = useDispatch();

  useEffect(() => {
    const getAuthUser = () => {
      const token = localStorage.getItem('token');
      const user = JSON.parse(localStorage.getItem('user'));
      if (!token) {
        setJWTAuthData({
          user: undefined,
          isLoading: false,
          isAuthenticated: false,
        });
        return;
      }
      console.log({token});
      addAccessTokenToAxios({access_token:token})
      setAuthToken(token);
      setJWTAuthData({
        user,
        isLoading: false,
        isAuthenticated: true,
      });
    };

    getAuthUser();
  }, []);

  const signInUser = async ({email, password}) => {
    dispatch({type: FETCH_START});
    try {
      login({email,password}).then(response=>{
        localStorage.setItem('token', response.access_token);
        setAuthToken(response.access_token);
        localStorage.setItem('user', JSON.stringify(response.user));
        setJWTAuthData({
          user: response?.user,
          isAuthenticated: true,
          isLoading: false
        });
        dispatch({type: FETCH_SUCCESS});
      });
    } catch (error) {
      setJWTAuthData({
        ...JWTAuthData,
        isAuthenticated: false,
        isLoading: false,
      });
      dispatch({
        type: FETCH_ERROR,
        payload: error?.response?.data?.error || 'Something went wrong',
      });
    }
  };

  const signUpUser = async ({name, email, password}) => {
    dispatch({type: FETCH_START});
    try {
      const {data} = await jwtAxios.post('users', {name, email, password});
      localStorage.setItem('token', data.data.token);
      localStorage.setItem('user', data.token);

      setAuthToken(data.token);
      const res = await jwtAxios.get('/auth');
      setJWTAuthData({
        user: res.data,
        isAuthenticated: true,
        isLoading: false,
      });
      dispatch({type: FETCH_SUCCESS});
    } catch (error) {
      setJWTAuthData({
        ...JWTAuthData,
        isAuthenticated: false,
        isLoading: false,
      });
      console.log('error:', error.response.data.error);
      dispatch({
        type: FETCH_ERROR,
        payload: error?.response?.data?.error || 'Something went wrong',
      });
    }
  };

  const logout = async () => {
    localStorage.removeItem('token');
    setAuthToken();
    setJWTAuthData({
      user: null,
      isLoading: false,
      isAuthenticated: false,
    });
  };

  return (
    <JWTAuthContext.Provider
      value={{
        ...JWTAuthData,
      }}
    >
      <JWTAuthActionsContext.Provider
        value={{
          signUpUser,
          signInUser,
          logout,
        }}
      >
        {children}
      </JWTAuthActionsContext.Provider>
    </JWTAuthContext.Provider>
  );
};
const mapStateToProps= (state)=>({user:state.user})
const mapDispatchToProps= {login}
export default connect(mapStateToProps,mapDispatchToProps)(JWTAuthAuthProvider);

JWTAuthAuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
