import Image from "next/image";
import React from "react";

const AddPost = () => {
  return (
    <div className="p-4 bg-white rounded-lg flex gap-4 justify-between text-sm">
      <Image
        src={"/vercel.svg"}
        alt=""
        className="size-12 object-cover rounded-full"
        width={48}
        height={48}
      />

      {/* POST */}
      <div className="flex-1">
        <div className="flex gap-4">
          <textarea
            placeholder="What are you doing?"
            className="bg-slate-100 rounded-lg flex-1 p-2"
          ></textarea>
          <Image
            className="w-5 h-5 cursor-pointer self-end"
            src={"/next.svg"}
            alt=""
            width={20}
            height={20}
          />
        </div>

        <div className="flex items-center gap-4 text-gray-400 flex-wrap mt-4">
          <div className="flex items-center gap-2 cursor-pointer">Photo</div>
          <div className="flex items-center gap-2 cursor-pointer">Video</div>
        </div>
      </div>
    </div>
  );
};

export default AddPost;
