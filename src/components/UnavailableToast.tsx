import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

/* ── Context ─────────────────────────────────────── */
interface UnavailableCtx {
  trigger: () => void;
}

const Ctx = createContext<UnavailableCtx>({ trigger: () => {} });

export function useUnavailable() {
  return useContext(Ctx);
}

/* ── Provider + Toast UI ─────────────────────────── */
export const UnavailableProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [visible, setVisible] = useState(false);
  const [exiting, setExiting] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const dismiss = useCallback(() => {
    setExiting(true);
    setTimeout(() => {
      setVisible(false);
      setExiting(false);
    }, 380);
  }, []);

  const trigger = useCallback(() => {
    // Reset if already visible
    if (timerRef.current) clearTimeout(timerRef.current);
    setExiting(false);
    setVisible(true);
    // Auto-dismiss after 3.5 s
    timerRef.current = setTimeout(dismiss, 3500);
  }, [dismiss]);

  // Cleanup on unmount
  useEffect(() => () => { if (timerRef.current) clearTimeout(timerRef.current); }, []);

  return (
    <Ctx.Provider value={{ trigger }}>
      {children}

      {/* ── Toast ──────────────────────────────────── */}
      {visible && (
        <div
          role="alert"
          aria-live="assertive"
          style={{
            position: "fixed",
            top: "80px",
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 9999,
            minWidth: "300px",
            maxWidth: "calc(100vw - 40px)",
            animation: exiting
              ? "toast-out 0.38s cubic-bezier(0.16,1,0.3,1) forwards"
              : "toast-in 0.4s cubic-bezier(0.16,1,0.3,1) forwards",
          }}
        >
          <div
            style={{
              background: "rgba(18,18,18,0.96)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: "16px",
              padding: "16px 20px",
              display: "flex",
              alignItems: "flex-start",
              gap: "14px",
              boxShadow:
                "0 24px 64px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.04)",
            }}
          >
            {/* Icon */}
            <div
              style={{
                flexShrink: 0,
                width: "36px",
                height: "36px",
                borderRadius: "10px",
                background: "rgba(255,80,60,0.12)",
                border: "1px solid rgba(255,80,60,0.25)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#ff5c4a",
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.6" />
                <path d="M12 8v4M12 16h.01" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
            </div>

            {/* Text */}
            <div style={{ flex: 1 }}>
              <p
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 600,
                  fontSize: "0.88rem",
                  color: "#f0ede8",
                  margin: 0,
                  lineHeight: 1.3,
                }}
              >
                Page Not Available
              </p>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.76rem",
                  color: "#6e6b66",
                  margin: "4px 0 0",
                  lineHeight: 1.5,
                }}
              >
                This page isn't ready yet. Please try again later.
              </p>
            </div>

            {/* Dismiss button */}
            <button
              onClick={dismiss}
              aria-label="Dismiss"
              style={{
                flexShrink: 0,
                background: "none",
                border: "none",
                padding: "2px",
                cursor: "pointer",
                color: "#6e6b66",
                display: "flex",
                alignItems: "center",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLButtonElement).style.color = "#f0ede8")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLButtonElement).style.color = "#6e6b66")
              }
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path
                  d="M18 6L6 18M6 6l12 12"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>

          {/* Progress bar */}
          <div
            style={{
              height: "2px",
              background: "rgba(255,255,255,0.07)",
              borderRadius: "0 0 16px 16px",
              overflow: "hidden",
              marginTop: "-2px",
            }}
          >
            <div
              style={{
                height: "100%",
                background:
                  "linear-gradient(90deg, #ff5c4a, #f0c040)",
                borderRadius: "inherit",
                animation: "toast-progress 3.5s linear forwards",
              }}
            />
          </div>
        </div>
      )}

      {/* Keyframes injected once */}
      <style>{`
        @keyframes toast-in {
          from { opacity: 0; transform: translateX(-50%) translateY(-12px) scale(0.95); }
          to   { opacity: 1; transform: translateX(-50%) translateY(0)     scale(1);    }
        }
        @keyframes toast-out {
          from { opacity: 1; transform: translateX(-50%) translateY(0)     scale(1);    }
          to   { opacity: 0; transform: translateX(-50%) translateY(-12px) scale(0.95); }
        }
        @keyframes toast-progress {
          from { width: 100%; }
          to   { width: 0%;   }
        }
      `}</style>
    </Ctx.Provider>
  );
};

/* ── Drop-in anchor replacement ─────────────────── */
interface UnavailableLinkProps
  extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "onClick"> {
  children: React.ReactNode;
}

export const UnavailableLink: React.FC<UnavailableLinkProps> = ({
  children,
  ...rest
}) => {
  const { trigger } = useUnavailable();

  return (
    <a
      {...rest}
      href="#"
      onClick={(e) => {
        e.preventDefault();
        trigger();
      }}
    >
      {children}
    </a>
  );
};
