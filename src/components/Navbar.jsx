import Link from "next/link";

const links = [
  { url: "/", title: "Home" },
  { url: "/about", title: "About" },
  { url: "/portfolio", title: "Portfolio" },
  { url: "/contact", title: "Contact" },
];

const Navbar = () => {
  return (
    <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
      {/* LOGO */}
      <div>
        <Link
          href="/"
          className="text-sm bg-black rounded-md p-1 font-semibold flex justify-center items-center"
        >
          <span className="text-white mr-1">Lalit</span>
          <span className="w-12 h-8 rounded bg-white text-black flex items-center justify-center">
            .dev
          </span>
        </Link>
      </div>
      {/* responsive menu */}
      <div>
        <button className="w-10 h-8 flex flex-col justify-between">
          <div className="w-10 h-1 bg-black rounded "></div>
          <div className="w-10 h-1 bg-black rounded "></div>
          <div className="w-10 h-1 bg-black rounded "></div>
        </button>
        <div className="">
          {links.map((link) => (
            <Link key={link.url} href={link.url}>
              {link.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Navbar;
