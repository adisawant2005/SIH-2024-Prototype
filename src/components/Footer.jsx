import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="h-[30vh] py-4 pt-10 z-10 bg-gradient-to-t from-white to-amber-400">
      <ul className="flex gap-[30vh] justify-center px-auto text-slate-900">
        <li className="">
          <ul>
            <li className="font-semibold hover:pointer hover:font-bold hover:opacity-100">
              <Link to={"/"}>Home</Link>
            </li>
            <li className=" hover:pointer hover:font-bold hover:opacity-100">
              <Link to={"/services"}>Services</Link>
            </li>
            <li className=" hover:pointer hover:font-bold hover:opacity-100">
              <Link to={"/contactus"}>Contact Us</Link>
            </li>
            <li className=" hover:pointer hover:font-bold hover:opacity-100">
              <Link to={"/login"}>Login</Link>
            </li>
            <li className=" hover:pointer hover:font-bold hover:opacity-100">
              <Link to={"/signup"}>Signup</Link>
            </li>
          </ul>
        </li>
        <li className="">
          <ul>
            <li className="font-semibold hover:pointer hover:font-bold hover:opacity-100">
              <Link to={"/about"}>About</Link>
            </li>
            <li className=" hover:pointer hover:font-bold hover:opacity-100">
              <Link to={"/team"}>Team</Link>
            </li>
            <li className=" hover:pointer hover:font-bold hover:opacity-100">
              <Link to={"/services"}>Services</Link>
            </li>
            <li className=" hover:pointer hover:font-bold hover:opacity-100">
              <Link to={"/faqs"}>FAQs</Link>
            </li>
          </ul>
        </li>

        <li className="">
          <ul>
            <li className="font-semibold  hover:pointer hover:font-bold hover:opacity-100">
              <Link to={"/privacy"}>Privacy</Link>
            </li>
            <li className=" hover:pointer hover:font-bold hover:opacity-100">
              <Link to={"/termsandconditions"}>Terms & Conditions</Link>
            </li>
            <li className=" hover:pointer hover:font-bold hover:opacity-100">
              <Link to={"/customercare"}>Customer Care</Link>
            </li>
          </ul>
        </li>

        <li className="">
          <ul>
            <li className="font-semibold  hover:pointer hover:font-bold hover:opacity-100">
              <a href="https://instagram.com" target="_blank">
                Social
              </a>
            </li>
            <li className=" hover:pointer hover:font-bold hover:opacity-100">
              <a href="https://github.com" target="_blank">
                Github
              </a>
            </li>
            <li className=" hover:pointer hover:font-bold hover:opacity-100">
              <a href="https://instagram.com" target="_blank">
                Instagarm
              </a>
            </li>
            <li className=" hover:pointer hover:font-bold hover:opacity-100">
              <a href="https://x.com" target="_blank">
                Twitter / X
              </a>
            </li>
            <li className=" hover:pointer hover:font-bold hover:opacity-100">
              <a href="https://facebook.com" target="_blank">
                Facebook
              </a>
            </li>
          </ul>
        </li>
      </ul>
      <p className="text-center  opacity-70 ">© 2024 CODESTRIX</p>
    </footer>
  );
};

export default Footer;
