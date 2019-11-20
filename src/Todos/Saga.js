import {takeEvery} from 'redux-saga/effects';

//worker saga
function* fetchTodos(action) {
    console.log('fetch todos');
}

function* addTodo(action) {
    console.log('add todo');
}

function* markCompleted(action) {
    console.log('mark completed');
}


//watcher saga
export default function* watcherSaga() {
    yield takeEvery(actions.FETCH_TODOS, fetchTodos);
    yield takeEvery(actions.ADD_TODO, addTodo);
    yield takeEvery(actions.MARK_COMPLETED, markCompleted);
}