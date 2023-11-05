import React from 'react';
import { Flex, Text } from '@radix-ui/themes';

interface Props {
  itemCount: number;
  pageSize: number;
  currentPage: number;
}

const Pagination = ({ itemCount, pageSize, currentPage }: Props) => {
  const pageCount = Math.ceil(itemCount / pageSize);
  if (pageCount <= 1) return null;

  return (
    <Flex>
      <Text>
        Page {currentPage} of {pageCount}
      </Text>
    </Flex>
  );
};

export default Pagination;
