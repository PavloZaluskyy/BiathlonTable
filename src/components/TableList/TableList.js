import React from 'react';

export default function TableList(props){
    return (
        <tr>
            <th>{props.data.rank}</th>
            <td>{props.data.name}</td>
            <td>{props.data.hitting}</td>
            <td>{props.data.speedshoothing}</td>
        </tr>
    )
}