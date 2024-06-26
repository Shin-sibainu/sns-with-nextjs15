import Image from "next/image";
import React from "react";

const Post = () => {
  return (
    <div className="flex flex-col gap-4">
      {/* USER */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image
            src={"./vercel.svg"}
            alt=""
            width={40}
            height={40}
            className="size-10 rounded-full"
          />
          <span className="font-medium">ShinCode</span>
        </div>
      </div>
      {/* DESC */}
      <div className="flex flex-col gap-4">
        <div className="w-full min-h-96 relative">
          <Image
            src={"./next.svg"}
            alt=""
            fill
            className="rounded-md object-cover"
          />
        </div>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur
          officiis velit animi voluptatibus nesciunt! Aperiam, nobis doloribus
          tenetur dolore quia illo! Molestiae impedit perspiciatis officiis
          eaque laboriosam deleniti quis odit quos amet inventore? Facere nulla
          necessitatibus totam voluptates alias? Deserunt, necessitatibus! Eaque
          esse accusamus asperiores velit, harum error consectetur dolores!
        </p>
      </div>
      {/* INTERACTION */}
      <div className="flex items-center justify-between text-sm">
        <div className="flex gap-8">
          <div className="flex items-center gap-4 bg-slate-100 p-2 rounded-xl">
            
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Post;
