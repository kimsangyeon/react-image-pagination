import React, { ReactElement } from 'react';
interface ImagePaginationProps {
  children: ReactElement,
}

const ImagePagination = ({
  children
}: ImagePaginationProps) => {
  return (
  <div>
    {children}
    <div>test</div>
  </div>
  );
};

export default ImagePagination;