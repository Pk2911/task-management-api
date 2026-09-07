export interface JwtPayload {
  userId: number;
  role: "admin" | "member";
}