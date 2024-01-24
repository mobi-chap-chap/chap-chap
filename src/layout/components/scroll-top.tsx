import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MainIcon } from "../../assets/icon";

const ScrollTop = () => {
  const [isShowButton, setIsShowButton] = useState(false);

  const navigate = useNavigate();

  const onHandleScroll = () => {
    const { scrollY } = window;

    scrollY > 100 ? setIsShowButton(true) : setIsShowButton(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", onHandleScroll);

    return () => {
      window.removeEventListener("scroll", onHandleScroll);
    };
  }, []);

  const onScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (window.location.pathname === "/") return null;
  // const dynamicClasses = isShowButton ? "fixed bottom-30 right-80 w-12 h-12 rounded-full flex place-content-center bg-primary-peanut" : "hide";
  return (
    <div
      onClick={onScrollTop}
      className="fixed bottom-30 right-80 w-12 h-12 rounded-full flex place-content-center bg-primary-peanut"
    >
      <img src={MainIcon.top} className="w-8 h-8 mt-2" />
    </div>
  );
};

export default ScrollTop;
