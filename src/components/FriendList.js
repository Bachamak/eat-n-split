/** @format */
import React from 'react';
import FriendItem from './Frienditem';

function FriendList({ friends, onSelection, selectedFriend }) {
    return (
        <ul>
            {friends.map((friend) => (
                <FriendItem
                    friend={friend}
                    key={friend.id}
                    selectedFriend={selectedFriend}
                    onSelection={onSelection}
                />
            ))}
        </ul>
    );
}

export default FriendList;
