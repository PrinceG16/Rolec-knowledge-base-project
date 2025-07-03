import { NavBar } from "@Rolec-Services/rolec-ui";

export default function Navigation() {
  return (
    <>
      <div className="mx-auto w-fit sm:!hidden">
        <NavBar
          currentHref="#technical-documentation"
          navItems={[
            {
              children: "Summary",
              href: "#technical-documentation",
            },
            { children: "FAQ", href: "#faq", notifications: 0 },
            { children: "Videos", href: "#videos", disabled: false },
            { children: "Articles", href: "#articles" },
          ]}
        />
      </div>
      <div className="mx-auto hidden w-fit sm:!block">
        <NavBar
          currentHref="#technical-documentation"
          navItems={[
            {
              children: "Technical Documentation",
              href: "#technical-documentation",
            },
            { children: "FAQ", href: "#faq", notifications: 0 },
            { children: "Videos", href: "#videos", disabled: false },
            { children: "Articles", href: "#articles" },
          ]}
        />
      </div>
    </>
  );
}
