import './items.css';

// Social media posts and elements
export const InstagramStory = () => (
    <div className="story-ring">
        <div className="story-avatar">
            <div className="avatar-placeholder">JD</div>
        </div>
        <span className="story-name">johndoe</span>
    </div>
);

export const InstagramStory2 = () => (
    <div className="story-ring live">
        <div className="story-avatar">
            <div className="avatar-placeholder pink">SK</div>
        </div>
        <span className="story-name">LIVE</span>
    </div>
);

export const TwitterPost = () => (
    <div className="social-post twitter-post">
        <div className="post-header">
            <div className="avatar-small">TC</div>
            <span>@techcrunch</span>
        </div>
        <p>Breaking: Major announcement coming soon...</p>
        <div className="post-stats">
            <span>&#128172; 2.4K</span>
            <span>&#128260; 8.1K</span>
            <span>&#10084; 24K</span>
        </div>
    </div>
);

export const RedditPost = () => (
    <div className="social-post reddit-post">
        <div className="reddit-votes">
            <span>&#9650;</span>
            <span className="vote-count">42.1k</span>
            <span>&#9660;</span>
        </div>
        <div className="reddit-content">
            <span className="subreddit">r/popular</span>
            <p>You won&apos;t believe what happened today...</p>
        </div>
    </div>
);

export const LinkedInPost = () => (
    <div className="social-post linkedin-post">
        <div className="post-header">
            <div className="avatar-small blue">PM</div>
            <div>
                <strong>Product Manager</strong>
                <span className="subtitle">Thoughts on leadership...</span>
            </div>
        </div>
        <p>Agree? &#128073;</p>
    </div>
);

export const FollowerCount = () => (
    <div className="stat-bubble">
        <span className="stat-number">10.2K</span>
        <span className="stat-label">new followers</span>
    </div>
);

export const LikeCounter = () => (
    <div className="stat-bubble pink">
        <span className="stat-number">+847</span>
        <span className="stat-label">likes today</span>
    </div>
);

export const ViewCounter = () => (
    <div className="stat-bubble purple">
        <span className="stat-number">2.1M</span>
        <span className="stat-label">views</span>
    </div>
);

export const TrendingTag = () => (
    <div className="trending-tag">
        <span className="trend-rank">#1</span>
        <span className="trend-name">#trending</span>
        <span className="trend-count">142K posts</span>
    </div>
);

export const VerifiedBadge = () => (
    <div className="verified-bubble">
        <span>&#10004;</span>
        <span>Verified</span>
    </div>
);
