export default function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <div className="max-w-md mx-auto text-center">
        <h1 className="text-7xl font-bold text-gray-800 dark:text-white">
          404
        </h1>
        <p className="mt-4 text-xl font-semibold text-gray-600 dark:text-gray-400">
          Page Not Found
        </p>
        <p className="mt-2 text-gray-500 dark:text-gray-300">
          The page you are looking for could not be found.
        </p>
      </div>
    </div>
  );
}
