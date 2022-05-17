export interface DiscordUser {
  id: string;
  username: string;
  avatar: string;
  discriminator: string;
  public_flages: number;
  flags: number;
  locale: string;
  mfa_enabled: boolean;
  premium_type: number;
}
