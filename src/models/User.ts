import { Schema, model, type Document } from 'mongoose';

interface IUser extends Document {
    userID: Schema.Types.ObjectId,
    username: string,
    email: string,
    thoughts: Schema.Types.ObjectId[],
    friends: Schema.Types.ObjectId[]
}

const userSchema = new Schema<IUser>({
    username: {
        type: String,
        unique: true,
        required: [true, 'Username is required'],
        trim: true,
        max_length: 50,
    },
    email: {
        type: String,
        unique: true,
        required: [true, 'Email address is required'],
        max_length: 50,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    thoughts: [
        {
            type: Schema.Types.ObjectId,
            ref: 'thought'
        }
    ],
    friends: [
        {
            type: Schema.Types.ObjectId,
            ref: 'user'
        }
    ]
},
    {
        toJSON: {
            getters: true,
        },
        timestamps: true
    }
);

const User = model<IUser>('User', userSchema);

export default User;
