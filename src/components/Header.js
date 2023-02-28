import React from "react";

function Header({user, setUser}){
    return (
        <div>
            <h3>
                Welcome, {user}
            </h3>
            <button onClick={() => setUser('')}>Logout</button>
        </div>
    );
}

export default Header;