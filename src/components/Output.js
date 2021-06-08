import React from "react";

export default function Output({ output }) {
  return (
    <div className="bg-black w-full text-green-300 text-lg h-40 mt-3 p-3">
      {output}
    </div>
  );
}
