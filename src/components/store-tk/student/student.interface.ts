export interface IStudent {
    id?: number,
    name: string,
    birth: number
}

export interface IStudentState {
    students: IStudent[]
}