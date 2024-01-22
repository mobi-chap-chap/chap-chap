import { HeaderIcon } from "../../assets/icon";

const Header = () => {
  return (
    <div className="layout:container w-screen h-24 fixed inset-x-0 top-0 border-solid border-b-2 border-b-primary-cheese">
      <a href="#" className="absolute top-7 left-7">
        <img src={HeaderIcon.Logo} />
      </a>
      <div className="absolute top-7 right-6 flex flex-row">
        <a href="#" className="px-4">
          <img src={HeaderIcon.search} className="w-8" />
        </a>
        <a href="#" className="px-4">
          <img src={HeaderIcon.bookmarkLine} className="w-8" />
        </a>
        <a href="#" className="px-4">
          <img src={HeaderIcon.account} className="w-8" />
        </a>
      </div>
    </div>
  );
};
export default Header;
