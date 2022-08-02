import React, {  useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../AppStyles.module.css';
import TopPosts from './TopPost';
import axios from 'axios';

const ThirdTile = () => {
  const [loadMore, setLoadMore] = useState(false);
   const [loadMoreBtn, setLoadMoreBtn] = useState('Load More');
   const [arrow, setArrow] = useState(
     <i className='fas fa-arrow-down' style={{ color: 'orange' }}></i>
   );
  const[content,setContent]= useState([]);
  useEffect(()=>{
    axios.get("https://gaurav-app-blog.herokuapp.com/api/v1/third/data2")
         .then((res)=>{
             setContent(res.data);
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

  return(
    <div className={styles.AllSections_Main}>
      <div className={styles.category1_Top}>
        <div className={styles.AllSections_Header}>Latest Articles</div>
        <hr className={styles.AllSections_Header_Line} />
        </div>
        <div className={styles.category1_Bottom}>
        <div className={styles.category1_Bottom_Left}>
          <div className={styles.category1_Bottom_Left1}>
            {
              
              content.map((article, index) => {
                if (!loadMore && index >= content.length - 3) {
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
                } else if (loadMore && index >= content.length - 5) {
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
          <div>
            {
              
              content.map((article, index) => {
                if (index >= content.length - 1) {
                  return (
                    <div
                      className={styles.category2_Card}
                      key={index}
                      style={{
                        backgroundImage: `url(${article.imageAsset})`,
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                      }}
                    >
                      <div className={styles.category2_Child}>
                        <NavLink
                          to={`/article/${article.title}/${article.category}`}
                          className={styles.category2_Title}
                        >
                          {article.title}
                        </NavLink>
                        <div className={styles.category2_NameAndDate}>
                          {article.category} / {article.publishedDate}
                        </div>
                      </div>
                    </div>
                  );
                }
              })
            }
          </div>
        </div>
        <div className={styles.category1_Bottom_Right}>
          <div className={styles.category1_Bottom_Right1}>
            <div className={styles.advertisement}>Advertisement</div>
          </div>
          <div className={styles.category1_Bottom_Right2}>
            <TopPosts />
            {}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThirdTile
