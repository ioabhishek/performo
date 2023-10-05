import React from 'react'
import styles from './selectStrip.module.css'

function SelectStrip() {
   return (
      <div className={styles.tstrip_wrap}>
         <div className={styles.tstrip_con}>
            <ul className={styles.tab_strip}>
               <li className={styles.sel_btn}>Mfg 1</li>
               <li className={styles.sel_btn}>Mfg 2</li>
               <li className={styles.sel_btn}>Mfg 3</li>
               <li className={styles.sel_btn}>Mfg 4</li>
               <li className={styles.sel_btn}>Mfg 5</li>
               <li className={styles.sel_btn}>Mfg 6</li>
               <li className={styles.sel_btn}>Mfg 7</li>
               <li className={styles.sel_btn}>Mfg 8</li>
            </ul>
            <span>Please select above options to compare. Max of 4 can be be selected at once.</span>
         </div>
         <button className={styles.tsave_btn}>Save</button>
      </div>
   )
}

export default SelectStrip