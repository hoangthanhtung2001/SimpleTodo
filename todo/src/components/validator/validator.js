import { stringInclues } from "../comon/comon"

export const FILTER_ALL ="All"
export const FILTER_ACTIVE ="Active"
export const FILTER_COMPLETED ="Completed"
export const getOptions =()=>{
    return{
        [FILTER_ALL]:"All",
        [FILTER_ACTIVE]:"Active",
        [FILTER_COMPLETED]:"Completed"

    }
}

export function search(list, query) {
    let q = query.trim().toLowerCase();
    return list.filter(({text}) => stringInclues(text.toLowerCase(), q));
}