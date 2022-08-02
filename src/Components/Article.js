import React, { useState, useEffect } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import axios from 'axios';
import styles from '../AppStyles.module.css';
import Loading from './Loading';

const Article = () => {
  const {articleTitle, articleCategory } = useParams();
  const[show ,setShow ] = useState(false)
  

  const[data,setData ]= useState([]);
  const Blogs = () => {
    axios.get("https://gaurav-app-blog.herokuapp.com/api/v1/project/blog/" +articleTitle+ "/"+articleCategory+"")
    .then((res)=>{
        setData(res.data);
        setShow(true);

    },[]);  
   
  }

  useEffect(()=>{
    Blogs();
  },[]);
      

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div className={styles.Article_Main}>

     
      

      <div className={styles.Article_Content}>
        {data.map(
          (article, index) =>
            article.title === articleTitle && (
              <div key={index.id} className={styles.Article_Card}>
                <div className={styles.Article_Card_Top}>
                  <div className={styles.Article_Card_Top1}>
                    {article.title}
                  </div>
                  <div className={styles.Article_Card_Top2}>
                    <div className={styles.Card_Top2_Left}>
                      <div className={styles.Card_Top2_Left1}>
                        <i class='fas fa-user-circle fa-3x'></i>
                      </div>
                      <div className={styles.Card_Top2_Left2}>
                        <div className={styles.Article_AuthorName}>
                          Author Name
                        </div>
                        <div className={styles.AllSections_PublishedDate}>
                          {article.publishedDate}
                        </div>
                      </div>
                    </div>
                    <div className={styles.Card_Top2_Right}>
                      <div>
                        <i class='fab fa-facebook-square fa-lg'></i>
                      </div>
                      <div>
                        <i class='fab fa-twitter-square fa-lg'></i>
                      </div>
                      <div>
                        <i class='fab fa-instagram-square fa-lg'></i>
                      </div>
                      <div>
                        <i class='fab fa-youtube-square fa-lg'></i>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.Article_Card_Middle}>
                  <div>
                    <img
                      className={styles.Article_Image}
                      src={article.imageAsset}
                      alt='From the Article'
                    />
                  </div>
                  <div className={styles.AllSections_BlogContent}>
                    {article.blogContent}
                  </div>
                </div>
                <div className={styles.Article_Card_Bottom}>
                  <div className={styles.Article_Card_Bottom1}>
                    <div>
                      <button>
                        <i class='far fa-thumbs-up fa-lg'></i>
                      </button>
                    </div>
                    <div>{article.likes} Likes</div>
                  </div>
                  <div className={styles.Article_Card_Bottom2}>
                    <div className={styles.Article_Card_Bottom2A}>
                      <i class='fas fa-user-circle fa-3x'></i>
                    </div>
                    <div className={styles.Article_Card_Bottom2B}>
                      <div className={styles.AllSections_PublishedDate}>
                        WRITTEN BY
                      </div>
                      <div className={styles.Article_AuthorName}>
                        Author Name
                      </div>
                      <div className={styles.AllSections_PublishedDate}>
                        {article.publishedDate} 
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
        )}
        
      </div>
      <div className={ styles.Article_Related_Content }>
                   <div className={ styles.Related_Content_Top }>More From The Siren</div>
                   <div className={ styles.Related_Content_Bottom }>
                        {   
                            data.map( (article, index) => {
                                if(article.category === articleCategory && index>=data.length-5 && article.title !== articleTitle) {
                                   return(
                                       <div key={index} className={ styles.Related_Content_Card }>
                                          <div><img className={ styles.Related_Content_Image } src={ article.imageAsset } alt="From The Article"/></div>
                                          <NavLink to={`/${article.title}/${article.category}`} className={ styles.AllSections_Title }>{ article.title }</NavLink>
                                          <div className={ styles.Related_Content_Card_Bottom }>
                                             <div><i className="fas fa-user-circle fa-3x"></i></div>
                                             <div>
                                                <div className={ styles.Article_AuthorName }>Author Name</div>
                                                <div className={ styles.AllSections_PublishedDate }>{ article.publishedDate }</div>
                                             </div>
                                          </div>
                                       </div>
                                   )
                                }
                            })
                        }
                   </div>
           </div>
           
        </div>
    )
}  
export default Article;
