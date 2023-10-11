import React, {useState, useEffect} from 'react'
import styles from "./selectStrip.module.css";
import SelectButton from "@/components/button/SelectButton";
import useButtonSelection from "@/hooks/useButtonSelection";
import { PUB_CATEGORY } from "../../utils/constants";

const buttons = [
   { id: 1, title: 'Button 1' },
   { id: 2, title: 'Button 1' },
   { id: 3, title: 'Button 1' },
   { id: 4, title: 'Button 1' },
   { id: 5, title: 'Button 1' },
   { id: 6, title: 'Button 1' },
   { id: 7, title: 'Button 1' },
   { id: 8, title: 'Button 1' },
]

const SelectButtons = ({selectedButtons, handleButtonSelect}) => {

   // console.log(selectedButtons)

   // const [pubList, setPubList] = useState([]);

   // useEffect(() => {
   //    fetchPubs();
   // }, []);

   // const fetchPubs = async () => {
   //    const data = await fetch(PUB_CATEGORY);
   //    const json = await data.json();
   //    setPubList(json);
   //    console.log(json)
   // };

   // const renderMenuItems = () => {
   //    const renderedPubs = [];

   //    return pubList.map((pub, index) => {
   //       if (renderedPubs.includes(pub.publisher_name)) {
   //          return null;
   //       } else {
   //          renderedPubs.push(pub.publisher_name);
   //          return (
   //             <SelectButton
   //                key={pub.publisher_id}
   //                id={pub.publisher_id}
   //                label={pub.publisher_name}
   //                selected={() => selectedButtons.includes(pub.publisher_id)}
   //                onSelect={() => handleButtonSelect(pub.publisher_id)}
   //             />
   //          );
   //       }
   //    });
   // };

   return (
      <>
         <ul className={styles.tab_strip}>
         {
            buttons.map((button) => (
               <SelectButton
                  key={button.id}
                  id={button.id}
                  label={`Catg ${button.id}`}
                  selected={selectedButtons.includes(button.id)}
                  onSelect={handleButtonSelect}
               />
            ))
         }
         </ul>
      </>
   );
};

export default SelectButtons;
