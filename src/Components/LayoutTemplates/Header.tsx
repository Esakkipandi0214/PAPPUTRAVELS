import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-blue-800 text-white p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo Section */}
        <div className="text-2xl font-bold">
          <Link legacyBehavior href="/">
            <a className="text-white hover:text-gray-300">TSN</a>
          </Link>
        </div>

        {/* Navigation Links */}
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link legacyBehavior href="/home">
                <a className="hover:text-gray-300">Home</a>
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="/sports">
                <a className="hover:text-gray-300">Sports</a>
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="/news">
                <a className="hover:text-gray-300">News</a>
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="/about">
                <a className="hover:text-gray-300">About</a>
              </Link>
            </li>
          </ul>
        </nav>

        {/* Search Bar */}
        <div className="relative">
          <input
            type="text"
            className="pl-8 pr-4 py-2 rounded-md bg-gray-200 text-gray-800"
            placeholder="Search..."
          />
          <span className="absolute left-2 top-2.5 text-gray-500">🔍</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
