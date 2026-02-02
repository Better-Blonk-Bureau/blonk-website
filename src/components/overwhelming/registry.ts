import type { OverwhelmingItemConfig } from './types';

// Notification Items
import {
  InstagramLikeNotif,
  TwitterMentionNotif,
  TikTokFollowNotif,
  SnapchatNotif,
  YouTubeNotif,
  DiscordNotif,
  SlackNotif,
  EmailNotif,
  CalendarNotif,
  ReminderNotif,
  WhatsAppNotif,
  SpotifyNotif,
  UberNotif,
  NewsNotif,
  BankNotif,
} from './items/NotificationItems';

// Reaction Items
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
  PrayReaction,
  HundredReaction,
  SkullReaction,
  SparklesReaction,
  RocketReaction,
} from './items/ReactionItems';

// Video Items
import {
  DanceVideo,
  FoodVideo,
  PetVideo,
  MemeVideo,
  TutorialVideo,
  GamingVideo,
  FitnessVideo,
  ComedyVideo,
  AsmrVideo,
  VlogVideo,
} from './items/VideoItems';

// Social Items
import {
  InstagramStory,
  InstagramStory2,
  TwitterPost,
  RedditPost,
  LinkedInPost,
  FollowerCount,
  LikeCounter,
  ViewCounter,
  TrendingTag,
  VerifiedBadge,
} from './items/SocialItems';

// Message Items
import {
  TextMessage,
  TextMessage2,
  TextMessage3,
  GroupMessage,
  VoiceMessage,
  TypingIndicator,
  ImageMessage,
  UnreadBadge,
  UnreadBadge2,
  MissedCall,
  LocationShare,
  PaymentRequest,
} from './items/MessageItems';

// Alert Items
import {
  BatteryLow,
  StorageFull,
  UpdateAvailable,
  ScreenTimeAlert,
  WifiDisconnected,
  WeatherWidget,
  StepsWidget,
  MusicWidget,
  TimerWidget,
  AirplaneMode,
  DoNotDisturb,
  ShoppingCart,
  DeliveryTracker,
  FlightStatus,
} from './items/AlertItems';

/**
 * Registry of all overwhelming item components.
 * Add new components here to include them in the random spawning.
 *
 * weight: Higher weight = more likely to spawn (default: 1)
 */
export const itemRegistry: OverwhelmingItemConfig[] = [
  // ============ NOTIFICATIONS (15) ============
  { id: 'notif-instagram', category: 'notification', component: InstagramLikeNotif, weight: 2 },
  { id: 'notif-twitter', category: 'notification', component: TwitterMentionNotif, weight: 2 },
  { id: 'notif-tiktok', category: 'notification', component: TikTokFollowNotif, weight: 2 },
  { id: 'notif-snapchat', category: 'notification', component: SnapchatNotif, weight: 1 },
  { id: 'notif-youtube', category: 'notification', component: YouTubeNotif, weight: 2 },
  { id: 'notif-discord', category: 'notification', component: DiscordNotif, weight: 1 },
  { id: 'notif-slack', category: 'notification', component: SlackNotif, weight: 1 },
  { id: 'notif-email', category: 'notification', component: EmailNotif, weight: 2 },
  { id: 'notif-calendar', category: 'notification', component: CalendarNotif, weight: 1 },
  { id: 'notif-reminder', category: 'notification', component: ReminderNotif, weight: 1 },
  { id: 'notif-whatsapp', category: 'notification', component: WhatsAppNotif, weight: 2 },
  { id: 'notif-spotify', category: 'notification', component: SpotifyNotif, weight: 1 },
  { id: 'notif-uber', category: 'notification', component: UberNotif, weight: 1 },
  { id: 'notif-news', category: 'notification', component: NewsNotif, weight: 2 },
  { id: 'notif-bank', category: 'notification', component: BankNotif, weight: 1 },

  // ============ REACTIONS (15) ============
  { id: 'react-heart', category: 'reaction', component: HeartReaction, weight: 3 },
  { id: 'react-wow', category: 'reaction', component: WowReaction, weight: 2 },
  { id: 'react-laugh', category: 'reaction', component: LaughReaction, weight: 2 },
  { id: 'react-sad', category: 'reaction', component: SadReaction, weight: 1 },
  { id: 'react-angry', category: 'reaction', component: AngryReaction, weight: 1 },
  { id: 'react-thumbsup', category: 'reaction', component: ThumbsUpReaction, weight: 2 },
  { id: 'react-fire', category: 'reaction', component: FireReaction, weight: 3 },
  { id: 'react-clap', category: 'reaction', component: ClappingReaction, weight: 1 },
  { id: 'react-mindblown', category: 'reaction', component: MindBlownReaction, weight: 1 },
  { id: 'react-eyes', category: 'reaction', component: EyesReaction, weight: 2 },
  { id: 'react-pray', category: 'reaction', component: PrayReaction, weight: 1 },
  { id: 'react-hundred', category: 'reaction', component: HundredReaction, weight: 2 },
  { id: 'react-skull', category: 'reaction', component: SkullReaction, weight: 2 },
  { id: 'react-sparkles', category: 'reaction', component: SparklesReaction, weight: 1 },
  { id: 'react-rocket', category: 'reaction', component: RocketReaction, weight: 1 },

  // ============ VIDEOS (10) ============
  { id: 'video-dance', category: 'video', component: DanceVideo, weight: 2 },
  { id: 'video-food', category: 'video', component: FoodVideo, weight: 2 },
  { id: 'video-pet', category: 'video', component: PetVideo, weight: 2 },
  { id: 'video-meme', category: 'video', component: MemeVideo, weight: 2 },
  { id: 'video-tutorial', category: 'video', component: TutorialVideo, weight: 1 },
  { id: 'video-gaming', category: 'video', component: GamingVideo, weight: 2 },
  { id: 'video-fitness', category: 'video', component: FitnessVideo, weight: 1 },
  { id: 'video-comedy', category: 'video', component: ComedyVideo, weight: 2 },
  { id: 'video-asmr', category: 'video', component: AsmrVideo, weight: 1 },
  { id: 'video-vlog', category: 'video', component: VlogVideo, weight: 1 },

  // ============ SOCIAL (10) ============
  { id: 'social-story1', category: 'social', component: InstagramStory, weight: 2 },
  { id: 'social-story2', category: 'social', component: InstagramStory2, weight: 1 },
  { id: 'social-twitter', category: 'social', component: TwitterPost, weight: 1 },
  { id: 'social-reddit', category: 'social', component: RedditPost, weight: 1 },
  { id: 'social-linkedin', category: 'social', component: LinkedInPost, weight: 1 },
  { id: 'social-followers', category: 'social', component: FollowerCount, weight: 2 },
  { id: 'social-likes', category: 'social', component: LikeCounter, weight: 2 },
  { id: 'social-views', category: 'social', component: ViewCounter, weight: 2 },
  { id: 'social-trending', category: 'social', component: TrendingTag, weight: 1 },
  { id: 'social-verified', category: 'social', component: VerifiedBadge, weight: 1 },

  // ============ MESSAGES (12) ============
  { id: 'msg-text1', category: 'message', component: TextMessage, weight: 3 },
  { id: 'msg-text2', category: 'message', component: TextMessage2, weight: 2 },
  { id: 'msg-text3', category: 'message', component: TextMessage3, weight: 2 },
  { id: 'msg-group', category: 'message', component: GroupMessage, weight: 2 },
  { id: 'msg-voice', category: 'message', component: VoiceMessage, weight: 1 },
  { id: 'msg-typing', category: 'message', component: TypingIndicator, weight: 2 },
  { id: 'msg-image', category: 'message', component: ImageMessage, weight: 1 },
  { id: 'msg-unread', category: 'message', component: UnreadBadge, weight: 3 },
  { id: 'msg-unread2', category: 'message', component: UnreadBadge2, weight: 2 },
  { id: 'msg-missed', category: 'message', component: MissedCall, weight: 2 },
  { id: 'msg-location', category: 'message', component: LocationShare, weight: 1 },
  { id: 'msg-payment', category: 'message', component: PaymentRequest, weight: 1 },

  // ============ ALERTS & WIDGETS (14) ============
  { id: 'alert-battery', category: 'alert', component: BatteryLow, weight: 2 },
  { id: 'alert-storage', category: 'alert', component: StorageFull, weight: 1 },
  { id: 'alert-update', category: 'alert', component: UpdateAvailable, weight: 2 },
  { id: 'alert-screentime', category: 'alert', component: ScreenTimeAlert, weight: 2 },
  { id: 'alert-wifi', category: 'alert', component: WifiDisconnected, weight: 1 },
  { id: 'widget-weather', category: 'widget', component: WeatherWidget, weight: 1 },
  { id: 'widget-steps', category: 'widget', component: StepsWidget, weight: 1 },
  { id: 'widget-music', category: 'widget', component: MusicWidget, weight: 2 },
  { id: 'widget-timer', category: 'widget', component: TimerWidget, weight: 1 },
  { id: 'widget-airplane', category: 'widget', component: AirplaneMode, weight: 1 },
  { id: 'widget-dnd', category: 'widget', component: DoNotDisturb, weight: 1 },
  { id: 'widget-cart', category: 'widget', component: ShoppingCart, weight: 1 },
  { id: 'widget-delivery', category: 'widget', component: DeliveryTracker, weight: 1 },
  { id: 'widget-flight', category: 'widget', component: FlightStatus, weight: 1 },
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
