import React from 'react';

function NavLinksSkeletons() {
  return (
    <div className="flex gap-2 animate-pulse">
      {[1, 2, 3, 4, 5, 6].map((item) => (
        <div key={item} className="flex shrink-0 items-center gap-2 rounded-xl bg-gray-200 p-2">
          <div className="h-5 w-5 rounded bg-gray-300" />
          <div className={`h-4 rounded bg-gray-300 ${item % 2 === 0 ? 'w-16' : 'w-12'}`} />
        </div>
      ))}
    </div>
  );
}

export default NavLinksSkeletons;
