import PropTypes from 'prop-types';
import { LoadBtn } from "./Button.styled"

export function LoadMoreBtn({loadMore }) {
    return (
        <>
            <LoadBtn type="button" onClick={loadMore}>Load more</LoadBtn>
        </>
    )
}

LoadMoreBtn.propTypes = {
    loadMore: PropTypes.func.isRequired,
}