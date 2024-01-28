import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Grid } from '@mui/material';
import OneRecipe from '../components/one-recipe';
import { useGetSearchInfinity } from '../../hooks/use-recipe-query';

const SearchPage = () => {
  const { RCP_NM: searchValue } = useParams<{ RCP_NM?: string }>();

  if (!searchValue) return <div>검색 결과가 없습니다.</div>

  const { recipeData, fetchNextPage } = useGetSearchInfinity(searchValue);

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
      <div className="w-[1037px] text-[24px] m-auto pt-[90px]">
            <p className=" text-primary-chocolate text-[24px] ">{searchValue}에 대한 검색 결과입니다.</p>
            <div className="h-[20px] bg-primary-peanut mt-[10px]" />
      </div>
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