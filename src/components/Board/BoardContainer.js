import Board from "./Board";
import {connect} from "react-redux";
import {withRouter} from 'react-router-dom'
import {changeId, changeText, changeListeners, changeBoard, setActive, deleteTodo, setCurrentItem, deleteElement} from '../../redux/actionCreator'
import {useEffect} from "react";

function BoardContainer(props) {
    useEffect(() => {
        const id = props.match.params.id;
        props.changeId(id)
    },[] )
    const FilterBoard = props.board.filter((b) => b.id === props.id)
    return <Board board={FilterBoard} id={props.id} handlerChange={props.handlerChange} setBoard={props.setBoard}
                  changeListeners={props.changeListeners}
                  changeBoard={props.changeBoard}
                  changeText={props.changeText} text={props.text} isActive={props.isActive} listen={props.listen}
                  setActive={props.setActive} deleteTodo={props.deleteTodo} setCurrentItem = {props.setCurrentItem} currentItems={props.currentItems}
                  deleteElement={props.deleteElement}/>
}

const mapStateToProps = (state) => ({
    board: state.board,
    id: state.currentId,
    text: state.currentText,
    setBoard: state.setBoard,
    isActive: state.isActive,
    listen: state.listen,
    currentItems: state.currentItems,

})
export default withRouter(connect(mapStateToProps, {
    changeId,
    changeText,
    changeListeners,
    changeBoard,
    setActive,
    deleteTodo,
    setCurrentItem,
    deleteElement,
})(BoardContainer))

