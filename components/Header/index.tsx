import ExpiryTimer from "@/components/Header/ExpiryTimer";

const aCx =
  "underline decoration-primary-400/0 hover:decoration-primary-400 underline-offset-4 transition-all duration-300";

export function Header() {
  return (
    <header
      id="header"
      className="w-full flex self-start items-center p-[--app-padding] justify-between"
    >
      <div className="group flex gap-8">
        <a
          href="https://github.com/SuyashPatil-29/ai-teacher"
          target="_blank"
          rel="noreferrer"
          className={aCx}
        >
          <p>GitHub</p>
        </a>
        Made with ❤️ by Suyash Patil
      </div>
      <ExpiryTimer />
    </header>
  );
}

export default Header;
