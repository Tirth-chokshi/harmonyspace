// src/lib/action.js

import { UserModel } from './models.js';
import { CommunityModel } from './models.js';
import jwt from 'jsonwebtoken';
import bcryptjs from 'bcryptjs';

export const Register = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // Check if all fields are provided
        if (!name || !email || !password) {
            return res.status(400).json({ success: false, message: "All fields are required" });
        }

        const existUser = await UserModel.findOne({ email });
        if (existUser) {
            return res.status(401).json({ success: false, message: "User already exists" });
        }

        const hashedPassword = bcryptjs.hashSync(password, 10);
        const newUser = new UserModel({
            name,
            email,
            password: hashedPassword
        });

        await newUser.save();

        res.status(200).json({ message: "User registered successfully", newUser });
    } catch (error) {
        res.status(500).json({ success: false, message: "Internal server error" });
        console.log(error);
    }
};

export const Login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check if all fields are provided
        if (!email || !password) {
            return res.status(400).json({ success: false, message: "All fields are required" });
        }

        const user = await UserModel.findOne({ email });
        if (!user) {
            return res.status(401).json({ success: false, message: "Invalid email or password" });
        }

        const isMatch = bcryptjs.compareSync(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ success: false, message: "Invalid email or password" });
        }

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.status(200).json({ success: true, message: "Login successful", token });
    } catch (error) {
        res.status(500).json({ success: false, message: "Internal server error" });
        console.log(error);
    }
};

export const Logout = async (req, res) => {
    try {
        // Invalidate the token or clear the cookie/session
        res.status(200).json({ success: true, message: "Logout successful" });
    } catch (error) {
        res.status(500).json({ success: false, message: "Internal server error" });
        console.log(error);
    }
};

export const UpdateProfile = async (req, res) => {
    try {
        const { name, interests, goals, communicationStyle, bio } = req.body;
        const email = 'test2@gmail.com'
        // Check if email is provided
        if (!email) {
            return res.status(400).json({ success: false, message: "Email is required" });
        }

        // Find the user by email
        const user = await UserModel.findOne({ email });
        if (!user) {
            return res.status(404).json({ success: false, message: "User not found" });
        }

        // Update user fields
        if (name) user.name = name;
        if (interests) user.interests = interests;
        if (goals) user.goals = goals;
        if (communicationStyle) user.communicationStyle = communicationStyle;
        if (bio) user.bio = bio;

        // Save the updated user
        await user.save();

        return res.status(200).json({ success: true, message: "Profile updated successfully", user });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ success: false, message: "Internal server error" });
    }
};


export const CreateCommunity = async (req, res) => {
    try {
        const { name, description } = req.body;
        if (!name) {
            return res.status(400).json({ success: false, message: "Name and creator ID are required" });
        }

        const newCommunity = new CommunityModel({
            name,
            description,
        });

        await newCommunity.save();

        return res.status(201).json({ success: true, message: "Community created successfully", community: newCommunity });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ success: false, message: "Internal server error" });
    }
};


export const GetCommunities = async (req, res) => {
    try {
        const communities = await Community.find({});
        if (communities.length === 0) {
            return res.status(404).json({ success: false, message: 'No communities found' });
        }
        return res.status(200).json({ success: true, communities });
    } catch (error) {
        return res.status(500).json({ success: false, message: 'Error fetching communities' });
    }
};

export const JoinCommunity = async (req) => {
    try {
        const { communityId, userId } = await req.json();

        if (!communityId || !userId) {
            return new Response(JSON.stringify({ success: false, message: "Community ID and user ID are required" }), {
                status: 400,
                headers: { 'Content-Type': 'application/json' },
            });
        }

        const community = await CommunityModel.findById(communityId);
        if (!community) {
            return new Response(JSON.stringify({ success: false, message: "Community not found" }), {
                status: 404,
                headers: { 'Content-Type': 'application/json' },
            });
        }

        if (community.members.includes(userId)) {
            return new Response(JSON.stringify({ success: false, message: "User is already a member of this community" }), {
                status: 400,
                headers: { 'Content-Type': 'application/json' },
            });
        }

        community.members.push(userId);
        await community.save();

        return new Response(JSON.stringify({ success: true, message: "Joined community successfully" }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (error) {
        console.error(error);
        return new Response(JSON.stringify({ success: false, message: "Internal server error" }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
};