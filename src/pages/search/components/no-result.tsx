import ChapButton from '../../../components/button';
import { SearchParams } from '../../../type/search.type';
import UseNavigation from '../../../hooks/use-navigation';
import { FC } from 'react';

const NoResult: FC<SearchParams> = ({ searchValue }) => {
    const { goToMainPage } = UseNavigation();

    return (
        <div className="flex flex-col items-center py-[280px] mb-[100px]">
            {/* develop시 searchParams 가져오면서 searchValue로 대체예정입니다. */}
            <p className=" text-primary-chocolate text-[18px] pb-[10px]">{searchValue}의 검색결과가 없습니다</p>
            <ChapButton variant={'noResults'} size={'square'} type="button" onClick={goToMainPage}>
                다른 레시피 구경하러가기
            </ChapButton>
        </div>
    );
};

export default NoResult;
