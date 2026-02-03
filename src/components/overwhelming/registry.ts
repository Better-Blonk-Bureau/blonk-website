import type { OverwhelmingItemConfig } from './types';

// Notification Items - only brainrotty social media stuff
import {
    InstagramLikeNotif,
    TwitterMentionNotif,
    TikTokFollowNotif,
    SnapchatNotif,
    YouTubeNotif,
    DiscordNotif,
    EmailNotif,
    WhatsAppNotif,
    SpotifyNotif,
    NewsNotif,
} from './items/NotificationItems';

// Reaction Items - keep all, these are pure brainrot
import {
    HeartReaction,
    WowReaction,
    LaughReaction,
    SadReaction,
    AngryReaction,
    ThumbsUpReaction,
    FireReaction,
    ClappingReaction,
    MindBlownReaction,
    EyesReaction,
    HundredReaction,
    SkullReaction,
} from './items/ReactionItems';

// Video Items - keep all, these are the core brainrot
import {
    DanceVideo,
    FoodVideo,
    PetVideo,
    MemeVideo,
    GamingVideo,
    ComedyVideo,
    AsmrVideo,
    VlogVideo,
} from './items/VideoItems';

// Social Items - keep the addictive ones
import {
    InstagramStory,
    InstagramStory2,
    TwitterPost,
    RedditPost,
    FollowerCount,
    LikeCounter,
    ViewCounter,
    TrendingTag,
} from './items/SocialItems';

// Message Items - keep the annoying/urgent ones
import {
    TextMessage,
    TextMessage2,
    TextMessage3,
    GroupMessage,
    VoiceMessage,
    TypingIndicator,
    UnreadBadge,
    UnreadBadge2,
} from './items/MessageItems';

// Alert Items - only keep music widget (it's addictive)
import { MusicWidget } from './items/AlertItems';

/**
 * Registry of all overwhelming item components.
 * Curated for maximum "brainrot" - the stuff you'd want to block.
 *
 * weight: Higher weight = more likely to spawn (default: 1)
 */
export const itemRegistry: OverwhelmingItemConfig[] = [
    // ============ NOTIFICATIONS (10) - social media spam ============
    {
        id: 'notif-instagram',
        category: 'notification',
        component: InstagramLikeNotif,
        weight: 3,
    },
    {
        id: 'notif-twitter',
        category: 'notification',
        component: TwitterMentionNotif,
        weight: 2,
    },
    {
        id: 'notif-tiktok',
        category: 'notification',
        component: TikTokFollowNotif,
        weight: 3,
    },
    {
        id: 'notif-snapchat',
        category: 'notification',
        component: SnapchatNotif,
        weight: 2,
    },
    {
        id: 'notif-youtube',
        category: 'notification',
        component: YouTubeNotif,
        weight: 3,
    },
    {
        id: 'notif-discord',
        category: 'notification',
        component: DiscordNotif,
        weight: 2,
    },
    {
        id: 'notif-email',
        category: 'notification',
        component: EmailNotif,
        weight: 1,
    },
    {
        id: 'notif-whatsapp',
        category: 'notification',
        component: WhatsAppNotif,
        weight: 2,
    },
    {
        id: 'notif-spotify',
        category: 'notification',
        component: SpotifyNotif,
        weight: 1,
    },
    {
        id: 'notif-news',
        category: 'notification',
        component: NewsNotif,
        weight: 2,
    },

    // ============ REACTIONS (12) - dopamine hits ============
    {
        id: 'react-heart',
        category: 'reaction',
        component: HeartReaction,
        weight: 4,
    },
    {
        id: 'react-wow',
        category: 'reaction',
        component: WowReaction,
        weight: 2,
    },
    {
        id: 'react-laugh',
        category: 'reaction',
        component: LaughReaction,
        weight: 3,
    },
    {
        id: 'react-sad',
        category: 'reaction',
        component: SadReaction,
        weight: 1,
    },
    {
        id: 'react-angry',
        category: 'reaction',
        component: AngryReaction,
        weight: 1,
    },
    {
        id: 'react-thumbsup',
        category: 'reaction',
        component: ThumbsUpReaction,
        weight: 2,
    },
    {
        id: 'react-fire',
        category: 'reaction',
        component: FireReaction,
        weight: 4,
    },
    {
        id: 'react-clap',
        category: 'reaction',
        component: ClappingReaction,
        weight: 1,
    },
    {
        id: 'react-mindblown',
        category: 'reaction',
        component: MindBlownReaction,
        weight: 1,
    },
    {
        id: 'react-eyes',
        category: 'reaction',
        component: EyesReaction,
        weight: 2,
    },
    {
        id: 'react-hundred',
        category: 'reaction',
        component: HundredReaction,
        weight: 3,
    },
    {
        id: 'react-skull',
        category: 'reaction',
        component: SkullReaction,
        weight: 3,
    },

    // ============ VIDEOS (8) - short form content ============
    { id: 'video-dance', category: 'video', component: DanceVideo, weight: 3 },
    { id: 'video-food', category: 'video', component: FoodVideo, weight: 2 },
    { id: 'video-pet', category: 'video', component: PetVideo, weight: 3 },
    { id: 'video-meme', category: 'video', component: MemeVideo, weight: 3 },
    {
        id: 'video-gaming',
        category: 'video',
        component: GamingVideo,
        weight: 2,
    },
    {
        id: 'video-comedy',
        category: 'video',
        component: ComedyVideo,
        weight: 3,
    },
    { id: 'video-asmr', category: 'video', component: AsmrVideo, weight: 2 },
    { id: 'video-vlog', category: 'video', component: VlogVideo, weight: 2 },

    // ============ SOCIAL (8) - engagement metrics ============
    {
        id: 'social-story1',
        category: 'social',
        component: InstagramStory,
        weight: 2,
    },
    {
        id: 'social-story2',
        category: 'social',
        component: InstagramStory2,
        weight: 2,
    },
    {
        id: 'social-twitter',
        category: 'social',
        component: TwitterPost,
        weight: 1,
    },
    {
        id: 'social-reddit',
        category: 'social',
        component: RedditPost,
        weight: 1,
    },
    {
        id: 'social-followers',
        category: 'social',
        component: FollowerCount,
        weight: 2,
    },
    {
        id: 'social-likes',
        category: 'social',
        component: LikeCounter,
        weight: 2,
    },
    {
        id: 'social-views',
        category: 'social',
        component: ViewCounter,
        weight: 2,
    },
    {
        id: 'social-trending',
        category: 'social',
        component: TrendingTag,
        weight: 1,
    },

    // ============ MESSAGES (8) - urgent/annoying ============
    { id: 'msg-text1', category: 'message', component: TextMessage, weight: 2 },
    {
        id: 'msg-text2',
        category: 'message',
        component: TextMessage2,
        weight: 2,
    },
    {
        id: 'msg-text3',
        category: 'message',
        component: TextMessage3,
        weight: 2,
    },
    {
        id: 'msg-group',
        category: 'message',
        component: GroupMessage,
        weight: 2,
    },
    {
        id: 'msg-voice',
        category: 'message',
        component: VoiceMessage,
        weight: 1,
    },
    {
        id: 'msg-typing',
        category: 'message',
        component: TypingIndicator,
        weight: 2,
    },
    {
        id: 'msg-unread',
        category: 'message',
        component: UnreadBadge,
        weight: 3,
    },
    {
        id: 'msg-unread2',
        category: 'message',
        component: UnreadBadge2,
        weight: 2,
    },

    // ============ WIDGETS (1) - addictive ones only ============
    {
        id: 'widget-music',
        category: 'widget',
        component: MusicWidget,
        weight: 1,
    },
];

/**
 * Get a weighted random item from the registry.
 * Items with higher weight are more likely to be selected.
 */
export function getRandomItem(): OverwhelmingItemConfig {
    const totalWeight = itemRegistry.reduce((sum, item) => sum + (item.weight || 1), 0);
    let random = Math.random() * totalWeight;

    for (const item of itemRegistry) {
        random -= item.weight || 1;
        if (random <= 0) {
            return item;
        }
    }

    return itemRegistry[0];
}

/**
 * Get multiple random items, allowing duplicates.
 */
export function getRandomItems(count: number): OverwhelmingItemConfig[] {
    return Array.from({ length: count }, () => getRandomItem());
}
