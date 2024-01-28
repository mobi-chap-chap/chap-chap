import { FC, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import SearchTitle from './components/search-title';
import { Grid } from '@mui/material';
import OneRecipe from '../components/one-recipe';
// import { useGetSearchInfinity } from '../../hooks/use-recipe-query';

const SearchPage = () => {
  const { RCP_NM: searchValue } = useParams<{ RCP_NM?: string }>();

  if (!searchValue) return <div>검색 결과가 없습니다.</div>

  const { recipeData, fetchNextPage } = useGetSearchInfinity();

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

  return (
    <div className="w-screen h-[990px] flex flex-col">
      <SearchTitle />
      <div className=" text-black w-full  px-[450px] py-[50px] ml-[13px] relative">
    <Grid
      container
      spacing={{ xs: 1, md: 2, lg: 3 }}
      style={{ paddingBottom: 20 }}
    >
      {RecipeListContent &&
        RecipeListContent.map((recipe, index) => (
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