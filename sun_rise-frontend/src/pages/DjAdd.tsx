import { PlusIcon } from '@heroicons/react/solid';
import React, { useState } from 'react'
import { store } from '../store';
import { useNavigate } from 'react-router-dom'

type Props = {}

const DjAdd = (props: Props) => {

  const {dispatch} = store
  const navigate = useNavigate()

  const [name, setName] = useState("");
  const [bio, setBio] = useState("");

  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    dispatch.djs.add({id:-1, name:name, bio:bio}).then(() => navigate("/"))
  }

  return (
    <form className='main dj-add' onSubmit={(e) => handleSubmit(e)}>
      <PlusIcon className='big-plus'/>
      <label>Enter your DJ name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label>Enter your DJ bio:
        <input
          type="text"
          value={bio}
          onChange={(e) => setBio(e.target.value)}
        />
      </label>
      <input type='submit'/>
    </form>
  )
}

export default DjAdd