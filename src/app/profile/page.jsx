// "use client"

// export const updateProfile = async (userData) => {
//     try {
//         const response = await fetch('/api/profile', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify(userData)
//         });

//         const data = await response.json();

//         if (response.ok) {
//             console.log('Profile updated successfully:', data);
//             // Handle successful update (e.g., show success message, update UI)
//         } else {
//             throw new Error(data.message || 'Failed to update profile');
//         }
//     } catch (error) {
//         console.error('Error updating profile:', error);    
//     }
//     return (
//         <div></div>
//     )
// };
import React from 'react'

export default function page() {
  return (
    <div>page</div>
  )
}
