import React from "react";
import Link from "next/link";

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <Link href="/about">Go to About Page</Link>
    </div>
  );
};

export default Home;
