export interface People {
    name: string;
    email: string;
    role: string;
    imageUrl: string;
    lastSeen?: string | null;
    lastSeenDateTime?: string;
}