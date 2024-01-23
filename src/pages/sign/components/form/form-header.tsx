import LogoGroup from '../../../../assets/icons/LogoGroup.svg';
// logoGroup assets에 추가
import Facebook from '../../../../assets/icons/facebook.svg';
import Instagram from '../../../../assets/icons/instagram.svg';
import GitHub from '../../../../assets/icons/github.svg';
import ChapButton from '../../../../components/button';

const FormHeader = () => {
    return (
        <div className="flex flex-col items-center justify-center">
            <img src={LogoGroup} />
            {/* icons 전역 컴포넌트 받아서 수정예정 */}
            <div className="w-[292px] h-[80px] flex justify-around my-[40px]">
                <ChapButton variant={'peanut'} size={'circle'} type="button">
                    <img src={Facebook} />
                </ChapButton>
                <ChapButton variant={'peanut'} size={'circle'} type="button">
                    <img src={Instagram} />
                </ChapButton>
                <ChapButton variant={'peanut'} size={'circle'} type="button">
                    <img src={GitHub} />
                </ChapButton>
            </div>
        </div>
    );
};

export default FormHeader;
