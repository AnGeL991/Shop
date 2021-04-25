import { FC, useEffect } from "react";
import { client } from "_api";


export const TestAws:FC = () => {

    const fetchDate = async()=>{
      const result = await window.fetch('/');
      console.log(result);
    }
   useEffect(()=>{
    fetchDate();
   },[])
  
    return (
      <div>jakas tam strona</div>
    );
  };
  