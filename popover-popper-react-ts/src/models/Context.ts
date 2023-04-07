import Data from "./Data";

interface ContextObj {
    whichModalIsOpen: boolean[],
    isBtnDisabled: boolean,
    modalOpen: (id: number | undefined) => void,
    modalOnConfirm: () => void,
    Joyce: Data;
    Heartbreaker: Data;
}

export default ContextObj;