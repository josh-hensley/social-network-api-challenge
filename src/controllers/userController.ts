// ObjectId() method for converting userId string into an ObjectId for querying database
// import { ObjectId } from 'mongodb';
import { User, Thought } from '../models/index.js';
import { Request, Response } from 'express';

/**
 * GET All users /users
 * returns an array of users
*/

export const getAllUsers = async (_req: Request, res: Response) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error: any) {
        res.status(500).json(error.message);
    }
}

/**
 * GET user based on id /users/:id
 * param string id
 * returns a single user object
*/

export const getUserById = async (req: Request, res: Response) => {
    const { userId } = req.params;
    try {
        const user = await User.findById(userId);
        if (user) {
            res.json(user);
        } else {
            res.status(404).json({ message: 'user not found' });
        }
    } catch (error: any) {
        res.status(500).json(error.message);
    }
};

/**
 * POST user /users
 * param object user
 * returns a single user object
*/

export const createUser = async (req: Request, res: Response) => {
    try {
        const user = await User.create(req.body);
        res.json(user);
    } catch (error: any) {
        res.status(500).json(error.message);
    }
}

/**
 * PUT user based on id /users/:id
 * param string id
 * body update object
 * returns string 
*/

export const updateUser = async (req: Request, res: Response) => {
    try {
        const { userId } = req.params;
        const update = req.body
        const user = await User.findOneAndUpdate({ _id: userId }, update, { new: true });

        if (!user) {
            return res.status(404).json({ message: 'No such user exists' });
        }
        return res.json(user);
    } catch (error: any) {
        return res.status(500).json(error.message);
    }
}

/**
 * DELETE user based on id /users/:id
 * param string id
 * returns string 
*/

export const deleteUser = async (req: Request, res: Response) => {
    try {
        const { userId } = req.params
        const user = await User.findOneAndDelete({ _id: userId });
        // const thoughtsArray = user.thoughts ? user.thoughts : []

        if (!user) {
            return res.status(404).json({ message: 'No such user exists' });
        }

        return res.json({ message: 'user successfully deleted' });
    } catch (error: any) {
        return res.status(500).json(error.message);
    }
}
