import { FormIcon } from "../../assets/icon";
import ChapButton from "../../components/button";
import ChapInput from "../../components/input";

const MainPage = () => {
  return (
    <div>
      <ChapInput label={"testing"} type="text" error="중복된 아이디입니다" />
      <div className="my-[20px]" />
      <ChapButton type="button" variant={"cheese"} size={"rounded"}>
        button
      </ChapButton>
      <div className="my-[20px]" />
      <ChapButton type="button" variant={"peanut"} size={"circle"}>
        <img src={FormIcon.formSNS01} />
      </ChapButton>
      <div className="my-[20px]" />
      <ChapButton type="button" variant={"noResults"} size={"square"}>
        no results
      </ChapButton>
    </div>
  );
};
export default MainPage;
