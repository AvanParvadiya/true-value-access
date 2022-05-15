import { useState } from "react";
import { Link, useParams, Navigate } from "react-router-dom";

export const UserDetails = ({ data }) => {
  const href = useParams();

  const userData = useState(data);

  
  const UserDetails = userData[0].find((user) => {
    return user.id == href.id;
  });
  
  return (
    <>
      {UserDetails === undefined && <Navigate to="/users" />}
      {UserDetails !== undefined && (
        <div>
          <div>
            <Link to={"/users"}>
              <img
                style={{ maxHeight: "30px" }}
                src="data:image/png;base64,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"
                alt="back"
              />
            </Link>
          </div>
          <br />
          <div className="main-container">
            <div>
              {" "}
              First Name : <strong>{UserDetails.first_name}</strong>
            </div>
            <div>
              {" "}
              Last Name : <strong>{UserDetails.last_name}</strong>
            </div>
            <div>
              {" "}
              City : <strong>{UserDetails.city}</strong>
            </div>
            <div>
              {" "}
              State : <strong>{UserDetails.state}</strong>
            </div>
            <div>
              {" "}
              Zip : <strong>{UserDetails.zip}</strong>
            </div>
            <div>
              email :<strong>{UserDetails.email}</strong>
            </div>
            <div>
              Web : <strong>{UserDetails.web}</strong>
            </div>
            <div>
              Age : <strong>{UserDetails.age}</strong>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
