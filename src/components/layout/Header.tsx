import { FireIcon } from '@heroicons/react/24/solid';

export default function Header() {
  return (
    <header className="flex justify-center my-8">
      <div className="brand font-black text-3xl">
        Treinaê
        <FireIcon className="w-7 ml-2 mb-1 inline-block" />
      </div>
    </header>
  );
}
