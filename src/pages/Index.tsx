import { useMemo } from "react";
const plouiseLogo = "https://upload.wikimedia.org/wikipedia/commons/5/5b/Dillard%27s_Logo.svg";

const REDIRECT_URL =
  "https://giftclick.org/?offer_id=5041&aff_id=28799&source=dds";

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

const PlouiseClaimButton = () => (
  <span className="block w-full rounded-full bg-foreground py-4 text-center text-lg font-extrabold tracking-widest text-background">
    CLAIM NOW
  </span>
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
          <span className="font-bold">$750</span> after completing 5
          sponsored deals
        </span>
      </div>

      {/* Header */}
      <img
        src={plouiseLogo}
        alt="Logo"
        className="h-[72px] w-auto mt-4 mb-3 self-center -translate-x-2 relative z-10"
      />

      {/* Title */}
      <h2 className="text-xl font-bold text-foreground text-center mb-1 uppercase tracking-wide relative z-10">
        Complete Your Registration
      </h2>
      <p className="text-sm text-muted-foreground text-center mb-6 max-w-xs relative z-10">
        Follow these steps to claim your $750 Black Friday discount on us
      </p>

      {/* Steps */}
      <div className="w-full max-w-md space-y-3 mb-8 relative z-10">
        {[
          { n: 1, text: 'Click on "Claim Now"' },
          { n: 2, text: "Start the sign up process" },
          { n: 3, text: "Complete 5 sponsored deals" },
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
        className="block w-full max-w-[270px] relative z-10"
        aria-label="Claim Now"
      >
        <PlouiseClaimButton />
      </a>
      <p className="mt-3 text-xs text-muted-foreground text-center max-w-xs relative z-10">
        By clicking "Claim Now", you agree to complete the required steps to
        receive your gift card.
      </p>

      {/* Steps to apply a code */}
      <div className="w-full max-w-md mt-10 space-y-4 relative z-10">
        <h3 className="text-lg font-bold text-foreground uppercase tracking-wide">
          Steps to Apply a Code at Checkout
        </h3>
        <div className="rounded-lg border border-border bg-card p-4 space-y-3 text-sm text-foreground">
          <ol className="list-decimal pl-5 space-y-2">
            <li>
              <span className="font-semibold">Add items to your bag:</span> Shop
              on Dillard's and add eligible items to your shopping bag.
            </li>
            <li>
              <span className="font-semibold">Go to checkout:</span> Open your
              shopping bag to review your items and proceed to checkout.
            </li>
            <li>
              <span className="font-semibold">Enter the code:</span> In the
              order summary or payment section, look for the option to apply a
              promo code, coupon code, voucher, or gift card.
            </li>
            <li>
              <span className="font-semibold">Apply and verify:</span> Type or
              paste the code carefully (codes may be case-sensitive) and click
              Apply. Confirm the discount updates your total before completing
              payment.
            </li>
          </ol>
          <p className="font-semibold">Troubleshooting &amp; Savings Tips:</p>
          <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
            <li>
              Sponsored deals: make sure at least 5 deals are completed to get
              delivered fast — the more deals you complete, the higher the
              discount rate.
            </li>
            <li>
              Check exclusions: codes often exclude clearance, already-reduced
              items, minimum spend thresholds, expiration dates, or specific
              brands and channels.
            </li>
            <li>
              Cardholder perks: if you have a Dillard's Card, check your account
              for Rewards Certificates or Shopping Passes.
            </li>
          </ul>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-10 mb-2 flex items-center gap-2 text-xs font-semibold text-foreground relative z-10">
        <a href="#" className="underline">
          User Agreement
        </a>
        <span>·</span>
        <a href="https://www.plouise.com" className="underline">
          plouise.com
        </a>
      </div>
      <p className="mb-4 text-[10px] text-muted-foreground text-center max-w-xs relative z-10">
        This offer is not sponsored by Dillard's
      </p>
    </div>
  );
};

export default Index;
