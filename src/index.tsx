import React, { ReactElement } from 'react';

type WrappedElementType = 'div' | 'section' | 'span';
interface ImagePaginationProps {
  ContainerEl: WrappedElementType,
  children: ReactElement,
}

const ImagePagination = ({
  ContainerEl,
  children
}: ImagePaginationProps) => {
  return (
  <ContainerEl>
    {children}
  </ContainerEl>
  );
};

export default ImagePagination;