import { AddStudentAction, DeleteStudentAction, GetListStudentAction, LoadingActions, UpdateStudentAction } from "./action";



export type GetListDispatchType = (args: GetListStudentAction) => GetListStudentAction

export type LoadingDispatchType = (args: LoadingActions) => LoadingActions

export type AddStudentDispatchType = (args: AddStudentAction) => AddStudentAction

export type DeleteStudentDispatchType = (args: DeleteStudentAction) => DeleteStudentAction

export type UpdateStudentActionDispatchType = (args: UpdateStudentAction) => UpdateStudentAction

