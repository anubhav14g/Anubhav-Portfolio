import React from "react";

function Image(){
    return (
        <img src={process.env.PUBLIC_URL+"/static/images/profilePhoto.jpeg"} alt="Anubhav Goyal" className="about-image"></img>
    );
}

export default Image;