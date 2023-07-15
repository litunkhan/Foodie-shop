import { useEffect } from 'react';

const useTitle = (title) => {
  useEffect(() => {
    document.title = ` Foodie-Restaurant || ${title} `;
  }, [title]);
};

export default useTitle;