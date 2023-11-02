'use client'
import Image from 'next/image';
import styles from './button.module.css'
import { usePathname } from 'next/navigation';
import { ToastContainer, toast } from 'react-toastify';

function Button({selectedButtons}) {
   const pathname = usePathname();
   const match = pathname.match(/\/category\/(.+)/);

   async function savePublisherData() {
      const data = {
         userid: '1',
         category: match[1],
         sources: selectedButtons.join(',')
      };

      const response = await fetch('https://performo.in/api/save_publisher.php', {
         method: 'POST',
         headers: {
            Authorization: 'Bearer 0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
         },
         body: new URLSearchParams({userid: data.userid, category : data.category, sources : data.sources })
      });
    
      if (response.ok) {
         const result = await response.json();
      } else {
         console.error('Error:', response.status, response.statusText);
      }
   }

   const handleSaveClick = () => {
      toast.success('Preference saved!', {
         position: "top-right",
         autoClose: 3000,
         hideProgressBar: false,
         closeOnClick: true,
         pauseOnHover: true,
         draggable: true,
         progress: undefined,
         theme: "light",
         });
      savePublisherData();
   };

   return (
      <div className={styles.button} onClick={handleSaveClick}>
         <Image
            src="/save.svg"
            alt="save"
            width={20}
            height={20}
         />
      </div>
   )
}

export default Button