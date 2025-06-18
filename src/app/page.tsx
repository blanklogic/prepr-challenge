"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { X, Check, XIcon } from "lucide-react";

interface Notification {
  id: string;
  type:
    | "award"
    | "friend_request"
    | "project_invite"
    | "organization_invite"
    | "challenge_invite"
    | "system"
    | "comment"
    | "like";
  user: string;
  message: string;
  timestamp: string;
  status?: "pending" | "accepted" | "declined";
  avatarColor: "blue" | "purple";
}

export default function Component() {
  const [hoveredNotification, setHoveredNotification] = useState<string | null>(
    null,
  );
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: "1",
      type: "award",
      user: "Achievement System",
      message: "You earned the 'Early Bird' badge for logging in before 8 AM!",
      timestamp: "2min ago",
      avatarColor: "blue",
    },
    {
      id: "2",
      type: "friend_request",
      user: "Sarah Chen",
      message: "wants to connect with you.",
      timestamp: "15min ago",
      status: "pending",
      avatarColor: "purple",
    },
    {
      id: "3",
      type: "project_invite",
      user: "Alex Rodriguez",
      message: "invited you to collaborate on 'Mobile App Redesign' project.",
      timestamp: "1h ago",
      status: "accepted",
      avatarColor: "blue",
    },
    {
      id: "4",
      type: "friend_request",
      user: "Mike Johnson",
      message: "sent you a friend request.",
      timestamp: "2h ago",
      status: "declined",
      avatarColor: "purple",
    },
    {
      id: "5",
      type: "organization_invite",
      user: "TechCorp HR",
      message: "invited you to join TechCorp as a Senior Developer.",
      timestamp: "3h ago",
      status: "pending",
      avatarColor: "blue",
    },
    {
      id: "6",
      type: "challenge_invite",
      user: "Code Challenge Bot",
      message: "A new coding challenge 'Algorithm Master' is available!",
      timestamp: "5h ago",
      avatarColor: "purple",
    },
    {
      id: "7",
      type: "award",
      user: "Streak Keeper",
      message: "Congratulations! You've maintained a 7-day login streak.",
      timestamp: "1 day ago",
      avatarColor: "blue",
    },
    {
      id: "8",
      type: "project_invite",
      user: "Emma Wilson",
      message: "wants you to review the 'E-commerce Platform' project.",
      timestamp: "2 days ago",
      avatarColor: "purple",
    },
    {
      id: "9",
      type: "comment",
      user: "David Kim",
      message:
        "commented on your project: 'Great work on the user interface design!'",
      timestamp: "3 days ago",
      avatarColor: "blue",
    },
    {
      id: "10",
      type: "like",
      user: "Jessica Martinez",
      message: "liked your post about React best practices.",
      timestamp: "3 days ago",
      avatarColor: "purple",
    },
    {
      id: "11",
      type: "system",
      user: "System Update",
      message: "Your profile has been successfully updated with new skills.",
      timestamp: "4 days ago",
      avatarColor: "blue",
    },
    {
      id: "12",
      type: "friend_request",
      user: "Robert Taylor",
      message: "wants to add you as a friend.",
      timestamp: "5 days ago",
      status: "pending",
      avatarColor: "purple",
    },
    {
      id: "13",
      type: "award",
      user: "Milestone Tracker",
      message:
        "You've completed 50 projects! Here's your 'Project Master' badge.",
      timestamp: "1 week ago",
      avatarColor: "blue",
    },
    {
      id: "14",
      type: "organization_invite",
      user: "StartupXYZ",
      message: "invited you to join their team as a Frontend Developer.",
      timestamp: "1 week ago",
      status: "declined",
      avatarColor: "purple",
    },
    {
      id: "15",
      type: "comment",
      user: "Lisa Anderson",
      message: "replied to your comment: 'I totally agree with your approach!'",
      timestamp: "1 week ago",
      avatarColor: "blue",
    },
    {
      id: "16",
      type: "challenge_invite",
      user: "Weekly Challenge",
      message: "New challenge available: 'Build a Weather App in 24 hours'",
      timestamp: "2 weeks ago",
      avatarColor: "purple",
    },
    {
      id: "17",
      type: "like",
      user: "Mark Thompson",
      message: "and 12 others liked your tutorial on JavaScript closures.",
      timestamp: "2 weeks ago",
      avatarColor: "blue",
    },
    {
      id: "18",
      type: "project_invite",
      user: "Anna Garcia",
      message:
        "invited you to contribute to the 'Open Source Library' project.",
      timestamp: "2 weeks ago",
      status: "accepted",
      avatarColor: "purple",
    },
    {
      id: "19",
      type: "system",
      user: "Security Alert",
      message: "Your password was successfully changed from a new device.",
      timestamp: "3 weeks ago",
      avatarColor: "blue",
    },
    {
      id: "20",
      type: "award",
      user: "Community Helper",
      message: "You've helped 25 developers! Earned 'Mentor' badge.",
      timestamp: "3 weeks ago",
      avatarColor: "purple",
    },
  ]);

  const handleAccept = (id: string) => {
    setNotifications((prev) =>
      prev.map((notif) =>
        notif.id === id ? { ...notif, status: "accepted" as const } : notif,
      ),
    );
  };

  const handleDecline = (id: string) => {
    setNotifications((prev) =>
      prev.map((notif) =>
        notif.id === id ? { ...notif, status: "declined" as const } : notif,
      ),
    );
  };

  const handleDelete = (id: string) => {
    setNotifications((prev) => prev.filter((notif) => notif.id !== id));
    setHoveredNotification(null);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-8">
      <div className="w-3/5 bg-[#ffffff] rounded-lg shadow-sm border border-[#d2d4da]">
        <div className="p-6 pb-4">
          <h2 className="text-[#498cce] text-lg font-medium border-b-2 border-[#498cce] inline-block pb-1 ml-8">
            All notifications ({notifications.length})
          </h2>
        </div>

        <div className="px-6 pb-6 max-h-[55vh] overflow-y-auto">
          <div className="space-y-0">
            {notifications.map((notification, index) => (
              <div
                key={notification.id}
                className={`relative flex items-start gap-3 py-4 transition-colors duration-200 ${
                  hoveredNotification === notification.id
                    ? "bg-[#f8f9fb]"
                    : "hover:bg-[#f8f9fb]"
                } ${index !== notifications.length - 1 ? "border-b border-[#e5e7eb]" : ""}`}
                onMouseEnter={() => setHoveredNotification(notification.id)}
                onMouseLeave={() => setHoveredNotification(null)}
              >
                <div className="w-8 flex justify-center items-center">
                  {hoveredNotification === notification.id && (
                    <button
                      onClick={() => handleDelete(notification.id)}
                      className="text-[#5B5D6B] p-1.5 rounded transition-colors flex items-center justify-center"
                      title="Delete notification"
                    >
                      <X className="w-6 h-6" />
                    </button>
                  )}
                </div>

                <Avatar className="w-10 h-10 flex-shrink-0">
                  <AvatarFallback
                    className={`${
                      notification.avatarColor === "blue"
                        ? "bg-[#498cce]"
                        : "bg-[#9e31e1]"
                    } text-white text-sm font-medium`}
                  >
                    {notification.user
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>

                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <p className="text-[#404252] text-sm">
                        <span className="font-medium text-[#404040]">
                          {notification.user}
                        </span>{" "}
                        <span className="text-[#9496a1]">
                          {notification.message}
                        </span>
                      </p>
                      <p className="text-[#9496a1] text-xs mt-1">
                        {notification.timestamp}
                      </p>
                    </div>

                    <div className="flex items-center gap-2 flex-shrink-0">
                      {notification.status === "pending" && (
                        <>
                          <Button
                            onClick={() => handleAccept(notification.id)}
                            className="bg-[#498cce] hover:bg-[#498cce]/90 text-white text-sm px-8 py-1 h-8"
                          >
                            Accept
                          </Button>
                          <Button
                            onClick={() => handleDecline(notification.id)}
                            className="bg-white border border-[#498cce] text-[#498cce] hover:bg-[#498cce]/10 text-sm px-8 py-1 h-8"
                          >
                            Decline
                          </Button>
                        </>
                      )}
                      {notification.status === "accepted" && (
                        <div className="flex items-center justify-center gap-1 text-[#1bc459] text-sm font-medium pt-2">
                          <Check className="w-4 h-4" />
                          Accepted
                        </div>
                      )}
                      {notification.status === "declined" && (
                        <div className="flex items-center justify-center gap-1 text-[#ff4759] text-sm font-medium pt-2">
                          <XIcon className="w-4 h-4" />
                          Declined
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
