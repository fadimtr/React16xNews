import React, {memo} from 'react';

console.log('imported');
const LazyImport = memo(({username,updateUsername}) => {
    return <span>Hello!</span>;
});

export default LazyImport;