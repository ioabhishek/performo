"use client";
import Head from "next/head";
import moment from "moment";
import Image from "next/image";
import { Inter, Tomorrow } from "next/font/google";
import styles from "./dashboard.module.css";
import React from "react";
import { useState } from "react";
import { DatePicker, Radio, Space } from "antd";
const { RangePicker } = DatePicker;
const inter = Inter({ subsets: ["latin"] });

const DateRangeSelector = ({date, setDate,startDate,endDate}) => {
  const [size, setSize] = useState("middle");
  const [showRangePicker, setShowRangePicker] = useState(false);
  var moment1 = moment(date, "YYYY-MM-DD");
  setDate(startDate + " " + "-" + " " + endDate)
  const toggleRangePicker = () => {
    setShowRangePicker(!showRangePicker);
  };
  
  const clear = () => {
    const formatDate = new Date().toLocaleDateString("en-GB");
    const parts = formatDate.split('/');
    const formattedDate = `${parts[2]}-${parts[1]-1}-${parts[0]}`
      
       const sd = formattedDate;
       const ed = `${parts[2]}-${parts[1]}-${parts[0]}`
    setDate(sd + " " + "-" + " " + ed);
    moment1=null;
  };
  // const apply = () => {
  //   setShowRangePicker(false);
  // };

  return (
    <div>
      <div className={styles.container}>
        <div className={styles.headingandbutton} onClick={toggleRangePicker}>
          <h1 className={styles.heading} id="heading1">
            {date}
          </h1>
          <Image src='/calendar.svg' width={18} height={18} alt="" />
        </div>
        {showRangePicker && (
          <div className={styles.datepicker}>
            {showRangePicker && (
              <RangePicker
              value={moment1}
                allowclear={true}
                onChange={(values) => {
                  if (values && values.length > 1) {
                    const startDate = values[0].format("YYYY-MM-DD");
                    const endDate = values[1].format("YYYY-MM-DD");
                    setShowRangePicker(false);
                    setDate(
                      startDate + " " + "-" + " " + endDate
                      
                    );
                  }
                }}
              />
            )}
            <div className={styles.footer}>
              {showRangePicker && (
                <button className={styles.button} onClick={clear}>
                  clear
                </button>
              )}
               {/* {showRangePicker && (
                <button className={styles.button} onClick={apply}>
                  apply
                </button>
              )} */}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default DateRangeSelector;
