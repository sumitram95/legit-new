import React, { useState, useRef, useCallback } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import AppSpinner from '../components/AppSpinner'; // Adjust the import path as necessary

const InfiniteLoadingWrapper = ({ loadMore, hasMore, children }) => {
  const [isLoading, setIsLoading] = useState(false);

  const load = () => {
    setIsLoading(true);
    loadMore().finally(() => setIsLoading(false));
  };

  const onError = () => {
    setIsLoading(false);
  };

  return (
    <InfiniteScroll
      dataLength={0} // Adjust this according to your data length
      next={load}
      hasMore={hasMore}
      loader={<AppSpinner />}
      endMessage={<div>End of Results</div>}
      onError={onError}
    >
      {children}
    </InfiniteScroll>
  );
};

export default InfiniteLoadingWrapper;
