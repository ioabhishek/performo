import React, { createContext, useContext, useState } from 'react';

const DataContext = createContext();

export function DataProvider({ children }) {
   const [pubId, setPubId] = useState(null);
   const [catgId, setCatgId] = useState(null);

   return (
      <DataContext.Provider value={{ pubId, setPubId, catgId, setCatgId }}>
         {children}
      </DataContext.Provider>
   );
}

export function useArticleDetails() {
   return useContext(DataContext);
}
