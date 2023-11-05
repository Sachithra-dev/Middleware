import React, { useEffect, useState } from "react";
import Navigation from "./components/Navigation/Navigation";
import LoadingSpinner from "./components/loading";

const AuthCheck = ({ token, userID, loading }) => {
    if (loading) {
        return <LoadingSpinner />;
    }
    return <Navigation token={token} />;
};

export default AuthCheck;
