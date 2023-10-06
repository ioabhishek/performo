import React from 'react';
import Image from 'next/image';
import styles from './compareGrid.module.css';
import CompareIcon from './CompareIcon';
import CompareHistory from './CompareHistory';
import CompareKeyword from './CompareKeyword';
import CompareAuthor from './CompareAuthor';


const CompareCard = () => {
   return (
      <div className={styles.compare_card}>
         <Image className={styles.compare_card_img} src="/test-img.jpg" alt="facebook" width={24} height={24} />
         <h3 className={styles.compare_card_ttl}>Lorem ipsum dolor, sit amet sider at consectetur adipisicing elit.</h3>
         <h4 className={styles.compare_card_sttl}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae minus beatae dolor sed esse.</h4>
         <CompareIcon/>
         <div className="compare_tab_wrp">
            <CompareHistory/>
            <CompareKeyword/>
            <CompareAuthor/>
         </div>
         <div className={styles.rank_no}>1</div>
      </div>
   )
}

export default CompareCard