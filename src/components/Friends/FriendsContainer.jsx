import React from 'react';
import Friends from "./Friends";
import StoreContext from "../../StoreContext";

const FriendsContainer = (props) => {

    return (
        <StoreContext.Consumer>
            { (store) => {

                let state = store.getState().dialogsPage;

                return <Friends
                    dialogsPage={state}

                />
            }
            }
        </StoreContext.Consumer>
    )
};

export default FriendsContainer;