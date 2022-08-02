import React, { useEffect, useState } from "react";
import styles from '../AppStyles.module.css';
import FirstTile from "./FirstTile";
import Fourth from "./Fourth";
import SecondTile from "./SecondTile";
import ThirdTile from "./ThirdTile";
import Loading from "./Loading";



const Home = () => {
    const[load,setLoad]= useState(false);
    useEffect(()=>{
        setLoad(true);
    },[])
    
    return(
        <div className={styles.commonStyle} >
            {load ?
            <>
             <FirstTile/>
            <SecondTile/>
            <ThirdTile/>
            <Fourth/>
            </> :
            <Loading/>
}
              
        </div>
    )
}

export default Home;