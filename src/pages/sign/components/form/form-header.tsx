import ChapButton from '../../../../components/button';
import { FormIcon } from '../../../../assets/icon';
import { Link } from 'react-router-dom';

const FormHeader = () => {
    return (
        <div className="flex flex-col items-center justify-center">
            <img src={FormIcon.LogoGroup} />
            <div className="w-[292px] h-[80px] flex justify-around my-[40px]">
                <ChapButton variant={'peanut'} size={'circle'} type="button">
                    <img src={FormIcon.formSNS01} className="p-5" />
                </ChapButton>
                <Link to="https://github.com/mobi-chap-chap/chap-chap">
                    <ChapButton variant={'peanut'} size={'circle'} type="button">
                        <img src={FormIcon.formSNS02} className="p-5" />
                    </ChapButton>
                </Link>
                <ChapButton variant={'peanut'} size={'circle'} type="button">
                    <img src={FormIcon.formSNS03} className="p-5" />
                </ChapButton>
            </div>
        </div>
    );
};

export default FormHeader;
