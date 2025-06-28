export default function FooterSection() {
  return (
    <footer className="bg-gray-800 text-white py-6 text-center px-4">
      <div className="max-w-6xl mx-auto text-sm sm:text-base">
        &copy; {new Date().getFullYear()} Autismo con Sentido. Todos los derechos
        reservados.
      </div>
    </footer>
  );
}
