
import React, { useEffect } from "react";
import { getAuth } from "firebase/auth";
import { useNavigate } from "react-router-dom";


const Dashboard = () => {
    const auth = getAuth();
    const user = auth.currentUser;
    const navigate = useNavigate();

    useEffect(()=>{
        if (user === null) {
            navigate("/error");
        }
    },[]);



    if (user !== null) {
        const email = user.email;
        console.log(email)
        console.log(user)
        return (
            <>
                <div>
                    <h1>
                        hello world
                    </h1>
                </div>
            </>
        );
    } else {
        return (<></>)
    }
}

export default Dashboard;