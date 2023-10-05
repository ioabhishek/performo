import React from 'react'
import Image from 'next/image';
import styles from './compareCard.module.css';

function CompareCard() {
   return (
      <div className={styles.compare_card}>
         <Image className={styles.compare_card_img} src="/test-img.jpg" alt="facebook" width={24} height={24} />
         {/* <img className={styles.compare_card_img} src="./images/test-img.jpg" alt=""/> */}
         <h3 className={styles.compare_card_ttl}>Lorem ipsum dolor, sit amet sider at consectetur adipisicing elit.</h3>
         <h4 className={styles.compare_card_sttl}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae minus beatae dolor sed esse.</h4>
         <ul className={styles.compare_icns}>
            <div className={styles.compare_icn}>
               <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
            </div>
            <div className={styles.compare_icn}>
               <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
            </div>
            <div className={styles.compare_icn}>
               <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
            </div>
         </ul>
         <div className={styles.compare_tab_wrp}>
            <div className={styles.compare_tab_itm}>
               <h4>Price history</h4>
               <Image src="/history.png" alt="facebook" width={24} height={24} />
               {/* <img src="./images/history.png" alt=""/> */}
            </div>
            <div className={styles.compare_tab_itm}>
               <h4>Search Keywords</h4>
               <span>Manufacturing</span>
               <span>Tooling</span>
               <span>Robotics</span>
               <span>Steel</span>
               <span>Engineering</span>
               <span>Servicing</span>
            </div>
            <div className={styles.compare_tab_itm}>
               <h4>About Seller</h4>
               <span>Powerhouse91Brands 4.5</span>
               <p>Powerhouse91 was founded with a single mission: to help ecommerce brands achieve their true potential by delight in the lives of millions of customers. </p>
            </div>
         </div>
         <div className={styles.rank_no}>1</div>
      </div>
   )
}

export default CompareCard