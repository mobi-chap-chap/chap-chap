import { FooterIcon } from "../../assets/icon";

const Footer = () => {
  return (
    <div className="layout:container w-screen h-52  absolute inset-x-0 bottom-0  bg-primary-peanut py-6">
      <div className="flex flex-col  justify-center items-center">
        <img src={FooterIcon.Logo} className="my-5" />
        <div className="flex flex-row mb-11">
          <a href="#" className="px-2">
            <img src={FooterIcon.footerSNS01} />
          </a>
          <a href="#" className="px-2">
            <img src={FooterIcon.footerSNS02} />
          </a>
          <a href="#" className="px-2">
            <img src={FooterIcon.footerSNS03} />
          </a>
        </div>
        <p className="text-sm text-primary-chocolate">
          copyright © all rights reserved mobithon pair yeongCha
        </p>
      </div>
    </div>
  );
};
export default Footer;
