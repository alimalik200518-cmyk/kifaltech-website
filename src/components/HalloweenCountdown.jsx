import React, { useState, useEffect } from 'react';

/**
 * Accurately calculates time remaining until October 31, 2026 23:59:59
 */
export default function HalloweenCountdown({
  targetDate = '2026-10-31T23:59:59',
  variant = 'card', // 'card' | 'banner' | 'inline'
  onExpire = null
}) {
  const calculateTimeLeft = () => {
    const target = new Date(targetDate).getTime();
    const now = new Date().getTime();
    const difference = target - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0, expired: true };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((difference % (1000 * 60)) / 1000),
      expired: false
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft);

  useEffect(() => {
    const timer = setInterval(() => {
      const updated = calculateTimeLeft();
      setTimeLeft(updated);
      if (updated.expired && onExpire) {
        onExpire();
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const pad = (num) => String(num).padStart(2, '0');

  if (timeLeft.expired) {
    return (
      <span className="halloween-countdown-expired" style={{ color: 'var(--halloween-orange, #ff6b2b)', fontWeight: 600 }}>
        Campaign Concluded
      </span>
    );
  }

  // 1. Ultra-compact banner variant
  if (variant === 'banner') {
    return (
      <div className="halloween-countdown-banner" aria-label="Time remaining in Halloween campaign">
        <span className="countdown-segment"><strong className="countdown-num">{timeLeft.days}</strong><span className="countdown-lbl">d</span></span>
        <span className="countdown-colon">:</span>
        <span className="countdown-segment"><strong className="countdown-num">{pad(timeLeft.hours)}</strong><span className="countdown-lbl">h</span></span>
        <span className="countdown-colon">:</span>
        <span className="countdown-segment"><strong className="countdown-num">{pad(timeLeft.minutes)}</strong><span className="countdown-lbl">m</span></span>
        <span className="countdown-colon">:</span>
        <span className="countdown-segment"><strong className="countdown-num">{pad(timeLeft.seconds)}</strong><span className="countdown-lbl">s</span></span>
      </div>
    );
  }

  // 2. Inline badge variant
  if (variant === 'inline') {
    return (
      <div className="halloween-countdown-inline" aria-label="Countdown timer">
        <span>{timeLeft.days}d {pad(timeLeft.hours)}h {pad(timeLeft.minutes)}m {pad(timeLeft.seconds)}s left</span>
      </div>
    );
  }

  // 3. Premium card / modal variant with individual digits
  return (
    <div className="halloween-countdown-card" aria-label="Halloween campaign countdown timer">
      <div className="countdown-box">
        <span className="countdown-box-val">{pad(timeLeft.days)}</span>
        <span className="countdown-box-tag">DAYS</span>
      </div>
      <span className="countdown-sep">:</span>
      <div className="countdown-box">
        <span className="countdown-box-val">{pad(timeLeft.hours)}</span>
        <span className="countdown-box-tag">HOURS</span>
      </div>
      <span className="countdown-sep">:</span>
      <div className="countdown-box">
        <span className="countdown-box-val">{pad(timeLeft.minutes)}</span>
        <span className="countdown-box-tag">MINS</span>
      </div>
      <span className="countdown-sep">:</span>
      <div className="countdown-box">
        <span className="countdown-box-val">{pad(timeLeft.seconds)}</span>
        <span className="countdown-box-tag">SECS</span>
      </div>
    </div>
  );
}
