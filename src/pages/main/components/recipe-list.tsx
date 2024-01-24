import { Grid } from "@mui/material";
import scrapFullIcon from "../../../assets/icons/bookmark-full.png";
import scrapLineIcon from "../../../assets/icons/bookmark-line.png";

const RecipeList = () => {
  const onClickScrapBtn = () => {};
  return (
    <div className="text-black w-screen">
      {/* <Grid
        container
        spacing={{ xs: 1, md: 2, lg: 3 }}
        style={{ paddingBottom: 20 }}
      >
        <Grid xs={12} md={4} lg={3} style={{ paddingBottom: 40 }}>
          <div>
            <div>content</div>
            <div>원</div>
          </div>
        </Grid>
      </Grid> */}
      {/*  */}
      <div
        className="w-60 h-96 m-auto cursor-pointer rounded-lg"
        style={{ border: "1px solid #FCF7E5" }}
      >
        <div className="w-60 h-60 bg-black transition-transform transform hover:bg-opacity-30 rounded-t-lg">
          이미지박스
        </div>

        <div className="flex flex-col">
          <div className="flex space-x-14 px-3 mt-3">
            <div>밥</div>
            <div>205kal</div>
            <img
              className="w-8"
              src={scrapLineIcon}
              onClick={onClickScrapBtn}
            />
          </div>

          <div className="px-3 mt-14">누룽지 두부 계란죽</div>
        </div>
      </div>
      {/* 
       
     
      */}
    </div>
  );
};
export default RecipeList;
