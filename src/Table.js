import React from 'react'
import Row from './Row'
import TableHeader from './TableHeader'

const Table = ({items}) => {
  return (
    <div className='table-container'>
        <table border="1">
            {   items.length &&
                <thead>
                    {
                        Object.entries(items[0]).map(
                            ([key, val]) => (
                            <TableHeader key={key} cellData={key.toUpperCase()} />
                        )
                    )
                    }
                </thead>
            }
            <tbody>
                {items.map(item => (
                    <Row key={item.id} item={item} />
                ))}
            </tbody>
        </table>
    </div>
  )
}

export default Table