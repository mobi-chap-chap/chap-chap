import ChapButton from '../../../components/button';
import { SearchParams } from '../type/search-param';

const NoResult: React.FC<SearchParams> = ({ searchValue }) => {
    return (
        <div className="flex flex-col items-center justify-center mt-[200px]">
            {/* searchParams 가져오면서 searchValue로 대체 */}
            <p className=" text-primary-chocolate text-[18px] my-[30px]">{searchValue}의 검색결과가 없습니다</p>
            <ChapButton variant={'noResults'} size={'square'} type="button">
                다른 레시피 구경하러가기
            </ChapButton>
        </div>
    );
};

export default NoResult;
