"use client";

import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";

type WorkItem = {
  title: string;
  kind: string;
  image: string;
  width: number;
  height: number;
  alt?: string;
};

export default function WorkCarousel({
  items,
  label = "Selected work carousel",
  sizes = "(max-width: 760px) 92vw, 720px",
}: {
  items: WorkItem[];
  label?: string;
  sizes?: string;
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const drag = useRef({ active: false, startX: 0, startScroll: 0, moved: false });

  const slideWidth = () => trackRef.current?.clientWidth ?? 1;

  const syncIndex = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const next = Math.round(track.scrollLeft / slideWidth());
    setIndex(Math.min(Math.max(next, 0), items.length - 1));
  }, [items.length]);

  const goTo = useCallback(
    (next: number) => {
      const track = trackRef.current;
      if (!track) return;
      const clamped = Math.min(Math.max(next, 0), items.length - 1);
      track.scrollTo({ left: clamped * slideWidth(), behavior: "smooth" });
    },
    [items.length],
  );

  useEffect(() => {
    window.addEventListener("resize", syncIndex);
    return () => window.removeEventListener("resize", syncIndex);
  }, [syncIndex]);

  // Click-and-drag panning for desktop pointers. Touch is left to the browser
  // so native momentum scrolling and snapping stay intact.
  const onPointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    if (event.pointerType === "touch") return;
    const track = trackRef.current;
    if (!track) return;
    drag.current = {
      active: true,
      startX: event.clientX,
      startScroll: track.scrollLeft,
      moved: false,
    };
    track.setPointerCapture(event.pointerId);
    track.style.scrollSnapType = "none";
  };

  const onPointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    const track = trackRef.current;
    if (!drag.current.active || !track) return;
    const delta = event.clientX - drag.current.startX;
    if (Math.abs(delta) > 3) drag.current.moved = true;
    track.scrollLeft = drag.current.startScroll - delta;
  };

  const endDrag = (event: React.PointerEvent<HTMLDivElement>) => {
    const track = trackRef.current;
    if (!drag.current.active || !track) return;
    const delta = event.clientX - drag.current.startX;
    drag.current.active = false;
    track.releasePointerCapture(event.pointerId);
    track.style.scrollSnapType = "";

    // A short flick still advances a slide; anything else settles to nearest.
    const threshold = slideWidth() * 0.15;
    const start = Math.round(drag.current.startScroll / slideWidth());
    if (Math.abs(delta) > threshold) {
      goTo(delta < 0 ? start + 1 : start - 1);
    } else {
      goTo(start);
    }
  };

  const counter = (value: number) => String(value).padStart(2, "0");

  return (
    <div className="work-carousel">
      <div className="carousel-nav">
        <p className="carousel-counter" aria-live="polite">
          <span>{counter(index + 1)}</span> / {counter(items.length)}
        </p>
        <div className="carousel-buttons">
          <button
            type="button"
            className="carousel-arrow"
            onClick={() => goTo(index - 1)}
            disabled={index === 0}
            aria-label="Previous project"
          >
            <ArrowLeft size={16} aria-hidden="true" />
          </button>
          <button
            type="button"
            className="carousel-arrow"
            onClick={() => goTo(index + 1)}
            disabled={index === items.length - 1}
            aria-label="Next project"
          >
            <ArrowRight size={16} aria-hidden="true" />
          </button>
        </div>
      </div>

      <div
        className="work-track"
        ref={trackRef}
        onScroll={syncIndex}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        onClickCapture={(event) => {
          if (drag.current.moved) event.preventDefault();
        }}
        tabIndex={0}
        role="group"
        aria-label={label}
      >
        {items.map((item, i) => (
          <div className="work-slide" key={item.title} aria-hidden={i !== index}>
            <article className="work-card">
              <Image
                src={item.image}
                alt={item.alt ?? `${item.title} sample`}
                width={item.width}
                height={item.height}
                sizes={sizes}
                draggable={false}
                priority={i === 0}
              />
              <div className="work-meta">
                <p>{item.kind}</p>
                <h3>{item.title}</h3>
              </div>
            </article>
          </div>
        ))}
      </div>
    </div>
  );
}
