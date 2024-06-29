// components/CommunityList.jsx
"use client"

import { useEffect, useState } from 'react';

const CommunityList = () => {
    const [communities, setCommunities] = useState([]);

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

    return (
        <div>
            <h2>Communities</h2>
            <ul>
                {communities.map((community) => (
                    <li key={community._id}>
                        <h3>{community.name}</h3>
                        <p>{community.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CommunityList;
