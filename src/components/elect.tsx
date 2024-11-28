import React from 'react'

function Elect() {
  return (
    <div>
      <div className="grid grid-cols-10 grid-rows-8 gap-4">
        <div className="col-span-4 row-span-6"><img src="/public/electpro/1.png" alt="" /></div>
        <div className="col-span-2 row-span-3 col-start-5"></div>
        <div className="col-span-4 row-span-6 col-start-7 row-start-3"></div>
        <div className="col-span-2 row-span-3 col-start-5 row-start-6"></div>
        <div className="col-span-2 row-span-2 col-start-5 row-start-4"></div>
        <div className="col-span-2 row-span-2 col-start-7 row-start-1"></div>
        <div className="col-span-2 row-span-2 col-start-9 row-start-1"></div>
        <div className="col-span-2 row-span-2 row-start-7"></div>
        <div className="col-span-2 row-span-2 col-start-3 row-start-7"></div>
      </div>
    </div>
  );
}

export default Elect
