const LoadingPage = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto"></div>
        <p className="mt-4 text-gray-700 font-semibold text-lg">Loading...</p>
      </div>
    </div>
  );
};

export default LoadingPage;
