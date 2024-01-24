// import { useParams } from 'react-router-dom';
import NoResult from './components/no-result';
// import { SearchParams } from './type/search-param';
import SearchTitle from './components/search-title';

const SearchPage: React.FC = () => {
    // const { searchValue } = useParams<SearchParams>();
    const searchValue = '000';
    // typeGuard
    // ! -> searchValue은 undefined가 아니야! --> 불안정하다 쓰지마 정말 확실한 경우가아니면 typeAssertion
    if (!searchValue) return;
    return (
        <div className="w-screen h-screen flex flex-col items-center">
            <SearchTitle searchValue={searchValue} />
            <NoResult searchValue={searchValue} />
        </div>
    );
};

export default SearchPage;
