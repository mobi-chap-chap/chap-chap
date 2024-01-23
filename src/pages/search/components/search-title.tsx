import { SearchParams } from '../type/search-param';

const SearchTitle: React.FC<SearchParams> = ({ searchValue }) => {
    return (
        <div className="w-[1037px] pt-[120px] text-[24px] ">
            <p className=" text-primary-chocolate text-[18px] mt-[30px]">{searchValue}에 대한 검색 결과입니다.</p>
            <div className="h-[20px] bg-primary-peanut mt-[10px]" />
        </div>
    );
};

export default SearchTitle;
