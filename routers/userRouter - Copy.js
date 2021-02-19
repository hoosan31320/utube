***순서를 바꿔서 Router를 배치하자 에러가 났는데, 
   이유를 알 수가 없다***

import express from "express";
import routes from "../routes";
import {
    userDetail, 
    getEditProfile,
    postEditProfile,
    getChangePassword,
    postChangePassword
} from "../controllers/userController";
import { onlyPrivate, uploadAvatar } from "../middlewares";

const userRouter = express.Router();

userRouter.get(routes.userDetail(), userDetail);

userRouter.get(routes.editProfile, onlyPrivate, getEditProfile);
userRouter.post(routes.editProfile, onlyPrivate, uploadAvatar, postEditProfile);

userRouter.get(routes.changePassword, onlyPrivate, getChangePassword);
userRouter.post(routes.changePassword, onlyPrivate, postChangePassword);


export default userRouter;