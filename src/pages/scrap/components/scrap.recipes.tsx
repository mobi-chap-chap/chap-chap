import { Grid } from "@mui/material";
import { FC } from "react";



const ScrapRecipe: FC = () => {

  // const { data: getInterestedProductList } = useQuery([PRODUCT_QUERY_KEY.GET_INTERESTED_PRODUCT_LIST], () => AuthApi.getInterestedProductList(1));
  
  
  const RecipeListContent = recipeList?.COOKRCP01?.row || [];
  
  return (
    <>
      <div className=" text-black w-full  px-[450px] ml-[13px] relative">
        <div>
          <div style={{ marginTop: 50 }}>
            <Grid
              container
              spacing={{ xs: 1, md: 2, lg: 3 }}
              style={{ paddingTop: 20, paddingBottom: 60, marginLeft: -20 }}
            >
              {RecipeListContent.map((list: any, index: number) => (
                <Grid style={{ margin: 10 }}>
                  <img
                    src={list.ATT_FILE_NO_MAIN}
                    className="w-[240px] h-[240px]"
                  />
                </Grid>
              ))}
            </Grid>
          </div>
        </div>
      </div>
    </>
  );
};
export default ScrapRecipe;


/**
 * 
 * 
 * 
 * 
 */
