import * as S from "./Styled";
import Header from "./Header";
import Footer from "./Footer";

const Layout: React.FC = (props: any) => {
  return (
    <S.ConteneurGlobal>
      <Header />
      {props.children}
      <Footer />
    </S.ConteneurGlobal>
  );
};

export default Layout;
