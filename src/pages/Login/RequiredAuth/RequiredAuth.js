import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation, useParams } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';

const RequiredAuth = ({ children }) => {
    const { itemId } = useParams();
    const [user, loading] = useAuthState(auth);
    const location = useLocation();
    if (loading) {
        return <Loading></Loading>
    }
    if (!user) {
        const path = itemId ? "/login?id=" + itemId : '/login'
        return <Navigate to={path} state={{ from: location }} replace />
    }
    return children;
};

export default RequiredAuth;