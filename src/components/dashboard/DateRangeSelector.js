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

function DateRangeSelector() {
  const [size, setSize] = useState("middle");
  const [showRangePicker, setShowRangePicker] = useState(false);
  const [date, setDate] = useState(new Date().toLocaleDateString());
  var moment1=moment(date, "YYYY/MM/DD");
  
  const toggleRangePicker = () => {
    setShowRangePicker(!showRangePicker);
  };
  // const today = () => {
  //   const date = new Date().toLocaleDateString();
  //   setDate(date);
  // };
  // const Tomorrow = () => {
  //   const date = new Date();
  //   const nextday = new Date(date);
  //   nextday.setDate(date.getDate() + 1);
  //   setDate(nextday.toLocaleDateString());
  // };
  // const week = () => {
  //   const date = new Date();
  //   const nextday = new Date(date);
  //   nextday.setDate(date.getDate() + 7);
  //   setDate(
  //     "from" +
  //       " " +
  //       date.toLocaleDateString() +
  //       " " +
  //       "to" +
  //       " " +
  //       nextday.toLocaleDateString()
  //   );
  // };
  // const month = () => {
  //   const date = new Date();
  //   const nextday = new Date(date);
  //   nextday.setDate(date.getDate() + 30);
  //   setDate(
  //     "from" +
  //       " " +
  //       date.toLocaleDateString() +
  //       " " +
  //       "to" +
  //       " " +
  //       nextday.toLocaleDateString()
  //   );
  // };
  const clear = () => {
    setDate(new Date().toLocaleDateString());
    moment1=null;
   
  };
  const apply = () => {
    
    setShowRangePicker(false);
  };
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.headingandbutton}>
          <h1 className={styles.heading} id="heading1">
            {date}
          </h1>
          <svg
            fill="#000000"
            width="50px"
            height="50px"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            className="icon line-color"
            onClick={toggleRangePicker}
          >
            <path
              d="M20,21H4a1,1,0,0,1-1-1V9H21V20A1,1,0,0,1,20,21ZM21,5a1,1,0,0,0-1-1H4A1,1,0,0,0,3,5V9H21Z"
              style={{
                fill: "none",
                stroke: "black",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 2,
              }}
            ></path>
            <polyline
              points="12 13 12 15 15 15"
              style={{
                fill: "none",
                stroke: "rgb(44, 169, 188)",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 2,
              }}
            ></polyline>
            <path
              d="M16,3V6M8,3V6M9,17V13m6,0v4"
              style={{
                fill: "none",
                stroke: "rgb(44, 169, 188)",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 2,
              }}
            ></path>
          </svg>
        </div>
        {showRangePicker && (
          <div className={styles.datepicker}>
            {/* <div className={styles.buttoncontainer}>
              {showRangePicker && (
                <button className={styles.button} onClick={today}>
                  today{" "}
                </button>
              )}
              {showRangePicker && (
                <button className={styles.button} onClick={Tomorrow}>
                  tomorrow{" "}
                </button>
              )}
              {showRangePicker && (
                <button className={styles.button} onClick={week}>
                  this week{" "}
                </button>
              )}
              {showRangePicker && (
                <button className={styles.button} onClick={month}>
                  this month{" "}
                </button>
              )}
            </div> */}
            {showRangePicker && (
              <RangePicker
              value={moment1}
                allowclear={true}
                onChange={(values) => {
                  if (values && values.length > 1) {
                    const startDate = values[0].format("YYYY/MM/DD");
                    const endDate = values[1].format("YYYY/MM/DD");
                    console.log(startDate, endDate);
                    setDate(
                      "from" + " " + startDate + " " + "to" + " " + endDate
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
               {showRangePicker && (
                <button className={styles.button} onClick={apply}>
                  apply
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default DateRangeSelector;
