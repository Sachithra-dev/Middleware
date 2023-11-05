import React, { useEffect, useState } from "react";
import Dashboard from "./pages/Dashboard/Dashboard";
import LoadingSpinner from "./components/loading";

const AuthCheck = ({ token, userID, loading }) => {
    if (loading) {
        return <LoadingSpinner />;
    }
    return <Dashboard token={token} />;
};

export default AuthCheck;
