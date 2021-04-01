import React from 'react';
import TableList from '../TableList/TableList';

export default function Table( props ){
    return (
        <table className="table">
            <thead className="thead-dark">
                <tr>
                    <th onClick={()=> props.onSort('rank')}>
                        Rank {props.fieldSort === 'rank' ? props.typeSort === 'desc' ? <span>&#8593;</span> : <span>&#8595;</span> : null} 
                    </th>
                    <th onClick={()=> props.onSort('name')}>
                        Name {props.fieldSort === 'name' ? props.typeSort === 'desc' ? <span>&#8593;</span> : <span>&#8595;</span> : null} 
                    </th>
                    <th onClick={()=> props.onSort('hitting')}>
                        Hitting {props.fieldSort === 'hitting' ? props.typeSort === 'desc' ? <span>&#8593;</span> : <span>&#8595;</span> : null} 
                    </th>
                    <th onClick={()=> props.onSort('speedshoothing')}>
                        Speedshoothing {props.fieldSort === 'speedshoothing' ? props.typeSort === 'desc' ? <span>&#8593;</span> : <span>&#8595;</span> : null} 
                    </th>
                </tr>
            </thead>
            <tbody>
                {props.data.map(item => (
                    <TableList 
                        key={item.rank} 
                        data={item}
                    />
                ))}
            </tbody>
        </table>
    )
}