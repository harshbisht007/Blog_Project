import React, { useState , useEffect } from "react";
import axios from "axios";
import styles from '../AppStyles.module.css';
import { NavLink } from "react-router-dom";


const TopPosts = () => {
    const[content,setContent]= useState([]);
     useEffect(()=>{
    axios.get("https://gaurav-app-blog.herokuapp.com/api/v1/top/post")
         .then((res)=>{
             setContent(res.data);
         });
  },[]);


    return(
        <div className={ styles.topPosts_Main }>
            <div className={ styles.topPosts_Top}>
                <div className={styles.AllSections_Header}>Top Posts</div>
                <hr className={styles.AllSections_Header_Line}/>
            </div>
            <div className={ styles.topPosts_Bottom}>
                {   
                 content
                    .filter((value)=>value.id === "1")
                    .map( (object, index) => {
                       {
                            return(
                                <div className={styles.topPosts_CardPrimary} key={index }>
                                    <div className={styles.cardPrimary_Top}><img className={styles.cardPrimary_Image} src={ object.imageAsset } alt="From the article" /></div>
                                    <div className={styles.cardPrimary_Bottom}>
                                        <div className={styles.cardPrimary_Bottom1}>
                                            <NavLink to={`/article/${object.title}/${object.category}`} className={ styles.category1_Title }>{ object.title }</NavLink>
                                            <div>
                                                <span className={ styles.category1_CategoryName }>{ object.category }</span>
                                                <span className={ styles.category1_PublishedDate }> / { object.publishedDate }</span>
                                            </div>
                                        </div>
                                        <div className={styles.cardPrimary_Bottom2}>{ index+1}</div>
                                    </div>
                                </div>
                            )
                    }})
                }
            </div>
            <div>
                {
                content
                .filter((value)=>value.id === "2")
                .map( (object, index) => {
                    {
                             return(
                                <div className={styles.topPosts_CardSecondary} key={index == 2 }>
                                    <div className={styles.cardSecondary_Left}><img className={styles.cardSecondary_Image} src={ object.imageAsset } alt="From the article" /></div>
                                    <div className={styles.cardSecondary_Right}>
                                        <div className={styles.cardSecondary_Right1}>
                                            <NavLink to={`/article/${object.title}/${object.category}`} className={ styles.cardSecondary_Title }>{ object.title }</NavLink>
                                            <div>
                                                <span className={ styles.cardSecondary_CategoryName }>{ object.category }</span>
                                                <span className={ styles.cardSecondary_PublishedDate }> / { object.publishedDate }</span>
                                            </div>
                                        </div>
                                        <div className={styles.cardSecondary_Right2}>{ 1+1 }</div>
                                    </div>
                                </div>
                            )
                }
            })
                    }
                
             </div>
             <div>
                {
                content
                .filter((value)=>value.id === "3")
                .map( (object, index) => {
                    {
                             return(
                                <div className={styles.topPosts_CardSecondary} key={index }>
                                    <div className={styles.cardSecondary_Left}><img className={styles.cardSecondary_Image} src={ object.imageAsset } alt="From the article" /></div>
                                    <div className={styles.cardSecondary_Right}>
                                        <div className={styles.cardSecondary_Right1}>
                                            <NavLink to={`/article/${object.title}/${object.category}`} className={ styles.cardSecondary_Title }>{ object.title }</NavLink>
                                            <div>
                                                <span className={ styles.cardSecondary_CategoryName }>{ object.category }</span>
                                                <span className={ styles.cardSecondary_PublishedDate }> / { object.publishedDate }</span>
                                            </div>
                                        </div>
                                        <div className={styles.cardSecondary_Right2}>{ 2+1 }</div>
                                    </div>
                                </div>
                            )
                }
            })
                    }
                
             </div>
             <div>
                {
                content
                .filter((value)=>value.id === "4")
                .map( (object, index) => {
                    {
                             return(
                                <div className={styles.topPosts_CardSecondary} key={index == 2 }>
                                    <div className={styles.cardSecondary_Left}><img className={styles.cardSecondary_Image} src={ object.imageAsset } alt="From the article" /></div>
                                    <div className={styles.cardSecondary_Right}>
                                        <div className={styles.cardSecondary_Right1}>
                                            <NavLink to={`/article/${object.title}/${object.category}`} className={ styles.cardSecondary_Title }>{ object.title }</NavLink>
                                            <div>
                                                <span className={ styles.cardSecondary_CategoryName }>{ object.category }</span>
                                                <span className={ styles.cardSecondary_PublishedDate }> / { object.publishedDate }</span>
                                            </div>
                                        </div>
                                        <div className={styles.cardSecondary_Right2}>{ 3+1 }</div>
                                    </div>
                                </div>
                            )
                }
            })
                    }
                
             </div>
             <div>
                {
                content
                .filter((value)=>value.id === "5")
                .map( (object, index) => {
                    {
                             return(
                                <div className={styles.topPosts_CardSecondary} key={index == 3 }>
                                    <div className={styles.cardSecondary_Left}><img className={styles.cardSecondary_Image} src={ object.imageAsset } alt="From the article" /></div>
                                    <div className={styles.cardSecondary_Right}>
                                        <div className={styles.cardSecondary_Right1}>
                                            <NavLink to={`/article/${object.title}/${object.category}`} className={ styles.cardSecondary_Title }>{ object.title }</NavLink>
                                            <div>
                                                <span className={ styles.cardSecondary_CategoryName }>{ object.category }</span>
                                                <span className={ styles.cardSecondary_PublishedDate }> / { object.publishedDate }</span>
                                            </div>
                                        </div>
                                        <div className={styles.cardSecondary_Right2}>{ 4+1 }</div>
                                    </div>
                                </div>
                            )
                }
            })
                    }
                
             </div>
        </div>
    )
}

export default TopPosts;