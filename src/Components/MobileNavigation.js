import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from '../AppStyles.module.css';


const MobileNavigation = () => {
    const [showMenu, setShowMenu] = useState(false);

    const handleClick = () => {
        setShowMenu(!showMenu);
    }

    return(
        <div className={styles.mobile_Menu}>
            <i className="fas fa-bars fa-2x" onClick={handleClick}></i>
            <div>
            if (showMenu) {
                    <div className={styles.main_Mobile_Bottom}>
                    <div>
                        <Link to= " /home"> Home</Link>
                          </div>
                    <div>
                      <Link  to ="/BollyWood">BollyWood</Link>
                    </div>
                    <div>
                       <Link to = "/Hollywood">Hollywood</Link>
                    </div>
                    <div>
                        <Link to = "/Fitness">Fitness</Link>
                    </div>
                    <div>
                        <Link to = "/Food">Food</Link>
                   </div>
                    <div>
                        <Link to = "/Technology">Technology</Link>   
                     </div>
                </div>
    }
            </div>
        </div>
    )
}

export default MobileNavigation;