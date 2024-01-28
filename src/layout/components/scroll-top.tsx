import { useEffect, useState } from "react";
import { MainIcon } from "../../assets/icon";

const ScrollTop = () => {
  const [isShowButton, setIsShowButton] = useState(false);

  const onHandleScroll = () => {
    const { scrollY } = window;
    scrollY > 50 ? setIsShowButton(true) : setIsShowButton(false);
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

  return (
    <div
      onClick={onScrollTop}
      className="fixed bottom-10 right-[10%] w-12 h-12 z-30 rounded-full flex place-content-center bg-primary-peanut hover:bg-primary-cheese transition-colors ease-in-out"
    >
      <img src={MainIcon.top} className="w-8 h-8 mt-2" />
    </div>
  );
};

export default ScrollTop;
