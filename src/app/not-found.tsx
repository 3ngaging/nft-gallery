import Link from 'next/link';
import { Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-9xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#F2ECC8] to-[#6aa019] mb-4">
          404
        </h1>
        <h2 className="text-3xl font-bold mb-4">NFT no encontrado</h2>
        <p className="text-gray-400 mb-8 max-w-md">
          Lo sentimos, el NFT que buscas no existe o ha sido movido.
        </p>
        <Link
          href="/gallery"
          className="inline-flex items-center gap-2 bg-[#F2ECC8] hover:bg-[#aca686] text-white px-6 py-3 font-semibold transition shadow-[#a59f7e] hover:shadow-[#dfd7ac]"
        >
          <Home size={20} />
          Volver a la galería
        </Link>
      </div>
    </div>
  );
}