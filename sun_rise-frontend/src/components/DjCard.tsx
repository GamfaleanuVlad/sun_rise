import React from 'react'
import { XIcon, PencilIcon } from '@heroicons/react/solid'
import { useNavigate } from 'react-router-dom'
import { store } from '../store'
import { Dj } from '../models/djs'

type Props = {
  dj: Dj
}

const DjCard = (props: Props) => {
  const { dj: { id, name } } = props
  const navigate = useNavigate();
  const {dispatch} = store;

  const handleEditDj = () =>{
    navigate(`/dj/edit/${id}`)
  }

  const handleDeleteDj = () => {
    dispatch.djs.delete(id)
  }

  return (
    <div className='dj-card' onClick={(e:React.MouseEvent<HTMLDivElement>) => {e.stopPropagation();  navigate(`/dj/${id}`)}}>

      <p className='dj-card__id'>{id}</p>
      <h2 className="dj-card__name">{name}</h2>
      <div className='dj-card__controls'>
        <PencilIcon onClick={(event: React.MouseEvent<SVGSVGElement>) => {event.stopPropagation();; handleEditDj()}} />
        <XIcon onClick={(event: React.MouseEvent<SVGSVGElement>) => {event.stopPropagation();handleDeleteDj()}} />
      </div>
    </div>
  )
}

export default DjCard