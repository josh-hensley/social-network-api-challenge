import { Schema, Types, model, type Document } from 'mongoose';

interface IReaction extends Document {
    reactionID: Schema.Types.ObjectId,
    reactionBody: String,
    username: String,
    createdAt: Date
}

interface IThought extends Document {
    thoughtText: string,
    createdAt: Date,
    username: String,
    reactions: Schema.Types.ObjectId[]
}

const reactionSchema = new Schema<IReaction>({
    reactionID: {
        type: Schema.Types.ObjectId,
        default: new Types.ObjectId()
    },
    reactionBody: {
        type: String,
        required: [ true, 'Reaction must have body.'],
        maxlength: 280
    },
    username: {
        type: String,
        required: [true, 'Reaction must include username']
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
})

const thoughtSchema = new Schema<IThought>(
    {
        thoughtText: {
            type: String,
            required: [ true, 'Thoughts must have text']
        },
        createdAt: {
            type: Date,
            default: Date.now()
        },
        username: {
            type: String,
            default: [ true, 'Thoughts must include username.' ]
        },
        reactions: [reactionSchema]
    },
    {
        toJSON: {
            virtuals: true,
        },
        timestamps: true
    },
);

thoughtSchema.virtual('reactionCount').get(function(){
    return this.reactions.length;
});

const Thought = model<IThought>('Thought', thoughtSchema);

export default Thought;
