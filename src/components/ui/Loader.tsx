import Lottie from 'lottie-react';
import bookLoader from '@/assets/book-loader.json';

export const Loader = () => (
  <div className="flex items-center justify-center py-32">
    <Lottie
      animationData={bookLoader}
      loop
      className="w-40 h-40"
    />
  </div>
);
