import Image from "next/image";
import Link from "next/link";

const navItems: {
  label: string;
  href: string;
}[] = [
  // {
  //   label: "Home",
  //   href: "/",
  // },
  // { label: "About Us", href: "/about" },
  // { label: "Services", href: "/services" },
  // { label: "Blog", href: "/blog" },
  // { label: "Contact Us", href: "/contact" },
];

const Header = () => {
  return (
    <header className="main-header">
      <div className="header-sticky">
        <nav className="navbar navbar-expand-lg">
          <div className="container">
            {/* Logo Start */}
            <Link className="navbar-brand " href="/">
              <h1>Wholstick</h1>
              {/* <Image src="/images/logo.svg" alt="Logo" width={150} height={50} /> */}
            </Link>
            {/* Logo End */}

            {/* Main Menu Start */}
            <div className="collapse navbar-collapse main-menu">
              <div className="nav-menu-wrapper">
                <ul className="navbar-nav mr-auto" id="menu">
                  {navItems.map((item, idx) => (
                    <li key={idx} className={`nav-item`}>
                      <Link className="nav-link" href={item.href}>
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Header Btn Start */}
              <div style={{display:"block !important"}} className="header-btn">
                <Link href="contact.html" className="btn-default">
                  Get Started
                </Link>
              </div>
              {/* Header Btn End */}
            </div>
            {/* Main Menu End */}

            <div className="navbar-toggle"></div>
            

          </div>
        </nav>
        <div className="responsive-menu"></div>
      </div>
    </header>
  );
};

export default Header;
