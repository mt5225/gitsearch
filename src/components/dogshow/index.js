import React, { Component } from "react";
import { useGet } from "restful-react";

const Dogshow = () => {
  const { data: randomDogImage, loading } = useGet({
    path: "https://dog.ceo/api/breeds/image/random"
  });

  return loading ? (
    <h1>Loading...</h1>
  ) : (
    <img alt="Here's a good boye!" src={randomDogImage.message} />
  );
};

export default Dogshow;
