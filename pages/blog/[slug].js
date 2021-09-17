import React from "react";

export default function Slug(props) {
  React.useEffect(() => {
    console.log(props);
  }, [props]);
  return (
    <div>
      <a>Slug Us</a>
    </div>
  );
}
