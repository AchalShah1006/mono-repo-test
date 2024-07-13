import React, { useState } from "react";
import { logMessage } from "@mono-repo/utils";

export const Homepage = () => {
  const [first, setfirst] = useState(true);

  logMessage(`${first}`);

  React.useEffect(() => {
    setfirst(false);
  }, []);
  return <div>Homepage2</div>;
};

export default Homepage;
