import React from "react";

const GradientArrows = ({ onPrev, onNext, prevClassName, nextClassName }) => {
  return (
    <>
      <button
        onClick={onPrev}
        className={`absolute left-4 top-1/2 transform -translate-y-1/2 z-10 p-2 ${prevClassName}`}
        style={{ background: "transparent" }}
      >
        <span className="material-icons text-white text-3xl">
          arrow_back_ios
        </span>
      </button>

      <button
        onClick={onNext}
        className={`absolute right-4 top-1/2 transform -translate-y-1/2 z-10 p-2 ${nextClassName}`}
        style={{ background: "transparent" }}
      >
        <span className="material-icons text-white text-3xl">
          arrow_forward_ios
        </span>
      </button>
    </>
  );
};

export default GradientArrows;
