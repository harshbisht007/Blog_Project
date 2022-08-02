import React, { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import styles from '../AppStyles.module.css';
import TopPosts from './TopPost';
import axios from 'axios';
import Loading from './Loading';

const Hollywood = () => {
  const { categoryName } = useParams();
  
  const [loadMore, setLoadMore] = useState(false);
  const [loadMoreBtn, setLoadMoreBtn] = useState('Load More');
  const [show, setShow] = useState(false);
  const [arrow, setArrow] = useState(
    <i className='fas fa-arrow-down' style={{ color: 'orange' }}></i>
  );
  const category = "Hollywood";
  const [data,setData]=useState([]);
  useEffect(()=>{
    axios.get(`https://gaurav-app-blog.herokuapp.com/api/v1/project/blog/${category}`)
         .then((res)=>{
             setData(res.data);
             setShow(true);
         });
  },[]);
  

  const handleClick = () => {
    setLoadMore(!loadMore);
    if (loadMoreBtn === 'Load More') {
      setLoadMoreBtn('Load Less');
      setArrow(<i className='fas fa-arrow-up' style={{ color: 'orange' }}></i>);
    } else {
      setLoadMoreBtn('Load More');
      setArrow(
        <i className='fas fa-arrow-down' style={{ color: 'orange' }}></i>
      );
    }
  };

  return (
    <div className={styles.CategoryPage_Main}>
      {show ?
      <>
      <div className={styles.CategoryPage_Left}>
        <div className={styles.CategoryPage_Left_Top}>
          <div className={styles.AllSections_Header}>{category}</div>
          <hr className={styles.AllSections_Header_Line} />
        </div>
        <div className={styles.CategoryPage_Left_Bottom}>
          <div className={styles.CategoryPage_CardContainer}>
            {
            
              data.map((article, index) => {
                if (
                  article.category == category &&
                  !loadMore &&
                  index >= data.length - 3
                ) {
                  return (
                    <div key={index} className={styles.category1_Card}>
                      <div>
                        <img
                          className={styles.category1_Image}
                          src={article.imageAsset}
                          alt='From the Article'
                        />
                      </div>
                      <div>
                        <NavLink
                          to={`/article/${article.title}/${article.category}`}
                          className={styles.category1_Title}
                        >
                          {article.title}
                        </NavLink>
                        <div className={styles.category1_BlogContent}>
                          {article.blogContent}
                        </div>
                        <div>
                          <span className={styles.category1_CategoryName}>
                            {article.category}
                          </span>
                          <span className={styles.category1_PublishedDate}>
                            {' '}
                            / {article.publishedDate}
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                } else if (
                  article.category === category &&
                  loadMore &&
                  index >= data.length - 5
                ) {
                  return (
                    <div key={index} className={styles.category1_Card}>
                      <div>
                        <img
                          className={styles.category1_Image}
                          src={article.imageAsset}
                          alt='From the Article'
                        />
                      </div>
                      <div>
                        <NavLink
                          to={`/article/${article.title}/${article.category}`}
                          className={styles.category1_Title}
                        >
                          {article.title}
                        </NavLink>
                        <div className={styles.category1_BlogContent}>
                          {article.blogContent}
                        </div>
                        <div>
                          <span className={styles.category1_CategoryName}>
                            {article.category}
                          </span>
                          <span className={styles.category1_PublishedDate}>
                            {' '}
                            / {article.publishedDate}
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                }
              })
            }
           
          </div>
          <div>
            <button className={styles.loadMore_Btn} onClick={handleClick}>
              {arrow}
              {loadMoreBtn}
            </button>
          </div>
        </div>
      </div>
      <div className={styles.CategoryPage_Right}>
        <div className={styles.CategoryPage_Right_Top}>
          <TopPosts />
        </div>
        <div className={styles.CategoryPage_Right_Bottom}>
          <div className={styles.advertisement}>Advertisement</div>
        </div>
      </div>
      </>:
      <Loading/>
      }
    </div>
  );
};

export default Hollywood;
