import { FC } from 'react';

const SearchTitle: FC<{ RCP_NM?: string }> = ({RCP_NM}) => {
    return (
        <div className="w-[1152px] text-[24px] m-auto pt-[150px]">
            <p className=" text-primary-chocolate text-[24px] "><span className="text-primary-cheese">{RCP_NM}</span> 이(가) 포함된 검색 결과입니다.</p>
            <div className="h-[20px] bg-primary-peanut mt-[10px]" />
        </div>
    );
};

export default SearchTitle;
