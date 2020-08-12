import {
  put,
  
  takeEvery,
  delay,
  
} from "redux-saga/effects";



function* addRecipe(Action) {

  yield delay(1000);

  yield put({ type: "ADD", payLoad: Action.payLoad });
}
function* remRecipe(Action) {
  yield delay(1000);
  yield put({ type: "REM", payLoad: Action.payLoad });
}
function* editRecipe(Action) {
  yield delay(1000);
  yield put({ type: "EDIT", payLoad: Action.payLoad });
}
export function* SagaAdd() {
  
  yield takeEvery("ADD_ASYNC", addRecipe);


}
export function* SagaEdit() {
 
  yield takeEvery("EDIT_ASYNC", editRecipe);

  
}
export function* SagaRem() {
  
  yield takeEvery("REM_ASYNC", remRecipe);


}
