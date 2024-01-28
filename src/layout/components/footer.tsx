import { Link } from "react-router-dom"
import { FooterIcon } from "../../assets/icon"

const Footer = () => {
  return (
    <div className="layout:container h-52 w-screen bg-primary-peanut py-6 ">
      <div className="flex flex-col  items-center justify-center">
        <img src={FooterIcon.Logo} className="my-5" />
        <div className="mb-11 flex flex-row">
          <Link className="px-2" to={"#"}>
            <img src={FooterIcon.footerSNS01} />
          </Link>
          <Link className="px-2" to={"https://github.com/mobi-chap-chap/chap-chap"}>
            <img src={FooterIcon.footerSNS02} alt="chap chap github repository" />
          </Link>
          <Link className="px-2" to={"#"}>
            <img src={FooterIcon.footerSNS03} />
          </Link>
        </div>
        <p className="text-sm text-primary-chocolate">copyright © all rights reserved mobithon pair yeongCha</p>
      </div>
    </div>
  )
}
export default Footer
