import React, { useEffect, useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import styles from "./compareGrid.module.css";
import CompareButtonCard from "./CompareButtonCard";

const CompareCard = ({ id, title, content, image, arturl, author, pubdate }) => {
   const placeholderImg = "/placeholder.png";
   const imageSrc = image === "Default_Article_JPG" ? placeholderImg : image;

   const [formattedDate, setFormattedDate] = useState('');

   function formatDate(inputDate) {
      const date = new Date(inputDate);
      const options = {
        year: 'numeric',
        month: 'short',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
      };
      return date.toLocaleString('en-US', options).replace(/,/g, '');
   }

   useEffect(() => {
      setFormattedDate(formatDate(pubdate));
   }, []);

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
         <div className={styles.compare_card_dauth}>{author ? `By ${author} | ` : formattedDate} </div>
         <CompareButtonCard id={id} />
      </div>
   );
};

export default CompareCard;
