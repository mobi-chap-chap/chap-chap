import styled from "styled-components";
import { FlexCenter } from "../../styles/common.style";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ScrollTop = () => {
  const [isShowButton, setIsShowButton] = useState(false);

  const navigate = useNavigate();

  const onHandleScroll = () => {
    const { scrollY } = window;

    scrollY > 200 ? setIsShowButton(true) : setIsShowButton(false);
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
    <Container>
      {isShowButton && (
        <ToTop onClick={onScrollTop}>
          <Icon />
        </ToTop>
      )}
    </Container>
  );
};

export default ScrollTop;

const Container = styled.div`
  position: fixed;
  bottom: 20px;
  right: 50px;
`;

const ToTop = styled.button`
  ${FlexCenter}
  width: 56px;
  height: 56px;
  border-radius: 50%;
  border: 1px solid #555;
  margin-bottom: 10px;
  transition: all 0.6s;

  &:hover {
    cursor: pointer;
  }
`;

const Icon = styled.img`
  padding: 10px;
  width: 56px;
  height: 56px;
  @media ${({ theme }) => theme.DEVICE.mobile} {
    width: 40px;
    height: 40px;
  }
  @media ${({ theme }) => theme.DEVICE.tablet} {
  }
`;
