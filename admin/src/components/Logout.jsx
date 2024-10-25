import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = ({setAuth}) => {

    const navigation = useNavigate();

    const logout = async () => {
        try {
            const res = await fetch('/logout', {
                method : "GET",
                headers : {
                    Accept : "application/json",
                    "Content-Type" : "application/json"
                },
                credentials : "include"
            });

            if(res.status === 401 || !res ){
                window.alert("Please Logout Later");
            }else{
                setAuth(false);
                navigation('/');
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        logout();
    }, []);

    return (
        <div>
            
        </div>
    );
}

export default Logout;
