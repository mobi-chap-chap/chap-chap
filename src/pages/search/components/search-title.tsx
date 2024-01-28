import { FC } from 'react';
// import { SearchParams } from '../../../type/search.type';

const SearchTitle: FC = () => {
    return (
        <div className="w-[1037px] text-[24px] m-auto pt-[90px]">
            <p className=" text-primary-chocolate text-[24px] ">에 대한 검색 결과입니다.</p>
            <div className="h-[20px] bg-primary-peanut mt-[10px]" />
        </div>
    );
};

export default SearchTitle;
