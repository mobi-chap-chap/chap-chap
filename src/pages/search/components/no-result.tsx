import ChapButton from '../../../components/button';
import { SearchParams } from '../type/search-param';
import UseNavigation from '../../../hooks/use-navigation';

const NoResult: React.FC<SearchParams> = ({ searchValue }) => {
    const { goToMainPage } = UseNavigation();

    return (
        <div className="flex flex-col items-center justify-center mt-[250px]">
            {/* develop시 searchParams 가져오면서 searchValue로 대체예정입니다. */}
            <p className=" text-primary-chocolate text-[18px] my-[30px]">{searchValue}의 검색결과가 없습니다</p>
            <ChapButton variant={'noResults'} size={'square'} type="button" onClick={goToMainPage}>
                다른 레시피 구경하러가기
            </ChapButton>
        </div>
    );
};

export default NoResult;
