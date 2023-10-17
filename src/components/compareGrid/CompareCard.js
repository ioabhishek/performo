import React from "react";
import Image from "next/image";
import styles from "./compareGrid.module.css";
import CompareButtonCard from "./CompareButtonCard";

const CompareCard = ({ id, title, content, image }) => {
   return (
      <div className={styles.compare_card}>
         <Image
            className={styles.compare_card_img}
            src={image}
            alt="facebook"
            width={300}
            height={200}
         />
         <h3 className={styles.compare_card_ttl}>{title}</h3>
         <h4 className={styles.compare_card_sttl}>{content}</h4>
         <CompareButtonCard />
         <div className={styles.rank_no}>1</div>
      </div>
   );
};

export default CompareCard;
