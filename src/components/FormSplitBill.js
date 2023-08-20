/** @format */

import React from 'react';
import Button from './Button';

export function FormSplitBill({ selectedFriend, onSplitBill }) {
    const [bill, setBill] = React.useState('');
    const [paidBy, setPaidByUser] = React.useState('');
    const paidByFriend = bill ? bill - paidBy : '';
    const [whoIsPaying, setWhoIsPaying] = React.useState('user');

    function handleSubmit(e) {
        e.preventDefault();

        if (!bill || !paidBy) return;

        onSplitBill(whoIsPaying === 'user' ? paidByFriend : -paidBy);
    }

    return (
        <form
            className='form-split-bill'
            onSubmit={handleSubmit}
        >
            <h2>Split a bill with {selectedFriend.name}</h2>

            <label>🤑Bill value</label>
            <input
                type='text'
                value={bill}
                onChange={(e) => setBill(Number(e.target.value))}
            />

            <label>💵Your expense</label>
            <input
                type='text'
                value={paidBy}
                onChange={(e) =>
                    setPaidByUser(
                        Number(e.target.value) > bill
                            ? paidBy
                            : Number(e.target.value)
                    )
                }
            />

            <label>💸{selectedFriend.name}'s expense</label>
            <input
                type='text'
                disabled
                value={paidByFriend}
            />

            <label>Who will pay the bill?</label>
            <select
                value={whoIsPaying}
                onChange={(e) => setWhoIsPaying(e.target.value)}
            >
                <option value='me'>Me</option>
                <option value='friend'>{selectedFriend.name}</option>
            </select>

            <Button>Split Bill</Button>
        </form>
    );
}
