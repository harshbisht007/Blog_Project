import React, { useState,useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../AppStyles.module.css';

import axios from 'axios';

const FirstTile = () => {
  const [data , setData] = useState([]);
  
  useEffect(()=>{
    axios.get("https://gaurav-app-blog.herokuapp.com/api/v1/first/data")
         .then((res)=>{
             setData(res.data);
            
         });
  },[]);
  return (
    <div className={styles.featured_Articles_Component}>
      <div className={styles.featured_Articles_Left}>
        {
          
          data
          .filter((data)=>data.id === "1")
          .map((article, index) => {
            
              return (
                <div
                  key={index}
                  className={styles.featured_Articles_Box_Big}
                  style={{
                    backgroundImage: `url(${article.imageAsset})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                  }}
                >
                  <NavLink
                    to={`/article/${article.title}/${article.category}`}
                    className={styles.Box_Big_Title}
                  >
                    {article.title}
                  </NavLink>
                  <div className={styles.Box_Category_Date}>
                    <span>{article.category}</span>
                    <span> / </span>
                    <span>{article.publishedDate}</span>
                  </div>
                </div>
              );
             
                
        })
      }
      </div>
      <div className={styles.featured_Articles_Right}>
        <div className={styles.featured_Articles_Right1}>
          {
            
            data
            .filter((data)=>data.id === "2")
            .map((article, index) => {
               
                return (
                  <div
                    key={index}
                    className={styles.featured_Articles_Box_Small}
                    style={{
                      backgroundImage: `url(${article.imageAsset})`,
                      backgroundPosition: 'center',
                      backgroundSize: 'cover',
                      backgroundRepeat: 'no-repeat',
                    }}
                  >
                    <NavLink
                      to={`/article/${article.title}/${article.category}`}
                      className={styles.Box_Small_Title}
                    >
                      {article.title}
                    </NavLink>
                    <div className={styles.Box_Category_Date}>
                      <span>{article.category}</span>
                      <span> / </span>
                      <span>{article.publishedDate}</span>
                    </div>
                  </div>
                );
              }
            )
          }
        </div>
        <div className={styles.featured_Articles_Right2}>
          {
            
            data
            .filter((data)=>data.id === "3")
            .map((article, index) => {
             
                return (
                  <div
                  key={index}
                  className={styles.featured_Articles_Box_Big}
                  style={{
                    backgroundImage: `url(${article.imageAsset})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                  }}
                  >
                    <NavLink
                      to={`/article/${article.title}/${article.category}`}
                      className={styles.Box_Small_Title}
                    >
                      {article.title}
                  </NavLink>
                  <div className={styles.Box_Category_Date}>
                    <span>{article.category}</span>
                    <span> / </span>
                    <span>{article.publishedDate}</span>
                  </div>
                </div>
                );
              }
            )
          }
        </div>
      </div>
    </div>
  );
};

export default FirstTile;
