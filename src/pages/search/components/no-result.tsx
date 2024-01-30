import { FC } from 'react';
import ChapButton from '../../../components/button';
import UseNavigation from '../../../hooks/use-navigation';

const NoResult: FC<{ RCP_NM?: string }> = ({ RCP_NM }) => {
    const { goToMainPage } = UseNavigation();

    return (
        <div className="flex flex-col items-center py-[232px]">
            <p className=" text-primary-chocolate text-[18px] pb-[10px]"><span className='text-primary-cheese'>{RCP_NM}</span> 의 검색결과가 없습니다</p>
            <ChapButton variant={'noResults'} size={'square'} type="button" onClick={goToMainPage}>
                다른 레시피 구경하러가기
            </ChapButton>
        </div>
    );
};

export default NoResult;
