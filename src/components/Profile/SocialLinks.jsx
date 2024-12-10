import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import "tippy.js/animations/scale-extreme.css";

export const SocialLinks = ({ links, className = "" }) => (
  <div className={`${className}`}>
    <ul className="flex items-center justify-start gap-x-4">
      {links.map((link, index) => (
        <li
          key={index}
          className="group relative rounded-lg hover:bg-[#292524]"
        >
          <Tippy
            content={link.tooltip}
            placement="bottom"
            arrow={true}
            animation="scale-extreme"
            theme="dark"
            distance={20}
          >
            <a
              href={link.url}
              target="_blank"
              className="rounded-lg transition duration-200"
            >
              {link.icon}
            </a>
          </Tippy>
        </li>
      ))}
    </ul>
  </div>
);
