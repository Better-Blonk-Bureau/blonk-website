import './items.css';

// Apple-style liquid glass notifications
export const InstagramLikeNotif = () => (
  <div className="glass-notif">
    <div className="notif-icon instagram">
      <span>&#x2665;</span>
    </div>
    <div className="notif-content">
      <strong>Instagram</strong>
      <p>user_2847 liked your photo</p>
    </div>
  </div>
);

export const TwitterMentionNotif = () => (
  <div className="glass-notif">
    <div className="notif-icon twitter">
      <span>@</span>
    </div>
    <div className="notif-content">
      <strong>X</strong>
      <p>@techbro mentioned you in a post</p>
    </div>
  </div>
);

export const TikTokFollowNotif = () => (
  <div className="glass-notif">
    <div className="notif-icon tiktok">
      <span>&#9835;</span>
    </div>
    <div className="notif-content">
      <strong>TikTok</strong>
      <p>dancequeen99 started following you</p>
    </div>
  </div>
);

export const SnapchatNotif = () => (
  <div className="glass-notif">
    <div className="notif-icon snapchat">
      <span>&#128123;</span>
    </div>
    <div className="notif-content">
      <strong>Snapchat</strong>
      <p>New snap from bestie!</p>
    </div>
  </div>
);

export const YouTubeNotif = () => (
  <div className="glass-notif">
    <div className="notif-icon youtube">
      <span>&#9654;</span>
    </div>
    <div className="notif-content">
      <strong>YouTube</strong>
      <p>MrBeast uploaded: "I Gave..."</p>
    </div>
  </div>
);

export const DiscordNotif = () => (
  <div className="glass-notif">
    <div className="notif-icon discord">
      <span>&#128172;</span>
    </div>
    <div className="notif-content">
      <strong>Discord</strong>
      <p>@everyone Server event starting!</p>
    </div>
  </div>
);

export const SlackNotif = () => (
  <div className="glass-notif">
    <div className="notif-icon slack">
      <span>#</span>
    </div>
    <div className="notif-content">
      <strong>Slack</strong>
      <p>New message in #general</p>
    </div>
  </div>
);

export const EmailNotif = () => (
  <div className="glass-notif">
    <div className="notif-icon email">
      <span>&#9993;</span>
    </div>
    <div className="notif-content">
      <strong>Mail</strong>
      <p>You have 47 unread emails</p>
    </div>
  </div>
);

export const CalendarNotif = () => (
  <div className="glass-notif">
    <div className="notif-icon calendar">
      <span>&#128197;</span>
    </div>
    <div className="notif-content">
      <strong>Calendar</strong>
      <p>Meeting in 5 minutes</p>
    </div>
  </div>
);

export const ReminderNotif = () => (
  <div className="glass-notif">
    <div className="notif-icon reminder">
      <span>&#128276;</span>
    </div>
    <div className="notif-content">
      <strong>Reminders</strong>
      <p>Don't forget to call mom!</p>
    </div>
  </div>
);

export const WhatsAppNotif = () => (
  <div className="glass-notif">
    <div className="notif-icon whatsapp">
      <span>&#128222;</span>
    </div>
    <div className="notif-content">
      <strong>WhatsApp</strong>
      <p>Family Group: 23 new messages</p>
    </div>
  </div>
);

export const SpotifyNotif = () => (
  <div className="glass-notif">
    <div className="notif-icon spotify">
      <span>&#9835;</span>
    </div>
    <div className="notif-content">
      <strong>Spotify</strong>
      <p>Your friend is listening to...</p>
    </div>
  </div>
);

export const UberNotif = () => (
  <div className="glass-notif">
    <div className="notif-icon uber">
      <span>&#128663;</span>
    </div>
    <div className="notif-content">
      <strong>Uber</strong>
      <p>Your driver is 3 min away</p>
    </div>
  </div>
);

export const NewsNotif = () => (
  <div className="glass-notif">
    <div className="notif-icon news">
      <span>&#128240;</span>
    </div>
    <div className="notif-content">
      <strong>News</strong>
      <p>BREAKING: Something happened...</p>
    </div>
  </div>
);

export const BankNotif = () => (
  <div className="glass-notif urgent">
    <div className="notif-icon bank">
      <span>&#128176;</span>
    </div>
    <div className="notif-content">
      <strong>Bank</strong>
      <p>New transaction: -$42.99</p>
    </div>
  </div>
);
