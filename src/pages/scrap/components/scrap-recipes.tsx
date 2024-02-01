// import { Grid } from "@mui/material";
// import { FC, useEffect } from "react";
// import { useGetScrapInfinity } from "../../../hooks/use-recipe-query";
// import Lottie from "react-lottie";
// import animationData from '../../../animations/Animation - 1706618442042 (1).json'

// const ScrapRecipe: FC = () => {
  
//   const {getScrapRecipeData, fetchNextPage, isSuccess } = useGetScrapInfinity();
  
//   // const ScrapListContent = userData?.data.scrapRecipe?.recipes || [];
//   const ScrapListContent = getScrapRecipeData
    
  
//   // const {goToDetailPage} = UseNavigation();

//   const handleScroll = () => {
//     const scrollHeight = document.documentElement.scrollHeight; 
//     const scrollTop = document.documentElement.scrollTop;
//     const clientHeight = document.documentElement.clientHeight;
//     if (scrollTop + clientHeight >= scrollHeight) return fetchNextPage();
//   };

//   useEffect(() => {
//     window.addEventListener('scroll', handleScroll);
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   });

//   const defaultOptions = {
//     loop: true,
//     autoplay: true,
//     animationData: animationData,
//     rendererSettings: {
//       preserveAspectRatio: 'xMidYMid slice',
//     },
//   };

//   if (!isSuccess || !getScrapRecipeData) return <Lottie options={defaultOptions} height={260} width={260} style={{marginBlock : '346px'}}/>
  
//   return (
//     <>
//       <div className=" text-black w-full  px-[450px] ml-[13px] relative">
//         <div>
//           <div style={{ marginTop: 50 }}>
//             <Grid
//               container
//               spacing={{ xs: 1, md: 2, lg: 3 }}
//               style={{ paddingTop: 20, paddingBottom: 60, marginLeft: -20 }}
//             >
//               {ScrapListContent.map((recipe : OneRecipe, index: number) => (
//                 <Grid style={{ margin: 10 }} key={index}>
//                   <img
//                     /* src={list} */
//                     className="w-[240px] h-[240px]"
//                     // onClick={() => onClickToDetailPage(recipeTitle)}
//                   />
//                 </Grid>
//               ))}
//             </Grid>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };
// export default ScrapRecipe;


// /**
//  * 
//  * 
//  * 
//  * 
//  */
