import React from 'react'

export const SessionItem = ({ item }) => {
  return (
    <tr>
      <th scope="row">{item.date}</th>
      <td>{item.type}</td>
      <td>{item.distance} km</td>
      <td>{item.comment}</td>
    </tr>
  )
}