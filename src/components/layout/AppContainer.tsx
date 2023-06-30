const AppContainer: React.FC = ({ children }) => {
  return (
    <div className="min-h-screen pt-5 flex flex-col justify-between">
      <main className="mx-3 lg:mx-24">{children}</main>

      <footer className="px-3 lg:px-24 py-4 bg-gray-100 ">
        <div className="flex justify-between">
          <p className="text-md md:text-xl">By Samuel Santos</p>

          <a href="https://www.linkedin.com/in/santossamuelplus/">
            <span className="bg-blue-500 rounded-lg py-1 px-1.5 text-white font-bold">
              in
            </span>{" "}
            Linkedin
          </a>
        </div>
      </footer>
    </div>
  );
};

export default AppContainer;
