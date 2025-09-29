import { BadgeCheck } from "lucide-react";
import React from "react";

const Feature = ({ feature }) => {
  console.log(feature);

  return (
    <div>
      <p className="flex gap-3"> <BadgeCheck /> {feature}</p>
    </div>
  );
};

export default Feature;
