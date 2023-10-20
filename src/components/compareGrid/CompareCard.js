import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./compareGrid.module.css";
import CompareButtonCard from "./CompareButtonCard";

const CompareCard = ({ id, title, content, image, arturl }) => {
   const placeholderImg = "/placeholder.png";
   const imageSrc = image === "Default_Article_JPG" ? placeholderImg : image;

   return (
      <div className={styles.compare_card}>
         <Link href={arturl} target="_blank" className={styles.compare_card_info}>
            <Image
               className={styles.compare_card_img}
               src={imageSrc}
               alt="facebook"
               width={300}
               height={200}
            />
            <h3 className={styles.compare_card_ttl}>{title}</h3>
            <h4 className={styles.compare_card_sttl}>{content}</h4>
         </Link>
         <CompareButtonCard id={id} />
      </div>
   );
};

export default CompareCard;
