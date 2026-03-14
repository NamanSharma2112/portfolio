"use client"

import { ReactNode } from "react";
type BioLinkProps = {
  href?: string;
  children: ReactNode;
};

export function BioLink({ href = "#", children }: BioLinkProps) {
  return (
    <a
      href={href}
      style={{
        color: "#1C1C1C",
        textDecoration: "underline",
        textDecorationColor: "rgba(28,28,28,0.32)",
        textUnderlineOffset: "2px",
        textDecorationThickness: "1px",
        transition: "text-decoration-color 0.15s",
      }}
      onMouseEnter={e => (e.currentTarget.style.textDecorationColor = "rgba(28,28,28,0.85)")}
      onMouseLeave={e => (e.currentTarget.style.textDecorationColor = "rgba(28,28,28,0.32)")}
    >
      {children}
    </a>
  );
}


export default function BioSection() {
  const p = {
    fontSize: "14px",
    lineHeight: "1.68",
    color: "#1C1C1C",
    margin: "0 0 14px",
  };

  return (
    <section style={{ marginBottom: "0" }}>
      <p style={p}>
        I was born in [City], [Country], and now live in [Your City], [State/Country].
      </p>

      <p style={p}>
        I founded{" "}
        <BioLink href="#">Your Company</BioLink>, a consumer software company. We created{" "}
        <BioLink href="#">Product One</BioLink>, a real-time messaging app, and{" "}
        <BioLink href="#">Product Two</BioLink>, a self-custody crypto wallet. In [Month Year],
        [Company] was acquired by <BioLink href="#">Acquirer</BioLink>, where I served as [Role]
        until [Date].
      </p>

      <p style={p}>
        I currently work at <BioLink href="#">Company</BioLink> as [Your Title], where I oversee
        our design, creative and research teams.
      </p>

      <p style={p}>
        I&apos;m also a co-founder at <BioLink href="#">Venture</BioLink>, which creates and
        publishes tools for achieving interface excellence, such as{" "}
        <BioLink href="#">project</BioLink>.
      </p>

      <p style={p}>
        I consider myself a designer at heart and enjoy building highly polished products.
      </p>

      <p style={{ ...p, marginBottom: 0 }}>
        You can reach me at <BioLink href="https://twitter.com/yourhandle">@yourhandle</BioLink>{" "}
        or <BioLink href="mailto:you@yourdomain.com">you@yourdomain.com</BioLink>.
      </p>
    </section>
  );
}