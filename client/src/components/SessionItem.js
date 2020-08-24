import React from 'react'

export default ({ item }) => {
  return (
    <tr>
      <th scope="row">{item.date}</th>
      <td>{item.type}</td>
      <td>{item.distance}</td>
      <td>{item.comment}</td>
    </tr>
  )
}