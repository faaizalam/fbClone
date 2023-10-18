// import Layout from '../Compnents/Layout/Layout.module.scss';
import Layout from '@/Compnents/Layout/Layout';
import Image from 'next/image'
// import Register from './Authenticate/register';
// import Signin  from './Authenticate/signin';
import { useContext, useEffect } from 'react';
import { Home } from '@/Compnents/Home/Home';
const isBrowser = typeof window !== "undefined";



// const inter = Inter({ subsets: ['latin'] })

export default function index(props) {
  if (isBrowser) {
    document.title="social media"
    
  }

   console.log(props)
  // const {datas,setdatas}=useContext(Myvalues)
  // console.log(datas)

  // if (Object.keys(datas).length===0) {
  //   console.log("yahooooonn")
      
    
  // }
return (

<Home/>
)
  
}

// export async function getServerSideProps({ req, res, resolvedUrl }) {
  
  
  
//   return {
//     props: {
//       data: resolvedUrl, // Pass the fetched data as props to the page component
//     },
//   };
// }