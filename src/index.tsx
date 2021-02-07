import React, { useState } from 'react';
import {
  Container,
  Page,
  Img,
  Text,
  PrevNext,
  DotContainer,
  Dot
} from './styled-components/'

interface ImagePaginationProps {
  pages: {
    src: string,
    text: string,
  }[],
}

const ImagePagination = ({
  pages
}: ImagePaginationProps) => {
  const [activeIndex] = useState(0);

  return (
    <>
      <Container>
        {pages.map((img, idx) => (
          <Page key={img.src} active={activeIndex === idx}>
            <Img src={img.src} />
            {img.text && <Text>{img.text}</Text>}
          </Page>
        ))}
        <PrevNext type={'prev'}>&#10094;</PrevNext>
        <PrevNext type={'next'}>&#10095;</PrevNext>  
      </Container>
      <DotContainer>
        {pages.map(_ => (
          <Dot />
        ))}
      </DotContainer>
    </>
  );
};

export default ImagePagination;
