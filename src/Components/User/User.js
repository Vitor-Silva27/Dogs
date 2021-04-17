import React from "react";
import { Route, Routes } from "react-router";
import Feed from "../Feed/Feed";
import UserHeader from "./UserHeader/UserHeader";
import UserPhotoPost from "./UserPhotoPost/UserPhotoPost";
import UserStats from "./UserStats";

const User = () => {
  return (
    <section className="container">
      <UserHeader />
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/post" element={<UserPhotoPost />} />
        <Route path="/statistics" element={<UserStats />} />
      </Routes>
    </section>
  );
};

export default User;
