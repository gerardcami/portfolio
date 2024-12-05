export const StatusIndicator = ({ text }) => (
  <div className="mt-4 text-neutral-900 dark:text-white">
    <span className="inline-flex items-center rounded-md border border-[#FFFFFF1A] px-2 py-0 text-xs font-semibold">
      <span className="mr-1.5 flex h-3 w-3 items-center">
        <span className="absolute inline-flex h-2 w-2 animate-ping rounded-full bg-lime-400 opacity-75"></span>
        <span className="relative inline-flex h-2 w-2 rounded-full bg-lime-400"></span>
      </span>
      {text}
    </span>
  </div>
);
