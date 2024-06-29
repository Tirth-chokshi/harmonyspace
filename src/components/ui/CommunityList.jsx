// components/CommunityList.jsx
"use client"
import { useEffect, useState } from 'react';

const CommunityList = () => {
    const [communities, setCommunities] = useState([]);
    const [userId, setUserId] = useState(''); // This should be set to the logged-in user's ID

    useEffect(() => {
        const fetchCommunities = async () => {
            const response = await fetch('/api/communities');
            const data = await response.json();
            if (data.success) {
                setCommunities(data.communities);
            }
        };

        fetchCommunities();
    }, []);

    const handleJoin = async (communityId) => {
        const response = await fetch('/api/communities/join', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ communityId, userId }),
        });

        const data = await response.json();
        if (data.success) {
            alert('Joined community successfully');
        } else {
            alert(data.message);
        }
    };

    return (
        <div>
            <h2>Communities</h2>
            <ul>
                {communities.map((community) => (
                    <li key={community._id}>
                        <h3>{community.name}</h3>
                        <p>{community.description}</p>
                        <button onClick={() => handleJoin(community._id)}>Join</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CommunityList;
