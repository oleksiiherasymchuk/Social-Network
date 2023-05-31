import React, { useEffect } from "react";
import { Pagination } from "antd";
import {
  getCurrentPage,
  getPageSize,
  getTotalUsersCount,
  getUsersFilter,
} from "../../redux/usersSelector";
import { useDispatch, useSelector } from "react-redux";
import {
  requestUsers,
  setCurrentPage,
  setPageSize,
} from "../../redux/usersReducer";

const Paginator = (props) => {
  const dispatch = useDispatch();

  let currentPage = useSelector(getCurrentPage);
  let totalUsersCount = useSelector(getTotalUsersCount);
  let pageSize = useSelector(getPageSize);
  let filter = useSelector(getUsersFilter);

  const onPageChanged = (pageNumber) => {
    dispatch(requestUsers(pageNumber, pageSize, filter));
  };

  const onPageSizeChanged = (pageNumber, size) => {
    dispatch(setPageSize(size));
    dispatch(setCurrentPage(1));
    dispatch(requestUsers(1, size));
  };

  useEffect(() => {
    requestUsers(currentPage, pageSize);
  }, [currentPage, pageSize, totalUsersCount]);

  return (
    <div>
      <Pagination
        defaultCurrent={currentPage}
        total={totalUsersCount}
        current={currentPage}
        pageSize={pageSize}
        onChange={onPageChanged}
        // pageSizeOptions={[10, 20, 30, 40]}
        onShowSizeChange={onPageSizeChanged}
        showTotal={(total) => `Total ${total} items`}
      />
    </div>
  );
};

export default Paginator;
