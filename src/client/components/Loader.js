import React from 'react';

const Loader = props => {
    return (
        <div class="ui segment">
            <div class="ui active dimmer">
                <div class="ui massive text loader">Loading</div>
            </div>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
        </div>
    )
}

export default Loader;