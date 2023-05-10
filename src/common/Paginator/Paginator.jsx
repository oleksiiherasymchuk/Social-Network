import React, { useEffect } from "react";
import { Pagination } from "antd";
import {
  getCurrentPage,
  getPageSize,
  getTotalUsersCount,
  // getUsersFilter,
} from "../../redux/usersSelector";
import { useDispatch, useSelector } from "react-redux";
import { requestUsers, setCurrentPage, setPageSize } from "../../redux/usersReducer";

const Paginator = (props) => {
  const dispatch = useDispatch();

  let currentPage = useSelector(getCurrentPage);
  let totalUsersCount = useSelector(getTotalUsersCount);
  let pageSize = useSelector(getPageSize);
  // let filter = useSelector(getUsersFilter);

  // const [localPageSize, setLocalPageSize] = useState(pageSize);

  const onPageChanged = (pageNumber) => {
    dispatch(requestUsers(pageNumber, pageSize));
  };

  const onPageSizeChanged = (pageNumber,size) => {
    dispatch(setPageSize(size))
    dispatch(setCurrentPage(1))
    dispatch(requestUsers(1, size));
    // dispatch()
  }


  useEffect(() => {
    requestUsers(currentPage, pageSize);
  }, [currentPage, pageSize, totalUsersCount]);

  // const onFilterChanged = (filter) => {
  //   console.log(filter);
  //   dispatch(requestUsers(1, pageSize, filter))
  // }

  return (
    <div>
      <Pagination
        defaultCurrent={currentPage}
        total={totalUsersCount}
        current={currentPage}
        pageSize={pageSize}
        onChange={onPageChanged}
        // showSizeChanger={false}
        onShowSizeChange={onPageSizeChanged}
        showTotal={(total) => `Total ${total} items`}
      />
    </div>
  );
};

export default Paginator;
