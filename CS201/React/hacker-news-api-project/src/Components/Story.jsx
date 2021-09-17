import React from 'react';
import { useAppContext } from '../util/context';

const Story = () => {
  return (
    <div className="Story">

      { console.log(useAppContext) }

    </div>
  );
}

export default Story;
