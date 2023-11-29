import React from "react";
import CardWithForm from "./Card";
import { Montserrat } from "next/font/google";

const mont = Montserrat({
  weight: "700",
  subsets: ["latin"],
  style: "normal",
});

export default function Blogs() {
  return (
    <section className=" flex justify-center shadow-lg min-h-screen">
      <div className=" w-11/12 m-4 rounded-sm bg-white">
        <h1 className={`${mont.className} text-center mt-3 font-bold text-3xl`}>
          Our Featured Blogs
        </h1>

        <div className="flex items-center flex-wrap mt-20 justify-center gap-4">
          <CardWithForm
            title="Our First Blog"
            description="My first blog description"
            image="https://images.unsplash.com/photo-1433838552652-f9a46b332c40?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8fA%3D%3D"
          />
          <CardWithForm
            image="https://images.unsplash.com/photo-1522878129833-838a904a0e9e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Nnx8fGVufDB8fHx8fA%3D%3D"
            title="Our Second Blog"
            description=" My Second Blog "
          />
          <CardWithForm
            image="https://images.unsplash.com/photo-1522878129833-838a904a0e9e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Nnx8fGVufDB8fHx8fA%3D%3D"
            title="Our Third Blog"
            description=" My Second Blog "
          />
          <CardWithForm
            image="https://images.unsplash.com/photo-1522878129833-838a904a0e9e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Nnx8fGVufDB8fHx8fA%3D%3D"
            title="Our Fourth Blog"
            description=" My Second Blog "
          />
        </div>
      </div>
    </section>
  );
}
