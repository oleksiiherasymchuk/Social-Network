import React from "react";
import { Pagination } from "antd";

const Paginator = (props) => {
  return (
    <div>
      <Pagination defaultCurrent={1} total={50} />
    </div>
  );
};

export default Paginator;
