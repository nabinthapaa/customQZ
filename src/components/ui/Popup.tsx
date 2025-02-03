import { memo, PropsWithChildren, useCallback, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { createPortal } from "react-dom";

interface Props extends PropsWithChildren {
  isOpen: boolean;
  onClose: () => void;
}

function Popup({ children, onClose, isOpen }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const abortRef = useRef<AbortController | null>(null);

  const handleOutsideClick = useCallback(
    (e: MouseEvent) => {
      if (e.target === ref.current) {
        onClose();
      }
    },
    [onClose],
  );

  useEffect(() => {
    if (!isOpen) return;

    abortRef.current = new AbortController();
    document.addEventListener("click", handleOutsideClick, {
      signal: abortRef.current.signal,
    });

    return () => {
      abortRef.current?.abort();
      abortRef.current = null;
    };
  }, [handleOutsideClick, isOpen]);

  return createPortal(
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={ref}
            className="fixed inset-0 z-50 bg-black/50 grid place-items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              {children}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>,
    document.querySelector<HTMLDivElement>("#popups")!,
  );
}

export default memo(Popup);
