import { connect } from "react-redux";
import { RootState, Dispatch, store } from "../store";
import { Dj } from "../models/djs"
import { XIcon, PencilIcon } from '@heroicons/react/solid'
import { useNavigate, useParams } from 'react-router-dom';


const mapState = (state: RootState) => ({
  djs: state.djs,
});

const mapDispatch = (dispatch: Dispatch) => ({
  delete: (payload: number) => dispatch.djs.delete(payload),
});

type StateProps = ReturnType<typeof mapState>;
type DispatchProps = ReturnType<typeof mapDispatch>;
type Props = StateProps & DispatchProps;

const DjMain = (props: Props) => {

  const { djs } = props
  const params = useParams()
  const navigate = useNavigate()
  const {dispatch} = store

  const { id, bio, name }: Dj = djs.find(dj => dj.id === +(params["djId"] ?? "")) ?? { id: -1, name: "", bio: "" }

  const handleEditDj = () =>{
    navigate(`/dj/edit/${id}`)
  }

  const handleDeleteDj = () => {
    dispatch.djs.delete(id)
  }

  return (
    <div className='main'>
      <div className='dj-main' onClick={(e: React.MouseEvent<HTMLDivElement>) => { e.stopPropagation(); navigate(`/dj/${id}`) }}>

        <p className='dj-main__id'>{id}</p>
        <h2 className="dj-main__name">{name}</h2>
        <h3 className="dj-main__bio">{bio}</h3>
        <div className='dj-main__controls'>
          <PencilIcon onClick={(event: React.MouseEvent<SVGSVGElement>) => { event.stopPropagation();; handleEditDj() }} />
          <XIcon onClick={(event: React.MouseEvent<SVGSVGElement>) => { event.stopPropagation(); handleDeleteDj() }} />
        </div>
      </div>
    </div>
  )
}

export default connect(mapState, mapDispatch)(DjMain)