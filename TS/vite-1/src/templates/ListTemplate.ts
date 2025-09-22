import FullList from "../Model/FullList";

interface DOMList {
    ul: HTMLAreaElement,
    clear(): void,
    render(fullList: FullList): void, 
}

export default class ListTemplate implements DOMList{
    private constructor() {
        this.ul = document.getElementById("list")
    }
}