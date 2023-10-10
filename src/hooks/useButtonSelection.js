import { useState } from 'react';

function useButtonSelection (initialState = []){
   const [selectedButtons, setSelectedButtons] = useState(initialState);

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