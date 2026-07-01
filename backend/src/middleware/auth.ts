import { NextFunction, Request, Response } from "express";
import admin from "../services/firebase";

export interface AuthenticatedRequest
  extends Request {
  user?: admin.auth.DecodedIdToken;
}

export async function authMiddleware(
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
) {
  try {
    const authHeader =
      req.headers.authorization;

      console.log("Auth header:", authHeader);

    if (!authHeader?.startsWith("Bearer ")) {
      return res
        .status(401)
        .json({ message: "Unauthorized" });
    }

    const token =
      authHeader.split("Bearer ")[1];

    const decodedToken =
      await admin.auth().verifyIdToken(token);

    req.user = decodedToken;
    console.log("Decoded token:", decodedToken.uid);

    next();
  } catch (error) {
    return res.status(401).json({
      message: "Invalid token",
    });
  }
}