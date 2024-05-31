import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Profile() {
  const { id: userId } = useParams();
  const [profile, setProfile] = useState({});
  const [updatedMessage, setUpdatedMessage] = useState("");

  const onInputHandler = (e) => {
    e.preventDefault();
    fetch(`/api/users/${userId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(profile),
    })
      .then((res) => res.json())
      .then((data) => {
        console.dir(e.target);
        setProfile({...profile, [e.target.id]:e.target.value})
        setUpdatedMessage(e.target.value);
      });
  };

  const loadHandler = async (userId) => {
    fetch(`/api/users/${userId}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProfile(data);
      });
  };
  useEffect(() => {
    loadHandler(userId);
  }, []);

  return (
    <>
      <h2>Profile</h2>
      <form>
        <div className="mb-3">
          <label htmlFor="login" className="form-label">
            Login
          </label>
          <input
            type="text"
            className="form-control"
            id="login"
            value={profile.login}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="firstName" className="form-label">
            First Name
          </label>
          <input
            type="text"
            className="form-control"
            id="firstName"
            value={profile.firstName}
            onInput={onInputHandler}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="lastName" className="form-label">
            Last Name
          </label>
          <input
            type="text"
            className="form-control"
            id="lastName"
            value={profile.lastName}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="text"
            className="form-control"
            id="email"
            value={profile.email}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="age" className="form-label">
            Age
          </label>
          <input
            type="text"
            className="form-control"
            id="age"
            value={profile.age}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="photo" className="form-label">
            Photo
          </label>
          <input
            type="text"
            className="form-control"
            id="photo"
            value={profile.photo}
          />
        </div>
      </form>
    </>
  );
}

export default Profile;