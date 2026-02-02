import './items.css';

// Message bubbles and chat elements
export const TextMessage = () => (
  <div className="message-bubble incoming">
    <p>hey are you there??</p>
    <span className="msg-time">now</span>
  </div>
);

export const TextMessage2 = () => (
  <div className="message-bubble incoming urgent">
    <p>HELLO???</p>
    <span className="msg-time">2m ago</span>
  </div>
);

export const TextMessage3 = () => (
  <div className="message-bubble incoming">
    <p>did you see what happened??</p>
    <span className="msg-time">5m ago</span>
  </div>
);

export const GroupMessage = () => (
  <div className="message-bubble group">
    <span className="group-name">Squad &#128293;</span>
    <p>omg you guys</p>
    <span className="msg-time">just now</span>
  </div>
);

export const VoiceMessage = () => (
  <div className="message-bubble voice">
    <div className="voice-wave">
      {[...Array(12)].map((_, i) => (
        <div key={i} className="wave-bar" style={{ height: `${Math.random() * 20 + 5}px` }} />
      ))}
    </div>
    <span className="voice-duration">0:47</span>
  </div>
);

export const TypingIndicator = () => (
  <div className="message-bubble typing">
    <div className="typing-dots">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>
);

export const ImageMessage = () => (
  <div className="message-bubble image-msg">
    <div className="image-placeholder">
      <span>&#128247;</span>
    </div>
    <p>look at this!!</p>
  </div>
);

export const UnreadBadge = () => (
  <div className="unread-badge">
    <span>99+</span>
  </div>
);

export const UnreadBadge2 = () => (
  <div className="unread-badge small">
    <span>23</span>
  </div>
);

export const MissedCall = () => (
  <div className="missed-call">
    <span className="call-icon">&#128222;</span>
    <div>
      <strong>Missed Call</strong>
      <span>Mom (3)</span>
    </div>
  </div>
);

export const LocationShare = () => (
  <div className="message-bubble location">
    <div className="location-preview">
      <span>&#128205;</span>
    </div>
    <p>shared their location</p>
  </div>
);

export const PaymentRequest = () => (
  <div className="message-bubble payment">
    <span className="payment-icon">&#128176;</span>
    <div>
      <strong>$25.00</strong>
      <p>for dinner last night</p>
    </div>
  </div>
);
