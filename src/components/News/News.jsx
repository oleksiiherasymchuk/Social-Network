import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getIsFetching, getNewsSelector } from "../../redux/newsSelector";
import { getNews, toggleIsFetching } from "../../redux/newsReducer";
import New from "./New/New";
import s from "./News.module.css";
import Preloader from "../../common/Preloader/Preloader";
// import Paginator from "../../common/Paginator/Paginator";

const News = () => {
  const dispatch = useDispatch();

  const newsItem = useSelector(getNewsSelector);
  const isFetching = useSelector(getIsFetching);

  useEffect(() => {
    const fetchData = () => {
      toggleIsFetching(true);
      dispatch(getNews());
      toggleIsFetching(false);
    };

    fetchData();
  }, [dispatch]);

  return (
    <div className={s.newsComponent}>
      <h1>News</h1>
      {isFetching ? (
        <div className={s.preloader}>
          <Preloader />
        </div>
      ) : (
        <div className={s.news}>
          {/* <div className={s.paginator}>
            <Paginator />
          </div> */}
          <div className={s.new}>
            {newsItem.map((n, index) => {
              return (
                <div className={s.newInfo} key={index}>
                  <New news={n} />
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default News;
