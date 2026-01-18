import { CareerBoard } from "./components/CareerBoard";

function App() {
  return (
    <div className="min-h-screen bg-gray-50/50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <header className="mb-10 text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl mb-3">
            Career Portfolio
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A comprehensive view of my professional journey, skills, and projects.
          </p>
        </header>

        <main>
          <CareerBoard />
        </main>

        <footer className="mt-20 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Career Portfolio. Built with React & TanStack Table.</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
