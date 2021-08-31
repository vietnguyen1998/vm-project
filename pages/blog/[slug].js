import React from "react";
import Link from "next/link";

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
