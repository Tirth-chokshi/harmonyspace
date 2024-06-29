"use client";

import { useState } from 'react';
import {
  Smile,
} from "lucide-react";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import { Button } from "@/components/ui/button";

export default function Profile() {
  const [items, setItems] = useState([]);

  const handleSpanClick = (value) => {
    if (!items.includes(value)) {
      setItems([...items, value]); // Add clicked value to items array
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/profile', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ interests: items }) // Ensure the correct structure of the request body
      });

      const data = await response.json();
      if (data.success) {
        alert('Profile updated successfully');
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="profile-page-section">
        <h1 className="profile-title">
          Please choose your <span className="text-blue-500">interests,</span>
          <span className="text-green-500">goals,</span> etc.
        </h1>

        <ul className="profile-intrests-items">
          {items.map((item, index) => (
            <Button
              key={index}
              className="profile-intrests-item"
              variant="outline"
            >
              {item}
            </Button>
          ))}
        </ul>
        <Command className="rounded-lg border shadow-md profile-edit-container">
          <CommandInput placeholder="Type a command or search..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Interests">
              <div onClick={() => handleSpanClick("Music")}>
                <CommandItem>
                  <Smile className="mr-2 h-4 w-4" />
                  <span>Music</span>
                </CommandItem>
              </div>
              <div onClick={() => handleSpanClick("Movies")}>
                <CommandItem>
                  <Smile className="mr-2 h-4 w-4" />
                  <span>Movies</span>
                </CommandItem>
              </div>
              <div onClick={() => handleSpanClick("Food")}>
                <CommandItem>
                  <Smile className="mr-2 h-4 w-4" />
                  <span>Food</span>
                </CommandItem>
              </div>
              <div onClick={() => handleSpanClick("Memes")}>
                <CommandItem>
                  <Smile className="mr-2 h-4 w-4" />
                  <span>Memes</span>
                </CommandItem>
              </div>
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading="Goals">
              <div onClick={() => handleSpanClick("Money")}>
                <CommandItem>
                  <Smile className="mr-2 h-4 w-4" />
                  <span>Money</span>
                </CommandItem>
              </div>
              <div onClick={() => handleSpanClick("Fitness")}>
                <CommandItem>
                  <Smile className="mr-2 h-4 w-4" />
                  <span>Fitness</span>
                </CommandItem>
              </div>
              <div onClick={() => handleSpanClick("Success")}>
                <CommandItem>
                  <Smile className="mr-2 h-4 w-4" />
                  <span>Success</span>
                </CommandItem>
              </div>
              <div onClick={() => handleSpanClick("Health")}>
                <CommandItem>
                  <Smile className="mr-2 h-4 w-4" />
                  <span>Health</span>
                </CommandItem>
              </div>
            </CommandGroup>
          </CommandList>
          <Button type="submit" variant="secondary">Submit</Button>
        </Command>
      </form>
    </div>
  );
}
