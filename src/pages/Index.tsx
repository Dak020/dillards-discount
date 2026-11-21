import { useMemo } from "react";
import plouiseLogo from "@/assets/plouise-logo.webp";

const REDIRECT_URL =
  "https://linkthem.net/aff_c?offer_id=5384&aff_id=28799&source=plo";

type Flake = {
  left: number;
  size: number;
  duration: number;
  delay: number;
  drift: number;
  opacity: number;
};

const Snowfall = () => {
  const flakes = useMemo<Flake[]>(
    () =>
      Array.from({ length: 60 }, () => ({
        left: Math.random() * 100,
        size: 2 + Math.random() * 4,
        duration: 6 + Math.random() * 10,
        delay: -Math.random() * 16,
        drift: (Math.random() - 0.5) * 120,
        opacity: 0.4 + Math.random() * 0.6,
      })),
    []
  );

  return (
    <div
      className="pointer-events-none fixed inset-0 overflow-hidden z-50"
      aria-hidden="true"
    >
      {flakes.map((f, i) => (
        <span
          key={i}
          className="snowflake"
          style={{
            left: `${f.left}%`,
            width: f.size,
            height: f.size,
            opacity: f.opacity,
            animationDuration: `${f.duration}s`,
            animationDelay: `${f.delay}s`,
            ["--drift" as string]: `${f.drift}px`,
          }}
        />
      ))}
    </div>
  );
};

// Authentic P. Louise Dripping Snow Button
const PlouiseClaimButton = () => (
  <svg
    viewBox="0 0 426 118"
    className="w-full h-auto drop-shadow-md select-none transition-transform active:scale-[0.98]"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Soft Pink Capsule Body */}
    <rect
      x="2"
      y="4"
      width="422"
      height="110"
      rx="55"
      fill="#FDC2D8"
      stroke="#F4A6C4"
      strokeWidth="2"
    />

    {/* Dripping Snow Icing */}
    <path
      d="M55 4C24.6 4 2 28.6 2 59c0 4.1.5 8 1.4 11.8 1.2 5.1 6.5 7.6 11 5.3 4.8-2.5 7.8-6.9 12-8.8 6.7-3 12.3 3.4 18.2 5.8 6.8 2.8 13.9.7 18.2-4.9 3.2-4.1 7.4-6.4 12.6-5.8 7.2.8 11.7 8.3 18.7 10.1 7.4 1.9 14.1-3.2 19.3-8.2 4.1-4 8.7-5.9 14.4-5 6.9 1.1 11.8 7.9 18.4 10.3 7.8 2.9 15.3-1.6 21.2-6.6 4.3-3.7 9.1-5.3 14.7-4.2 6.8 1.3 11.7 8.1 18.3 10.4 7.6 2.7 14.8-1.7 20.7-6.5 4.5-3.6 9.4-5.1 15.1-3.9 6.7 1.4 11.6 8.3 18.1 10.5 7.8 2.6 14.9-1.9 20.8-6.7 4.2-3.4 8.9-4.8 14.4-3.8 6.8 1.2 11.7 7.8 18.2 10.1 7.2 2.5 14-1.5 19.7-5.9 4.8-3.7 9.8-5.3 15.8-3.8 6.6 1.6 12.1 7.4 18.7 8.1 4.7.5 9-2.1 11.4-6.2 4.8-8.2 7-17.3 7-26.9C424 28.6 401.4 4 371 4H55z"
      fill="#FFFFFF"
    />

    {/* Subtle snow gloss highlight */}
    <path
      d="M55 7h316c27 0 49 20.5 51 46.5-5.2-1.2-10.4-3.5-15.6-4.5-6.5-1.3-12.7.7-18.4 4.5-5.9 3.9-12.1 7.2-18.9 5.2-6.2-1.8-10.9-7.8-17.2-8.9-6.3-1.1-12.2.8-17.7 4.7-5.7 4-11.8 7.4-18.4 5.3-6.2-2-10.8-8.1-17.1-9.3-6.4-1.2-12.3.6-17.8 4.6-5.8 4.2-11.9 7.6-18.6 5.5-6.1-1.9-10.7-8-17-9.2-6.5-1.2-12.4.7-18 4.8-5.7 4.1-11.7 7.4-18.3 5.4-6.2-1.9-10.8-7.9-17-9.1-6.5-1.2-12.4.7-18 4.8-5.7 4.1-11.8 7.3-18.4 5.2-5.9-1.9-10.4-7.4-16.1-9.1-5.8-1.7-11.7-.2-17 3.3-4.5 3-9.1 5.4-14.3 4.2C8 53.6 5 44 5 34 5 19.1 27.4 7 55 7z"
      fill="rgba(255,255,255,0.7)"
    />

    {/* Black Centered Typography */}
    <text
      x="213"
      y="84"
      textAnchor="middle"
      fill="#000000"
      fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
      fontSize="24"
      fontWeight="800"
      letterSpacing="2.5"
    >
      CLAIM NOW
    </text>
  </svg>
);

const Index = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center px-4 py-8 relative">
      <Snowfall />

      {/* Top deals banner */}
      <div className="-mx-4 -mt-8 mb-6 self-stretch bg-primary text-primary-foreground px-5 py-3 flex items-center gap-4 text-sm relative z-10">
        <span className="font-semibold tracking-wide whitespace-nowrap">
          TODAY'S DEALS
        </span>
        <span className="h-5 w-px bg-white/60 shrink-0" />
        <span className="leading-snug">
          <span className="font-bold">Up to 60% off</span> after completing 4
          sponsored deals
        </span>
      </div>

      {/* Header */}
      <img
        src={plouiseLogo}
        alt="P. Louise"
        className="h-[72px] w-auto mt-4 mb-3 self-center -translate-x-2 relative z-10"
      />

      {/* Title */}
      <h2 className="text-xl font-bold text-foreground text-center mb-1 uppercase tracking-wide relative z-10">
        Complete Your Registration
      </h2>
      <p className="text-sm text-muted-foreground text-center mb-6 max-w-xs relative z-10">
        Follow these steps to claim your $500 P. Louise Holiday discount
      </p>

      {/* Steps */}
      <div className="w-full max-w-md space-y-3 mb-8 relative z-10">
        {[
          { n: 1, text: 'Click on "Claim Now"' },
          { n: 2, text: "Start the sign up process" },
          { n: 3, text: "Complete 2‑4 sponsored deals" },
          { n: 4, text: "Enjoy your discount!" },
        ].map((step) => (
          <div
            key={step.n}
            className="flex items-center gap-4 rounded-lg border border-border bg-card px-4 py-3.5 shadow-sm"
          >
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
              {step.n}
            </span>
            <span className="text-sm font-medium text-foreground">
              {step.text}
            </span>
          </div>
        ))}
      </div>

      {/* Authentic P. Louise CTA Button */}
      <a
        href={REDIRECT_URL}
        className="block w-full max-w-[270px] active:scale-[0.97] transition-transform relative z-10"
        aria-label="Claim Now"
      >
        <PlouiseClaimButton />
      </a>
      <p className="mt-3 text-xs text-muted-foreground text-center max-w-xs relative z-10">
        By clicking "Claim Now", you agree to complete the required steps to
        receive your gift card.
      </p>

      {/* How to use code */}
      <div className="w-full max-w-md mt-10 space-y-4 relative z-10">
        <h3 className="text-lg font-bold text-foreground uppercase tracking-wide">
          How to Use Your Savings
        </h3>
        <div className="rounded-lg border border-border bg-card p-4 space-y-3 text-sm text-foreground">
          <p className="font-semibold">Follow these steps:</p>
          <ol className="list-decimal pl-5 space-y-2">
            <li>Add your favorite items to your bag.</li>
            <li>
              Continue to checkout on{" "}
              <a
                href="https://www.plouise.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline font-semibold"
              >
                plouise.com
              </a>
              .
            </li>
            <li>
              Any eligible savings and offers will apply automatically at
              checkout.
            </li>
          </ol>
          <p className="font-semibold">Important Tips:</p>
          <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
            <li>
              Most P. Louise offers do not require manually typing a promo code.
            </li>
            <li>Some offers may be limited-time only.</li>
            <li>
              Make sure all activation steps are completed before checkout.
            </li>
          </ul>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-10 mb-2 flex items-center gap-2 text-xs font-semibold text-primary relative z-10">
        <a href="#" className="underline">
          User Agreement
        </a>
        <span>·</span>
        <a href="https://www.plouise.com" className="underline">
          plouise.com
        </a>
      </div>
      <p className="mb-4 text-[10px] text-primary/80 text-center max-w-xs relative z-10">
        This offer is not sponsored by P. Louise
      </p>
    </div>
  );
};

export default Index;
