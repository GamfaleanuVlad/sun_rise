import axios from 'axios'
import { useEffect } from 'react'
import DjCard from '../components/DjCard'
import { API_URL } from '../constants';
import { connect } from "react-redux";
import { RootState, Dispatch } from "../store";
import { Dj } from "../models/djs"

const mapState = (state: RootState) => ({
  djs: state.djs,
});

const mapDispatch = (dispatch: Dispatch) => ({
  set: (payload:Dj[]) => dispatch.djs.set(payload),
});

type StateProps = ReturnType<typeof mapState>;
type DispatchProps = ReturnType<typeof mapDispatch>;
type Props = StateProps & DispatchProps;


const DjsGrid = (props: Props)  => {

  const {djs} = props
  
  return (
    <div className='main dj-card__grid'>
      {djs.map(dj => {
        return (
          <DjCard key={dj.id} dj={dj} />
        )
      })}
    </div>
  )
}
const Container = connect(mapState, mapDispatch)(DjsGrid)
export default Container