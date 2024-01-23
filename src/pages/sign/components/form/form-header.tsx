import logoGroup from '../../../../assets/icons/logoGroup.png';
// logoGroup assets에 추가
import Facebook from '../../../../assets/icons/form-sns-01.png';
import Instagram from '../../../../assets/icons/form-sns-02.png';
import Twitter from '../../../../assets/icons/form-sns-03.png';

const FormHeader = () => {
    return (
        <div className="flex flex-col items-center justify-center">
            <img src={logoGroup} />
            {/* icons 전역 컴포넌트 받아서 수정예정 */}
            <div className="w-3/6 flex justify-around">
                <button type="button">
                    <img className="h-8 w-8 mx-auto" src={Facebook} />
                </button>
                <button type="button">
                    <img className="h-8 w-8 mx-auto" src={Instagram} />
                </button>
                <button type="button">
                    <img className="h-8 w-8 mx-auto" src={Twitter} />
                </button>
            </div>
        </div>
    );
};

export default FormHeader;
