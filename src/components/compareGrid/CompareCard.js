import React from "react";
import Image from "next/image";
import styles from "./compareGrid.module.css";
import CompareButtonCard from "./CompareButtonCard";

const CompareCard = ({ id, title, content, image }) => {
   const placeholderImg = "/placeholder.png";
   const imageSrc = image === "Default_Article_JPG" ? placeholderImg : image;

   return (
      <div className={styles.compare_card}>
         <Image
            className={styles.compare_card_img}
            src={imageSrc}
            alt="facebook"
            width={300}
            height={200}
         />
         <h3 className={styles.compare_card_ttl}>{title}</h3>
         <h4 className={styles.compare_card_sttl}>{content}</h4>
         <CompareButtonCard id={id} />
         <div className={styles.rank_no}>1</div>
      </div>
   );
};

export default CompareCard;
