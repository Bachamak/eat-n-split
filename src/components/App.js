/** @format */

import React from 'react';
import FriendList from './FriendList';
import Frienditem from './Frienditem';
import Button from './Button';
import { FormAddFriend } from './FormAddFriend';
import { FormSplitBill } from './FormSplitBill';

const initialFriends = [
    {
        id: 118836,
        name: 'Clark',
        image: 'https://i.pravatar.cc/48?u=118836',
        balance: -7,
    },
    {
        id: 933372,
        name: 'Sarah',
        image: 'https://i.pravatar.cc/48?u=933372',
        balance: 20,
    },
    {
        id: 499476,
        name: 'Anthony',
        image: 'https://i.pravatar.cc/48?u=499476',
        balance: 0,
    },
];

export default function App() {
    const [friends, setFriends] = React.useState(initialFriends);
    const [showAddFriend, setShowAddFriend] = React.useState(false);
    const [selectedFriend, setSelectedFriend] = React.useState(null);

    function handleShowAddFriend() {
        setShowAddFriend(!showAddFriend);
    }

    function handleAddFriend(friend) {
        setFriends((friends) => [...friends, friend]);
        setShowAddFriend(false);
    }

    function handleSelectionFriend(friend) {
        setSelectedFriend((cur) => {
            if (cur?.id === friend.id) {
                return null;
            }

            return friend;
        });
        setShowAddFriend(false);
    }

    function handleSplitBill(value) {
        setFriends((friends) =>
            friends.map((friend) =>
                friend.id === selectedFriend.id
                    ? { ...friend, balance: friend.balance + value }
                    : friend
            )
        );
        setSelectedFriend(null);
    }

    return (
        <div className='app'>
            <div className='sidebar'>
                <FriendList
                    friends={friends}
                    onSelection={handleSelectionFriend}
                    selectedFriend={selectedFriend}
                />

                {showAddFriend && (
                    <FormAddFriend onAddFriend={handleAddFriend} />
                )}

                <Button onClick={handleShowAddFriend}>
                    {showAddFriend ? 'Close form' : 'Add friend'}
                </Button>
            </div>
            {selectedFriend && (
                <FormSplitBill
                    selectedFriend={selectedFriend}
                    onSplitBill={handleSplitBill}
                />
            )}
        </div>
    );
}
