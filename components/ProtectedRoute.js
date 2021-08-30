import { useContext } from "react";
import { AuthContext } from "../context";
import { LOGIN_PAGE, REGISTER_PAGE } from './../constant/index';

const isBrowser = () => typeof window !== "undefined";

const ProtectedRoute = ({router, children}) => {
    const auth = useContext(AuthContext);

    const isAuthenticated = auth.user?.isLoggedIn;

    let unprotectedRoutes = [
        LOGIN_PAGE,
        REGISTER_PAGE,
    ];

    let pathIsProtected = unprotectedRoutes.indexOf(router.pathname) === -1;

    if (isBrowser() && !isAuthenticated && pathIsProtected) {
        router.push(LOGIN_PAGE);
    }

    return children;
}

export default ProtectedRoute;