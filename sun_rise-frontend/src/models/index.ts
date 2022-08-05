import { Models } from "@rematch/core";
import {djs} from "./djs"

export interface RootModel extends Models<RootModel> {
  djs: typeof djs;
}
export const models: RootModel = { djs };