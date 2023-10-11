import { useState } from 'react';

const useButtonSelection = () => {
   const [selectedButtons, setSelectedButtons] = useState([]);
   console.log(selectedButtons);

   const handleButtonSelect = (buttonId) => {
      if (selectedButtons.includes(buttonId)) {
         setSelectedButtons(selectedButtons.filter(id => id !== buttonId));
      } else if (selectedButtons.length < 4) {
         setSelectedButtons([...selectedButtons, buttonId]);
      }
   };

  return [selectedButtons, handleButtonSelect];
}

export default useButtonSelection;