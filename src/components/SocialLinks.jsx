export const SocialLinks = ({ links, className = "" }) => (
  <div className={`${className}`}>
    <ul className="flex items-center justify-start gap-x-4">
      {links.map((link, index) => (
        <li
          key={index}
          className="group relative rounded-lg p-2 hover:bg-[#292524]"
        >
          <a
            href={link.url}
            target="_blank"
            className="text-foreground/80 hover:bg-accent hover:text-accent-foreground/80 rounded-lg transition duration-200"
          >
            {link.icon}
          </a>
          <span className="absolute left-1/2 top-full mt-2 w-max -translate-x-1/2 rounded bg-black px-2 py-1 text-xs text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            {link.tooltip}
            <span className="absolute bottom-full left-1/2 mt-1 h-0 w-0 -translate-x-1/2 border-b-4 border-l-4 border-r-4 border-transparent border-b-black"></span>{" "}
          </span>
        </li>
      ))}
    </ul>
  </div>
);
