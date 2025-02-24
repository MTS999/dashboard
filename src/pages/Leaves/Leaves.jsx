// import React from "react";
// import Leaverecord from "../../components/Leaves/LeaveRecord";

// const Leaves = () => {
//   return (
//     <>
//       <Leaverecord />
      
//     </>
//   );
// };

// export default Leaves;

import React, { useEffect, useState } from "react";
import Leaverecord from "../../components/Leaves/LeaveRecord";

const Leaves = () => {
  const [renderTime, setRenderTime] = useState(null);

  useEffect(() => {
    const start = performance.now(); // Start time

    setTimeout(() => {
      const end = performance.now(); // End time
      setRenderTime(end - start);
    }, 0); // Ensure accurate measurement after render
  }, []);

  return (
    <>
      <Leaverecord />
      {renderTime !== null && (
        <p>Render Time: {renderTime.toFixed(2)} ms</p>
      )}
    </>
  );
};

export default Leaves;
