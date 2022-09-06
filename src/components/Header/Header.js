import { StyledHeader } from "./Header.styles";

import Navigation from "../Navigation/Navigation";

export default function Header() {
  return (
    <StyledHeader>
      <h1>Header</h1>
      <Navigation />
    </StyledHeader>
  );
}
