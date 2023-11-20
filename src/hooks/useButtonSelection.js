import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { useAccess } from '@/context/accessContext';

const useButtonSelection = () => {
   const [selectedButtons, setSelectedButtons] = useState([]);
   const [savedData, setSavedData] = useState([]);
   const { userId } = useAccess();

   const pathname = usePathname();
   const match = pathname.match(/\/category\/(.+)/);

   useEffect(() => {
      const fetchPref = async () => {
         try {
            const data = await fetch('https://performo.in/api/get_user_preference.php', {
               method: 'POST',
               headers: {
                  Authorization: 'Bearer 0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
               },
               body: new URLSearchParams({category: match[1], userid : userId})
            });

            const json = await data.json();

            if (Array.isArray(json) && json.length === 0) {
               setSavedData([]);
            } else {
               setSavedData(json[0].publisher_name.split(','));
            }
           
            // if (data.ok) {
            //    const json = await data.json();

            //    const encounteredUserIds = {};

            //    const publisherNames = json.map(item => {
            //       if (item.user_id === "1" && !encounteredUserIds[item.user_id]) {
            //          encounteredUserIds[item.user_id] = true;
            //          return item.publisher_name.split(',')
            //       }
            //       return null;
            //    }).filter(Boolean);
   
            //    const flattenedPublisherNames = [].concat(...publisherNames);
            //    setSavedData(flattenedPublisherNames);
            // } else {
            //    console.error("Failed to fetch data");
            // }
         } catch (error) {
            console.error("Error fetching data:", error);
         }
      }
   
      fetchPref();
   }, []);

   useEffect(() => {
      if (savedData.length > 0 && selectedButtons.length === 0) {
         setSelectedButtons(savedData);
      }
   }, [savedData]);   

   const handleButtonSelect = (pubname) => {
      if (selectedButtons.includes(pubname)) {
         setSelectedButtons(selectedButtons.filter(id => id !== pubname));
      } else if (selectedButtons.length < 4) {
         setSelectedButtons([...selectedButtons, pubname]);
      }
   };

   return [selectedButtons, handleButtonSelect];
}

export default useButtonSelection;
