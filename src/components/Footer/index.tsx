import {
  FooterCopyright,
  Footer as FooterFB,
  FooterLink,
  FooterLinkGroup,
} from "flowbite-react";

export function Footer() {
  return (
    <FooterFB container className="shadow-md">
      <FooterCopyright
        href="#"
        by="Company Name™"
        year={new Date().getFullYear()}
      />
      <FooterLinkGroup>
        <FooterLink href="#">About</FooterLink>
        <FooterLink href="#">Privacy Policy</FooterLink>
        <FooterLink href="#">Licensing</FooterLink>
        <FooterLink href="#">Contact</FooterLink>
      </FooterLinkGroup>
    </FooterFB>
  );
}
