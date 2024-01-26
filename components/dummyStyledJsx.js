import React from "react";

const Dummy = () => {
  return (
    <>
      {/* If we use global atttribute then these styled jsx classes would be applied globally to all components */}
      {/* <style jsx global>
        {`
          .dummy {
            background: pink;
          }
        `}
      </style> */}
      <style jsx>
        {`
          .dummy {
            background: pink;
            .name {
              font-weight: bold;
              background: red;
              color: green;
            }
          }
        `}
      </style>
      <div className="dummy">
        <span className="name">dummy page</span>
      </div>
    </>
  );
};

export default Dummy;
