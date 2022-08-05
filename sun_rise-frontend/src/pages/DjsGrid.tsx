import { useEffect, useRef } from 'react'
import DjCard from '../components/DjCard'
import { connect } from "react-redux";
import { RootState, Dispatch } from "../store";
import { Dj } from "../models/djs"
import autoAnimate from "@formkit/auto-animate"

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
  const parent = useRef(null)

  useEffect(() => {
    parent.current && autoAnimate(parent.current)
  }, [parent])

  return (
    <div className='main dj-card__grid' ref={parent}>
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