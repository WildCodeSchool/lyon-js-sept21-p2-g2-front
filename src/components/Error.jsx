/* This example requires Tailwind CSS v2.0+ */
export default function Example() {
  return (
    <div className="bg-apricot-pink min-h-screen px-4 py-16 sm:px-6 sm:py-24 md:grid md:place-items-center lg:px-8">
      <div className="max-w-max mx-auto">
        <main className="sm:flex">
          <p className="text-4xl font-extrabold text-dark-sienna sm:text-5xl">
            404
          </p>
          <div className="sm:ml-6">
            <div className="sm:border-l sm:border-melon-pink sm:pl-6">
              <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">
                Page not found
              </h1>
              <p className="mt-1 text-base text-english-red">
                Please check the URL in the address bar and try again.
              </p>
            </div>
            <div className="mt-10 flex space-x-3 sm:border-l sm:border-transparent sm:pl-6">
              <a
                href="/"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-dark-sienna hover:bg-english-red focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-melon-pink"
              >
                Go back home
              </a>
              <a
                href="/contact-us"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-dark-sienna hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-melon-pink"
              >
                Contact support
              </a>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
