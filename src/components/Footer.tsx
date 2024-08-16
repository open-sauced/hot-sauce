import footerContext from "../constants";
import OpenSaucedLogo from '../assets/openSauced-icon.png'



const Footer = (): JSX.Element => (
  <div>
    <footer className="px-6 md:px-16 w-full bg-light-slate-2 transition">
      <div className=" font-medium lg:border-t lg:py-8 lg:items-center lg:justify-between lg:gap-x-4 flex flex-col gap-y-4 lg:flex-row py-2 w-full">
        <div className="text-center lg:text-left justify-center gap-1 flex items-center">
          <div className="w-6 h-6 relative !min-w-[24px] min-h-[24px]">
            <img
              alt="brand logo"
              src={OpenSaucedLogo}
            />
          </div>

          <span className="lg:hidden font-bold text-light-slate-12 ">OpenSauced</span>

          <p className="hidden !text-light-slate-9 lg:inline-block">
            ©
            {" "}

            {(new Date).getFullYear()}

            {" "}

            <span className="hidden lg:inline-block">OpenSauced</span>
          </p>
        </div>

        <div className="flex lg:mr-auto lg:text-sm text-light-slate-11 justify-center gap-x-4">
          <a
            className="px-2 hover:text-light-slate-12 "
            href={footerContext[1].hot?.url}
            rel="noopener noreferrer"
            target="_blank"
          >
            {footerContext[1].hot?.text}
          </a>

          <a
            className="px-2 hover:text-light-slate-12"
            href={footerContext[1].openSauced?.url}
            rel="noopener noreferrer"
            target="_blank"
          >
            {footerContext[1].openSauced?.text}
          </a>
        </div>

        <div className="flex justify-center gap-x-4 ">
          <div className=" hidden lg:flex items-center border-r pr-4   gap-x-4 text-light-slate-11 text-sm">
            <a
              className="px-2 hover:text-light-slate-12"
              href={footerContext[0].terms?.url}
              rel="noreferrer"
              target="_blank"
            >
              {footerContext[0].terms?.text}
            </a>

            <a
              className="px-2 hover:text-light-slate-12"
              href={footerContext[0].privacy?.url}
              rel="noreferrer"
              target="_blank"
            >
              {footerContext[0].privacy?.text}
            </a>

            <a
              className="px-2 hover:text-light-slate-12"
              href={footerContext[0].status?.url}
              rel="noreferrer"
              target="_blank"
            >
              {footerContext[0].status?.text}
            </a>
          </div>

          {footerContext[2].socials?.map(({ icon: Icon, label, url }, index) => (
            <a
              key={index}
              href={url}
              rel="noopener noreferrer"
              target="_blank"
            >
              <Icon
                aria-label={label}
                className="text-2xl hover:text-light-slate-10 text-light-slate-9"
              />
            </a>
          ))}
        </div>

        <div className="flex md:justify-center lg:hidden lg:border-none lg:order-2 border-t py-3 pb-4 mt-2 text-sm justify-between">
          <p className="text-light-slate-9">
            ©
            {" "}

            {(new Date).getFullYear()}

            {" "}

            <span className="hidden md:inline-block">Open sauced</span>
          </p>

          <div className="flex items-center gap-x-3 text-light-slate-11 text-sm">
            <a
              className="px-2"
              href={footerContext[0].terms?.url}
              rel="noreferrer"
              target="_blank"
            >
              {footerContext[0].terms?.text}
            </a>

            <a
              className="px-2"
              href={footerContext[0].privacy?.url}
              rel="noreferrer"
              target="_blank"
            >
              {footerContext[0].privacy?.text}
            </a>

            <a
              className="px-2"
              href={footerContext[0].status?.url}
              rel="noreferrer"
              target="_blank"
            >
              {footerContext[0].status?.text}
            </a>
          </div>
        </div>
      </div>
    </footer>
  </div>
);

export default Footer;
