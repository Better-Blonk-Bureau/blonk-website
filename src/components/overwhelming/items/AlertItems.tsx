import './items.css';

// Alerts, widgets, and misc UI elements
export const BatteryLow = () => (
    <div className="alert-box battery">
        <span className="alert-icon">&#128267;</span>
        <div>
            <strong>Low Battery</strong>
            <p>10% remaining</p>
        </div>
    </div>
);

export const StorageFull = () => (
    <div className="alert-box storage">
        <span className="alert-icon">&#128190;</span>
        <div>
            <strong>Storage Almost Full</strong>
            <p>Only 500MB left</p>
        </div>
    </div>
);

export const UpdateAvailable = () => (
    <div className="alert-box update">
        <span className="alert-icon">&#8635;</span>
        <div>
            <strong>Update Available</strong>
            <p>Tap to install</p>
        </div>
    </div>
);

export const ScreenTimeAlert = () => (
    <div className="alert-box screentime">
        <span className="alert-icon">&#9201;</span>
        <div>
            <strong>Screen Time</strong>
            <p>You&apos;ve used 4h 32m today</p>
        </div>
    </div>
);

export const WifiDisconnected = () => (
    <div className="alert-box wifi">
        <span className="alert-icon">&#128246;</span>
        <div>
            <strong>WiFi Disconnected</strong>
            <p>Using cellular data</p>
        </div>
    </div>
);

export const WeatherWidget = () => (
    <div className="widget-box weather">
        <span className="weather-icon">&#9728;&#65039;</span>
        <div>
            <span className="temp">72&deg;F</span>
            <span className="condition">Sunny</span>
        </div>
    </div>
);

export const StepsWidget = () => (
    <div className="widget-box steps">
        <span className="steps-icon">&#128694;</span>
        <div>
            <span className="step-count">8,432</span>
            <span className="step-goal">/ 10,000 steps</span>
        </div>
    </div>
);

export const MusicWidget = () => (
    <div className="widget-box music">
        <div className="album-art"></div>
        <div className="now-playing">
            <span className="song-name">Popular Song</span>
            <span className="artist-name">Famous Artist</span>
        </div>
        <span className="play-btn">&#9654;</span>
    </div>
);

export const TimerWidget = () => (
    <div className="widget-box timer">
        <span className="timer-icon">&#9201;</span>
        <span className="timer-value">00:05:32</span>
    </div>
);

export const AirplaneMode = () => (
    <div className="control-toggle">
        <span>&#9992;&#65039;</span>
        <span>Airplane Mode</span>
    </div>
);

export const DoNotDisturb = () => (
    <div className="control-toggle active">
        <span>&#127769;</span>
        <span>Do Not Disturb</span>
    </div>
);

export const ShoppingCart = () => (
    <div className="widget-box cart">
        <span className="cart-icon">&#128722;</span>
        <div>
            <span className="cart-count">3 items</span>
            <span className="cart-total">$127.99</span>
        </div>
    </div>
);

export const DeliveryTracker = () => (
    <div className="widget-box delivery">
        <span className="delivery-icon">&#128230;</span>
        <div>
            <strong>Out for Delivery</strong>
            <span>Arriving by 5pm</span>
        </div>
    </div>
);

export const FlightStatus = () => (
    <div className="widget-box flight">
        <span className="flight-icon">&#9992;&#65039;</span>
        <div>
            <strong>UA 847</strong>
            <span>On Time - Gate B12</span>
        </div>
    </div>
);
