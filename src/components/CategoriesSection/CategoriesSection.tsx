import { Link } from 'react-router-dom';

export const CategoriesSection = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-8 text-left">Shop by category</h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          <Link
            to="/paper"
            className="group"
          >
            <div className="overflow-hidden rounded-2xl">
              <img
                src="/img/categories/Paper-books.png"
                alt="Paper books"
                className="w-full aspect-[4/3] object-cover transition duration-500 group-hover:scale-105"
              />
            </div>

            <h3 className="mt-4 text-xl font-semibold text-left">
              Paper books
            </h3>
            <p className="text-gray-500 text-left">10,305 books</p>
          </Link>

          <Link
            to="/audiobook"
            className="group"
          >
            <div className="overflow-hidden rounded-2xl">
              <img
                src="/img/categories/Audiobooks.png"
                alt="Audiobooks"
                className="w-full aspect-[4/3] object-cover transition duration-500 group-hover:scale-105"
              />
            </div>

            <h3 className="mt-4 text-xl font-semibold text-left">Audiobooks</h3>
            <p className="text-gray-500 text-left">10,305 books</p>
          </Link>

          <Link
            to="/Kindle"
            className="group"
          >
            <div className="overflow-hidden rounded-2xl">
              <img
                src="/img/categories/Kindle-books.png"
                alt="Kindle books"
                className="w-full aspect-[4/3] object-cover transition duration-500 group-hover:scale-105"
              />
            </div>

            <h3 className="mt-4 text-xl font-semibold text-left">
              Kindle books
            </h3>
            <p className="text-gray-500 text-left">10,305 books</p>
          </Link>
        </div>
      </div>
    </section>
  );
};
