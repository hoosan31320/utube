import express from "express";
import routes from "../routes";
import {
    userDetail, 
    getEditProfile,
    postEditProfile, 
    changePassword
} from "../controllers/userController";
import { onlyPrivate, uploadAvatar } from "../middlewares";

const userRouter = express.Router();

userRouter.get(routes.editProfile, onlyPrivate, getEditProfile);
userRouter.post(routes.editProfile, onlyPrivate, uploadAvatar, postEditProfile);

userRouter.get(routes.userDetail(), userDetail);
userRouter.get(routes.changePassword, onlyPrivate, changePassword);

export default userRouter;