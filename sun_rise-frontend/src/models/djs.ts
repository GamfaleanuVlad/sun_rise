import { createModel } from "@rematch/core";
import axios from "axios";
import { RootModel } from ".";
import { API_URL } from "../constants";


export type Dj = {
    id: Readonly<number>,
    name: string,
    bio: string
}

type State = ReadonlyArray<Dj>

export const djs = createModel<RootModel>()({
    state: [] as State,
    reducers: {
        set: (state: State, payload: State) => payload,
        merge: (state: State, payload: Dj) => { return { ...state, payload } },
        edit: (state: State, payload: Dj) => state.map(dj => {
            if (dj.id === payload.id)
                return payload
            return dj
        }),
        delete: (state: State, payload: number) =>  state.filter((item, i) => item.id !== payload)
    },
    effects: (dispatch) => ({
        async merge(payload: Dj) {
            await axios.post(`${API_URL}/dj`, payload)
        },
        async edit(payload: Dj) {
            await axios.put(`${API_URL}/dj/${payload.id}`, payload)
        },
        async delete(payload: number) {            
            await axios.delete(`${API_URL}/dj/${payload}`)
        },
    }),
})

