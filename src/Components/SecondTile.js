import React, {  useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import styles from '../AppStyles.module.css';

import axios from "axios";

const SecondTile = () => {
  const [data , setData] = useState([]);
  useEffect(()=>{
    axios.get("https://gaurav-app-blog.herokuapp.com/api/v1/second/data1")
         .then((res)=>{
             setData(res.data);
         });
  },[]);
    return(
        <div className={styles.AllSections_Main}>
            <div className={styles.AllSections_Top}>
                <div className={styles.AllSections_Header}>The Latest</div>
                <hr className={styles.AllSections_Header_Line}/>
            </div>
            <div className={styles.AllSections_Bottom}>
                {   
                    data
                         .filter((data)=>data.id === "1")
                         .map((article,index) => {
                    
                            return(
                                <div key={index == 0} className={styles.AllSections_Card}>
                                    <div><img className={styles.AllSections_Image} src={  article.imageAsset  } alt="From The Article"/></div>
                                    <div>
                                        <NavLink to={`/article/${article.title}/${article.category}`} className={styles.AllSections_Title}>{  article.title  }</NavLink>
                                        <div className={styles.AllSections_BlogContent}>{  article.blogContent  }</div>
                                    </div>
                                    <div>
                                        <span className={styles.AllSections_CategoryName}>{ article.category  }</span>
                                        <span className={styles.AllSections_PublishedDate}> / { article.publishedDate  }</span>
                                    </div>
                                </div> 
                            )
                        }
                    
                    )    
                }
                {   
                    data
                         .filter((data)=>data.id === "2")   
                         .map(   (article,index) => {
                    
                            return(
                                <div key={index == 1} className={styles.AllSections_Card}>
                                    <div><img className={styles.AllSections_Image} src={  article.imageAsset  } alt="From The Article"/></div>
                                    <div>
                                        <NavLink to={`/article/${article.title}/${article.category}`} className={styles.AllSections_Title}>{  article.title  }</NavLink>
                                        <div className={styles.AllSections_BlogContent}>{  article.blogContent  }</div>
                                    </div>
                                    <div>
                                        <span className={styles.AllSections_CategoryName}>{ article.category  }</span>
                                        <span className={styles.AllSections_PublishedDate}> / { article.publishedDate  }</span>
                                    </div>
                                </div>
                            )
                        }
                    
                     )    
                }
                {   
                    data
                        .filter((data)=> data.id === "3")
                        .map((article,index) => {
                        
                            return(
                                <div key={index == 2} className={styles.AllSections_Card}>
                                    <div><img className={styles.AllSections_Image} src={  article.imageAsset  } alt="From The Article"/></div>
                                    <div>
                                        <NavLink to={`/article/${article.title}/${article.category}`} className={styles.AllSections_Title}>{  article.title  }</NavLink>
                                        <div className={styles.AllSections_BlogContent}>{  article.blogContent  }</div>
                                    </div>
                                    <div>
                                        <span className={styles.AllSections_CategoryName}>{ article.category  }</span>
                                        <span className={styles.AllSections_PublishedDate}> / { article.publishedDate  }</span>
                                    </div>
                                </div>
                            )
                        }
                    
                     )    
                }
            </div>
        </div>
    )
}

export default SecondTile;