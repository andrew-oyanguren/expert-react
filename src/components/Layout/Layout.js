import { StyledLayout } from "./Layout.styles";
import Header from "../Header/Header";

export default function Layout({ children }) {
  return (
    <StyledLayout>
      <Header />
      {children}
    </StyledLayout>
  );
}
