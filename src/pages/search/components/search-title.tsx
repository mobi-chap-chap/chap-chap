import { FC } from "react"
import { SearchParams } from "../../../type/search.type"

const SearchTitle: FC<SearchParams> = ({ searchValue }) => {
  return (
    <div className="m-auto w-[1037px] pt-[90px] text-[24px]">
      <p className=" text-[24px] text-primary-chocolate ">{searchValue}에 대한 검색 결과입니다.</p>
      <div className="mt-[10px] h-[20px] bg-primary-peanut" />
    </div>
  )
}

export default SearchTitle
