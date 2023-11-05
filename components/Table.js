import React from 'react';
import TableItem from '@/components/TableItem';

const Table = ({ data }) => {
  return (
    <div className="relative w-[80vw] md:w-full overflow-x-auto rounded-lg mb-5">
      <table className="text-left text-neutral-400">
        <thead className="text-lg bg-neutral-200 text-neutral-800">
          <tr>
            {
              Object.keys(data[0]).map(item => {
              if (['_id', 'createdAt', 'updatedAt', '__v'].includes(item)) { return null; }
              return(
              <th key={item} scope="col" className="px-6 py-3">{item}</th>
              )
            })
            }
            <th scope="col" className="px-6 py-3">
              Дія
            </th>
          </tr>
        </thead>
        <tbody>
          {
          data?.map(item => {
          return(
            <TableItem key={item.link} item={item} />
          )
        })
        }
        </tbody>
      </table>
    </div>
  );
};

export default Table;