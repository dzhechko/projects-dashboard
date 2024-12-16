import React from 'react';

export function LoadingState() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="animate-pulse rounded-lg border border-gray-200 bg-white p-6"
        >
          <div className="flex items-center space-x-3">
            <div className="h-10 w-10 rounded-full bg-gray-200" />
            <div className="h-4 w-1/3 rounded bg-gray-200" />
          </div>
          <div className="mt-4 space-y-2">
            <div className="h-3 w-3/4 rounded bg-gray-200" />
            <div className="h-3 w-1/2 rounded bg-gray-200" />
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {[...Array(3)].map((_, j) => (
              <div
                key={j}
                className="h-6 w-16 rounded-full bg-gray-200"
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}