// components/CommunityList.jsx
"use client"

import { useEffect, useState } from 'react';
import { Button } from './button';

const CommunityList = () => {
    const [communities, setCommunities] = useState([]);
    const [userId, setUserId] = useState(''); // This should be set to the logged-in user's ID

    useEffect(() => {
        const fetchCommunities = async () => {
            const response = await fetch('/api/communities');
            const data = await response.json();
            if (data.success) {
                setCommunities(data.communities);
            } else {
                alert(data.message);
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

    const handleView = (communityId) => {
        router.push(`/communities/${communityId}`);
    };

    return (
        <div>
            <h2>Communities</h2>
            <ul>
                {communities.map((community) => (
                    <li key={community._id} className="mb-4">
                        <h3>{community.name}</h3>
                        <p>{community.description}</p>
                        <div className="flex space-x-2">
                            <Button size="sm" onClick={() => handleView(community._id)}>View</Button>
                            <Button size="sm" onClick={() => handleJoin(community._id)}>Join</Button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CommunityList;
