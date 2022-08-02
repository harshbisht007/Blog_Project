import React, {  useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import styles from '../AppStyles.module.css';
import axios from "axios";


const Fourth = () => {
    const [loadMore, setLoadMore] = useState(false);
    const [loadMoreBtn, setLoadMoreBtn] = useState('Load More');
    const [arrow, setArrow] = useState(<i className="fas fa-arrow-down" style={ {color : 'orange'} }></i>);

    const[content,setContent]= useState([]);
    useEffect(()=>{
      axios.get("https://gaurav-app-blog.herokuapp.com/api/v1/fourth/data3")
           .then((res)=>{
               setContent(res.data);
           });
    },[]);

    const handleClick = () => {
        setLoadMore(!loadMore);
        if (loadMoreBtn === 'Load More') {
            setLoadMoreBtn('Load Less');
            setArrow(<i className="fas fa-arrow-up" style={ {color : 'orange'} }></i>);
        }
        else {
            setLoadMoreBtn('Load More');
            setArrow(<i className="fas fa-arrow-down" style={ {color : 'orange'} }></i>);
        }
    }


    return(
        <div className={ styles.AllSections_Main }>
            <div className={ styles.LatestStories_Top }>
                <div className={ styles.AllSections_Header }>Latest Stories</div>
                <hr className={ styles.AllSections_Header_Line }/>
            </div>
            <div className={ styles.LatestStories_Bottom }>
                <div className={ styles.LatestStories_CardContainer }>
                    {   
                        content
                        .filter((data)=>data.id === "1")
                        .map( (article, index) => {
                            
                                return(
                                    <div className={ styles.LatestStories_Card } key={index}>
                                        <NavLink to={`/article/${article.title}/${article.category}`} className={ styles.AllSections_Title }>{article.title}</NavLink>
                                        <div className={ styles.AllSections_BlogContent }>{article.blogContent}</div>
                                        <div>
                                            <span className={ styles.AllSections_CategoryName }>{article.category}</span>
                                            <span className={ styles.AllSections_PublishedDate }> / {article.publishedDate}</span>
                                        </div>
                                    </div>
                                )
                            }
                        )
                    }
                    {   
                        content
                        .filter((value)=>value.id === "2")
                        .map( (article, index) => {
                            
                                return(
                                    <div className={ styles.LatestStories_Card } key={index}>
                                        <NavLink to={`/article/${article.title}/${article.category}`} className={ styles.AllSections_Title }>{article.title}</NavLink>
                                        <div className={ styles.AllSections_BlogContent }>{article.blogContent}</div>
                                        <div>
                                            <span className={ styles.AllSections_CategoryName }>{article.category}</span>
                                            <span className={ styles.AllSections_PublishedDate }> / {article.publishedDate}</span>
                                        </div>
                                    </div>
                                )
                            }
                        )
                    }
                    {   
                        content
                        .filter((value)=>value.id === "3")
                        .map( (article, index) => {
                                return(
                                    <div className={ styles.LatestStories_Card } key={index}>
                                        <NavLink to={`/article/${article.title}/${article.category}`} className={ styles.AllSections_Title }>{article.title}</NavLink>
                                        <div className={ styles.AllSections_BlogContent }>{article.blogContent}</div>
                                        <div>
                                            <span className={ styles.AllSections_CategoryName }>{article.category}</span>
                                            <span className={ styles.AllSections_PublishedDate }> / {article.publishedDate}</span>
                                        </div>
                                    </div>
                                )
                            }
                        )
                    }
                    {   
                        content.map( (article, index) => {
                            if(loadMore && index == 3) {
                                return(
                                    <div className={ styles.LatestStories_Card } key={index}>
                                        <NavLink to={`/article/${article.title}/${article.category}`} className={ styles.AllSections_Title }>{article.title}</NavLink>
                                        <div className={ styles.AllSections_BlogContent }>{article.blogContent}</div>
                                        <div>
                                            <span className={ styles.AllSections_CategoryName }>{article.category}</span>
                                            <span className={ styles.AllSections_PublishedDate }> / {article.publishedDate}</span>
                                        </div>
                                    </div>
                                )
                            }
                        })
                    }
                    {   
                        content.map( (article, index) => {
                            if(loadMore && index == 4) {
                                return(
                                    <div className={ styles.LatestStories_Card } key={index}>
                                        <NavLink to={`/article/${article.title}/${article.category}`} className={ styles.AllSections_Title }>{article.title}</NavLink>
                                        <div className={ styles.AllSections_BlogContent }>{article.blogContent}</div>
                                        <div>
                                            <span className={ styles.AllSections_CategoryName }>{article.category}</span>
                                            <span className={ styles.AllSections_PublishedDate }> / {article.publishedDate}</span>
                                        </div>
                                    </div>
                                )
                            }
                        })
                    }
                </div>
                <div><button className={ styles.loadMore_Btn } onClick={handleClick}>{arrow}{loadMoreBtn}</button></div>
            </div>
        </div>
    )
}

export default Fourth;