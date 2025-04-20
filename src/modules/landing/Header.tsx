export const Header = () => {
  return (
    <header className="bg-transparent flex items-center justify-between px-8 py-6">
      <div className="flex items-center gap-8">
        <div className="text-2xl font-bold gradient-logo">EcoRally</div>
        <nav>
          <ul className="flex gap-6">
            <li className="text-gray-400 hover:text-white transition-colors">
              <a href="">Mission</a>
            </li>
            <li className="text-gray-400 hover:text-white transition-colors">
              <a href="">How it works</a>
            </li>
            <li className="text-gray-400 hover:text-white transition-colors">
              <a href="">Features</a>
            </li>
            <li className="text-gray-400 hover:text-white transition-colors">
              <a href="">Join Us</a>
            </li>
          </ul>
        </nav>
      </div>
      <button className="px-4 py-2 bg-blue-400 text-white cursor-pointer rounded-lg">
        Get Started
      </button>
    </header>
  );
};
