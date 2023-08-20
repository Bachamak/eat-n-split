/** @format */

import React from 'react';
import Button from './Button';

export function FormAddFriend({ onAddFriend }) {
    const [name, setName] = React.useState('');
    const [image, setImage] = React.useState('https://i.pravatar.cc/48');

    function handleSubmit(e) {
        e.preventDefault();

        if (!name || !image) return;

        const id = crypto.randomUUID();
        const newFriend = {
            id,
            name,
            image: `${image}?=${id}`,
            balance: 0,
        };

        onAddFriend(newFriend);
        setName('');
        setImage('https://i.pravatar.cc/48');
    }

    return (
        <form
            className='form-add-friend'
            onSubmit={handleSubmit}
        >
            <label>🧍‍♂️Friend name</label>
            <input
                type='text'
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

            <label>📸Friend avatar</label>
            <input
                type='text'
                value={image}
                onChange={(e) => setImage(e.target.value)}
            />

            <Button>Add</Button>
        </form>
    );
}
