import React from 'react';

import { LoadingSkeleton } from './styles';

interface SkeletonProps {
  width: string;
  height: string;
}

const Skeleton: React.FC<SkeletonProps> = ({ width, height }) => (
  <LoadingSkeleton width={width} height={height} />
);

export default Skeleton;
