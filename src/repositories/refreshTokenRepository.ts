export interface StoredRefreshToken {
  jti: string;
  userId: number;
  expiresAt: number;
  revoked: boolean;
}

const refreshTokens: StoredRefreshToken[] = [];

export function createRefreshToken(
  token: StoredRefreshToken,
): StoredRefreshToken {
  refreshTokens.push(token);
  return token;
}

export function getRefreshTokenByJti(
  jti: string,
): StoredRefreshToken | undefined {
  return refreshTokens.find((token) => token.jti === jti);
}

export function revokeRefreshToken(jti: string): boolean {
  const token = getRefreshTokenByJti(jti);

  if (!token) {
    return false;
  }

  token.revoked = true;
  return true;
}