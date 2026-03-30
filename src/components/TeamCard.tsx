"use client";

import { useState, useEffect } from "react";
import type { TeamMember } from "@/data/team";

const COLLAPSED_LENGTH = 180;

interface TeamCardProps {
  member: TeamMember;
}

export function TeamCard({ member }: TeamCardProps) {
  const [open, setOpen] = useState(false);
  const needsTruncation = member.bio.length > COLLAPSED_LENGTH;
  const preview = needsTruncation
    ? member.bio.slice(0, COLLAPSED_LENGTH).trimEnd() + "..."
    : member.bio;

  // Lock body scroll while modal is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* Card */}
      <div className="flex flex-col border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200 h-full">
        {/* Photo */}
        <div className="relative w-full aspect-square bg-gray-50">
          <img
            src={member.photo}
            alt={`Photo of ${member.name}`}
            className="object-cover w-full h-full absolute inset-0"
          />
        </div>

        {/* Info */}
        <div className="flex flex-col flex-1 p-6">
          <h2 className="font-bold text-[#0A1628] text-lg mb-1">
            {member.name}
          </h2>
          <p className="text-[#0D9488] font-semibold text-sm mb-3">
            {member.title}
          </p>
          <p className="text-gray-500 text-sm leading-relaxed flex-1">
            {preview}
          </p>
          {needsTruncation && (
            <button
              onClick={() => setOpen(true)}
              className="mt-3 self-start text-[#0D9488] font-semibold text-sm hover:text-[#14B8A8] transition-colors duration-150"
            >
              Read more
            </button>
          )}
        </div>
      </div>

      {/* Modal overlay */}
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        >
          <div
            className="relative bg-white rounded-2xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 text-gray-500 transition-colors duration-150"
              aria-label="Close"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Photo */}
            <div className="w-full aspect-video bg-gray-50 overflow-hidden rounded-t-2xl">
              <img
                src={member.photo}
                alt={`Photo of ${member.name}`}
                className="object-cover w-full h-full"
              />
            </div>

            {/* Content */}
            <div className="p-6">
              <h2 className="font-bold text-[#0A1628] text-xl mb-1">
                {member.name}
              </h2>
              <p className="text-[#0D9488] font-semibold text-sm mb-4">
                {member.title}
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                {member.bio}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
