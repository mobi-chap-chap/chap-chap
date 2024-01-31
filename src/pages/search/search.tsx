import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Grid } from '@mui/material';
import OneRecipe from '../components/one-recipe';
import { useGetSearchInfinity } from '../../hooks/use-recipe-query';
import SearchTitle from './components/search-title';
import NoResult from './components/no-result';
import Lottie from 'react-lottie';
import animationData from '../../animations/Animation - 1706618442042 (1).json'

const SearchPage = () => {
  const { RCP_NM } = useParams<{ RCP_NM?: string }>();

  if (!RCP_NM) return

  const { recipeData, fetchNextPage, isSuccess } = useGetSearchInfinity(RCP_NM);

  const RecipeListContent = recipeData?.pages
    .map((list) => list.COOKRCP01.row)
    .flat();

  const handleScroll = () => {
    const scrollHeight = document.documentElement.scrollHeight; 
    const scrollTop = document.documentElement.scrollTop;
    const clientHeight = document.documentElement.clientHeight;
    if (scrollTop + clientHeight >= scrollHeight) return fetchNextPage();
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  if (!isSuccess || !recipeData) return <Lottie options={defaultOptions} height={260} width={260} style={{marginBlock : '346px'}}/>
  


  return (
    <div className="w-screen overflow-x-hidden flex flex-col">
      <div className=" text-black w-full  px-[450px]  ml-[13px] relative py-[202px]">
      {RecipeListContent?.filter((recipe) => recipe.RCP_NM.includes(RCP_NM)).length === 0 ? (<NoResult RCP_NM={RCP_NM}/>) : (<SearchTitle RCP_NM={RCP_NM}/>) }
        <Grid
          container
          spacing={{ xs: 1, md: 2, lg: 3 }}
          style={{ paddingBottom: 20 }}
        >
          {RecipeListContent && 
            RecipeListContent
            .filter((recipe) => recipe.RCP_NM.includes(RCP_NM))
            .map((recipe, index) => (
              <Grid
                xs={6}
                md={4}
                lg={3}
                style={{ paddingBottom: 40 }}
                key={index + 1}
              >
                <OneRecipe
                  recipeName={recipe.RCP_NM}
                  recipeImg={recipe.ATT_FILE_NO_MAIN}
                  recipeType={recipe.RCP_PAT2}
                  recipeKal={recipe.INFO_ENG}
                  recipeTitle={recipe.RCP_NM}
                />
              </Grid>
            ))}
        </Grid>
      </div>
    </div>
  );
};

export default SearchPage;