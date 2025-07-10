// src/components/atoms/lazy.tsx
import React, { Suspense } from "react";

type LazyWrapperProps = {
  component: React.LazyExoticComponent<React.ComponentType<any>>;
};

const LazyWrapper: React.FC<LazyWrapperProps> = ({ component: Component }) => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Component />
    </Suspense>
  );
};

export default LazyWrapper;
