import React, { useState, useEffect } from "react";
import GranularityWrapper from "./GranularityWrapper";
import DashboardGrid from "./DashboardGrid";  
import { useAccess } from '@/context/accessContext';
const DashboardMainWrap = () => {
  const formatDate = new Date().toLocaleDateString("en-GB");
  const parts = formatDate.split('/');
  const formattedDate = `${parts[2]}-${parts[1]}-${parts[0]}`;
  const { token } = useAccess();
  const [date, setDate] = useState(formattedDate);
  
  const [selectedCategory, setSelectedCategory] = useState("");
  const [catgList, setCatgList] = useState([])
  const [counter, setCounter] = useState(0);
  const [categoryId, setCategoryId] = useState('');

//   const endDate = date.split(" - ")[1] ? date.split(" - ")[1] : date.split(" - ")[0];
//   const endDateObj = new Date(endDate);
//   const startMonth =  endDateObj.getMonth() - 1;
// const startDateObj = new Date(endDateObj.getFullYear(), startMonth, endDateObj.getDate());

  // const startDate = startDateObj.toISOString().split('T')[0];

  const startDate = date.split(" - ")[0]
  const endDate = date.split(" - ")[1] ? date.split(" - ")[1] : date.split(" - ")[0]

  // const startDate =  date.split(" - ")[0] ? date.split(" - ")[0] : date.split(" - ")[0];

  // const startDate =
  // const endDate = date.split(" - ")[1] ? date.split(" - ")[1] : date.split(" - ")[0]

  useEffect(() => {
   
    const fetchCatg = async () => {
      try {
        const data = await fetch('https://performo.in/api/get_category.php', {
          method: 'POST',
          headers: {
            Authorization: token
          },
        });
        const json = await data.json();
        setCatgList(json);
        console.log(startDate)
        console.log(startDateObj)
      } catch (error) {
        //  console.error('Error fetching categories:', error);
      }
    };
    fetchCatg();
  }, [])

  useEffect(() => {
    catgList.forEach((category) => {
      if (category.category_name === selectedCategory) {
        setCategoryId(category.category_id);
       if(counter === 0){
        setCounter(counter+1);
       }
      }
    });
  }, [selectedCategory, catgList])
  
  // console.log(categoryId)

  return (
    <>
      <GranularityWrapper
        date={date}
        setDate={setDate}
        startDate={startDate}
        endDate={endDate}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        counter={counter}
        setCounter={setCounter}
      />
      <DashboardGrid
        startDate={startDate}
        endDate={endDate}
        categoryId={categoryId}
        counter={counter}
      />
    </>
  );
}

export default DashboardMainWrap;
