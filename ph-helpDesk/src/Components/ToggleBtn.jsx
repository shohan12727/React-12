import React from "react";

const ToggleBtn = ({ toggleStatus, setToggleStatus }) => {
  const btns = ["All", "Pending", "Submitted", "Reviewed"];

  return (
    <div className="container mx-auto text-right">
      {btns.map((btn, index) => {
        return (
          <button
            key={index}
            className={`toggle-btns  
                    ${toggleStatus == btn && "!bg-purple-500 !text-white"} 
                    ${index == 0 && "rounded-l-md"}
                    ${index == btns.length - 1 && "rounded-r-md"}
                    `}
            onClick={() => setToggleStatus(btn)}
          >
            {btn}
          </button>
        );
      })}
    </div>
  );
};

export default ToggleBtn;
