"use client";

import { useState, useEffect } from "react";
import type { TeamMember } from "@/data/team";

interface TeamCardProps {
  member: TeamMember;
}

export function TeamCard({ member }: TeamCardProps) {
  const [open, setOpen] = useState(false);

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
      <div className="flex flex-col items-center border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200 bg-white">
        {/* Photo — circular crop to reduce graininess appearance */}
        <div className="w-28 h-28 mt-6 rounded-full overflow-hidden bg-gray-100 shrink-0 ring-4 ring-[#0D9488]/20">
          <img
            src={member.photo}
            alt={`Photo of ${member.name}`}
            className="object-cover w-full h-full"
          />
        </div>

        {/* Info */}
        <div className="flex flex-col items-center text-center px-5 py-5 w-full">
          {/* Department subtitle */}
          <span className="text-xs font-semibold uppercase tracking-widest text-[#0D9488] mb-1">
            {member.department}
          </span>
          <h2 className="font-bold text-[#0A1628] text-base mb-0.5">
            {member.name}
          </h2>
          <p className="text-gray-400 text-xs leading-snug mb-4">
            {member.title}
          </p>
          <button
            onClick={() => setOpen(true)}
            className="text-xs font-semibold text-white bg-[#0D9488] hover:bg-[#14B8A8] px-4 py-1.5 rounded-lg transition-colors duration-150"
          >
            View profile
          </button>
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
              <span className="text-xs font-semibold uppercase tracking-widest text-[#0D9488]">
                {member.department}
              </span>
              <h2 className="font-bold text-[#0A1628] text-xl mt-1 mb-0.5">
                {member.name}
              </h2>
              <p className="text-gray-400 font-semibold text-sm mb-4">
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
