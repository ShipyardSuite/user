'use strict';

import mongoose from "mongoose";

const UserSessionSchema = mongoose.Schema({
    userId: {
        type: String,
        default: "''",
        required: true,
        index: true
    },
    timestamp: {
        type: Date,
        default: Date.now()
    },
    isDeleted: {
        type: Boolean,
        default: false
    }
}, { collection: "UserSession" });

let UserSessionModel = mongoose.model("UserSession", UserSessionSchema);

export default UserSessionModel;