import { fetchCientistasError, fetchCientistasPending, fetchCientistasSuccess } from "../../redux/actions/cientistas";

function fetchCientistas() {
    return dispatch => {
        dispatch(fetchCientistasPending());
        fetch('https://cat-fact.herokuapp.com/facts')
            .then(res => res.json())
            .then(res => {
                if (res.error) {
                    throw (res.error);
                }
                dispatch(fetchCientistasSuccess(res));
            })
            .catch(err => {
                dispatch(fetchCientistasError(err));
            })
    }
}

export default fetchCientistas;