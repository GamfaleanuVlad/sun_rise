import { PlusIcon } from '@heroicons/react/solid'
import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Dj } from '../models/djs'
import { RootState, store, Dispatch } from '../store'
import { connect } from "react-redux";


const mapState = (state: RootState) => ({
  djs: state.djs,
});

const mapDispatch = (dispatch: Dispatch) => ({
  set: (payload:Dj[]) => dispatch.djs.set(payload),
});

type StateProps = ReturnType<typeof mapState>;
type DispatchProps = ReturnType<typeof mapDispatch>;
type Props = StateProps & DispatchProps;

const DjEdit = (props: Props) => {

  const {djs} = props
  const {dispatch} = store
  const navigate = useNavigate()
  const params = useParams();

  const currentDj = djs.find( dj => dj.id === +(params["djId"]??"")??-1)

  if(currentDj && currentDj?.id === -1 )
  {
    alert("Wrong ID")
    navigate("/")
  }

  const [name, setName] = useState(currentDj!.name);
  const [bio, setBio] = useState(currentDj!.bio);
  const [id, _] = useState(currentDj!.id);


  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    dispatch.djs.edit({id:id, name:name, bio:bio})
    navigate('/')
  }

  return (
    <form className='main dj-add' onSubmit={(e) => handleSubmit(e)}>
      <PlusIcon className='big-plus'/>
      <label>{`DJ ID: ${id}`}</label>
      <label>Alter your DJ name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label>Alter your DJ bio:
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

export default connect(mapState, mapDispatch)(DjEdit)