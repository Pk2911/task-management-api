import jwt from "jsonwebtoken";

export function generateAccessToken(
  userId: number,
  role: "admin" | "member",
) {
  return jwt.sign(
    { userId, role },
    process.env.JWT_ACCESS_SECRET!,
    { expiresIn: "15m" },
  );
}