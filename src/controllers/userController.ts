// ObjectId() method for converting userId string into an ObjectId for querying database
import { ObjectId } from 'mongodb';
import { User, Thought } from '../models/index.js';
import { Request, Response } from 'express';

export const headCount = async () => {
    const numberOfusers = await User.aggregate([{ $count: 'numberOfusers' }])
    return numberOfusers;
}

// Aggregate function for getting the overall grade using $avg
export const grade = async (userId: string) =>
    User.aggregate([
        {
            $match: { _id: new ObjectId(userId) }
        },
        {
            $unwind: '$assignments',
        },
        {
            $group: {
                _id: new ObjectId(userId), 
                avg_score: { $avg: '$assignments.score' }
             }
        },
    ]);

/**
 * GET All users /users
 * returns an array of users
*/
export const getAllusers = async (_req: Request, res: Response) => {
    try {
        const users = await User.find().select(['-assignments', '-__v']);

        const userObj = {
            users,
            headCount: await headCount(),
        }

        res.json(userObj);
    } catch (error: any) {
        res.status(500).json({
            message: error.message
        });
    }
}

/**
 * GET user based on id /users/:id
 * param string id
 * returns a single user object
*/
export const getuserById = async (req: Request, res: Response) => {
    const { userId } = req.params;
    try {
        const user = await User.findById(userId);
        if (user) {
            res.json({
                user,
                grade: await grade(userId)
            });
        } else {
            res.status(404).json({
                message: 'user not found'
            });
        }
    } catch (error: any) {
        res.status(500).json({
            message: error.message
        });
    }
};

/**
 * POST user /users
 * param object user
 * returns a single user object
*/

export const createuser = async (req: Request, res: Response) => {
    try {
        const user = await User.create(req.body);
        res.json(user);
    } catch (err) {
        res.status(500).json(err);
    }
}
/**
 * DELETE user based on id /users/:id
 * param string id
 * returns string 
*/

export const deleteuser = async (req: Request, res: Response) => {
    try {
        const user = await User.findOneAndDelete({ _id: req.params.userId });

        if (!user) {
            return res.status(404).json({ message: 'No such user exists' });
        }

        const thought = await Thought.findOneAndUpdate(
            { users: req.params.userId },
            { $pull: { users: req.params.userId } },
            { new: true }
        );

        if (!thought) {
            return res.status(404).json({
                message: 'user deleted, but no thoughts found',
            });
        }

        return res.json({ message: 'user successfully deleted' });
    } catch (err) {
        console.log(err);
        return res.status(500).json(err);
    }
}

/**
 * POST Assignment based on /users/:userId/assignments
 * param string id
 * param object assignment
 * returns object user 
*/

export const addAssignment = async (req: Request, res: Response) => {
    console.log('You are adding an assignment');
    console.log(req.body);
    try {
        const user = await User.findOneAndUpdate(
            { _id: req.params.userId },
            { $addToSet: { assignments: req.body } },
            { runValidators: true, new: true }
        );

        if (!user) {
            return res
                .status(404)
                .json({ message: 'No user found with that ID :(' });
        }

        return res.json(user);
    } catch (err) {
        return res.status(500).json(err);
    }
}

/**
 * DELETE Assignment based on /users/:userId/assignments
 * param string assignmentId
 * param string userId
 * returns object user 
*/

export const removeAssignment = async (req: Request, res: Response) => {
    try {
        const user = await User.findOneAndUpdate(
            { _id: req.params.userId },
            { $pull: { assignments: { assignmentId: req.params.assignmentId } } },
            { runValidators: true, new: true }
        );

        if (!user) {
            return res
                .status(404)
                .json({ message: 'No user found with that ID :(' });
        }

        return res.json(user);
    } catch (err) {
        return res.status(500).json(err);
    }
}
