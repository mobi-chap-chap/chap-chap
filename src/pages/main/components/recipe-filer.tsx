import React from "react";
const RecipeFilter: React.FC = () => {
  return (
    <div className="m-14 w-screen ">
      <div className="w-4/5 m-auto">
        <select
          className="w-28 h-8 bg-white text-black border border-primary-cheese font-thin rounded-md px-1.5"
          style={{ fontSize: "14px" }}
        >
          <option>레시피 종류</option>
          <option>밥</option>
          <option>후식</option>
          <option>반찬</option>
          <option>국 & 찌개</option>
        </select>
        <select
          className="w-28 h-8 bg-white text-black border border-primary-cheese font-thin mx-3 rounded-md px-1.5 "
          style={{ fontSize: "14px" }}
        >
          <option>조리 방법</option>
          <option>굽기</option>
          <option>끓이기</option>
          <option>찌기</option>
          <option>튀기기</option>
          <option>기타</option>
        </select>
        <select
          className="w-28 h-8 bg-white text-black border border-primary-cheese font-thin rounded-md  px-1.5"
          style={{ fontSize: "14px" }}
        >
          <option>칼로리 순</option>
          <option>낮은순</option>
          <option>높은순</option>
        </select>
      </div>
    </div>
  );
};
export default RecipeFilter;
