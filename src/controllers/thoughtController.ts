import { Request, Response } from 'express';
import { Thought, User } from '../models/index.js';

/**
 * GET All Thoughts /thoughts
 * returns an array of Thoughts
*/

export const getAllThoughts = async(_req: Request, res: Response) => {
    try {
        const thoughts = await Thought.find();
        res.json(thoughts);
    } catch(error: any){
        res.status(500).json(error.message);
    }
}

/**
 * GET Thought based on id /thought/:id
 * param string id
 * returns a single Thought object
*/

export const getThoughtById = async (req: Request, res: Response) => {
    const { thoughtId } = req.params;
    try {
      const thought = await Thought.findById(thoughtId);
      if(!thought) {
        res.status(404).json('Thought not found');
      }
      res.json(thought)
    } catch (error: any) {
      res.status(500).json(error.message);
    }
  };

  /**
 * POST Thought /thoughts
 * param object username
 * returns a single Thought object
*/

export const createThought = async (req: Request, res: Response) => {
    try {
      const thought = await Thought.create(req.body);
      await User.findOneAndUpdate({ username: thought.username }, { $addToSet: { thoughts:thought._id } });
      res.json(thought);
    } catch (error: any) {
      res.status(500).json(error.message);
    }
  };

/**
 * PUT Thought based on id /thoughts/:id
 * param object id, username
 * returns a single Thought object
*/

export const updateThought = async (req: Request, res: Response) => {
    try {
      const { thoughtId } = req.params;
      const update = req.body;
      const thought = await Thought.findOneAndUpdate({_id: thoughtId}, update, { new: true });
      if (!thought) {
        res.status(404).json({ message: 'No thought with this id!' });
      }
      res.json(thought)
    } catch (error: any) {
      res.status(500).json(error.message);
    }
  };

  /**
 * DELETE Thought based on id /thoughts/:id
 * param string id
 * returns string 
*/

export const deleteThought = async (req: Request, res: Response) => {
    try {
      const thought = await Thought.findOneAndDelete({ _id: req.params.thoughtId});
      if(!thought) {
        res.status(404).json('No thought with that ID');
      }
      res.json({ message: 'Thought deleted!' });
    } catch (error: any) {
      res.status(500).json(error.message);
    }
  };

  /**
   * POST Reaction to Thoughts array /thoughts/:id/reactions
   * param string id
   * returns updated Thought object
   */

  export const addReaction = async (req: Request, res: Response) => {
    try {
      const { thoughtId } = req.params;
      const reactions = req.body;
      const thought = await Thought.findOneAndUpdate({ _id: thoughtId }, { $addToSet: { reactions } }, { new: true })
      res.json(thought);
    } catch (error: any) {
      res.status(500).json(error.message)
    }
  }

  /**
   * DELETE Reaction from Thoughts array /thoughts/:thoughtId/reactions/:reactionId
   * params string thoughtId, string reactionId
   * returns string
   */

  export const deleteReaction = async (req: Request, res: Response) => {
    try {
      const { thoughtId, reactionId } = req.params;
      const thought = await Thought.findOneAndUpdate({ _id: thoughtId }, { $pull: { reactions: reactionId } }, { new: true });
      if (!thought){
        res.status(404).json('No thought found')
      }
      res.json('Reaction Deleted!')
    } catch (error: any) {
      res.status(500).json(error.message)
    }
  }