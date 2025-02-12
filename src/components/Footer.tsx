
const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white p-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* APPLICATIONS Section */}
        <div>
          <h3 className="text-lg font-semibold cursor-pointer">APPLICATIONS</h3>
          <ul className="mt-3 space-y-2">
            {["Apparel", "Automotive", "Filtration", "Customised Nonwoven"].map((item) => (
              <li key={item} className="text-gray-400 hover:text-white transition cursor-pointer">
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* COMPANY Section */}
        <div>
          <h3 className="text-lg font-semibold cursor-pointer">COMPANY</h3>
          <ul className="mt-3 space-y-2">
            {["Who we are", "Global Competency", "Innovation", "ESG Impact"].map((item) => (
              <li key={item} className="text-gray-400 hover:text-white transition cursor-pointer">
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* MORE Section */}
        <div>
          <h3 className="text-lg font-semibold cursor-pointer">MORE</h3>
          <ul className="mt-3 space-y-2">
            {["Contact", "Global Competency"].map((item) => (
              <li key={item} className="text-gray-400 hover:text-white transition cursor-pointer">
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* FOLLOW US Section */}
        <div>
          <h3 className="text-lg font-semibold cursor-pointer">FOLLOW US</h3>
          <ul className="mt-3 space-y-2">
            <li className="text-gray-400 hover:text-white transition cursor-pointer">LinkedIn</li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center mt-6">
        <p className="text-gray-400">© 2025 My Website</p>
      </div>
    </footer>
  );
};

export default Footer;
