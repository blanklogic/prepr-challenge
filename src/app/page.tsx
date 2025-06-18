"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { X, Check, XIcon } from "lucide-react";

interface Notification {
  id: string;
  type: string;
  user: string;
  message: string;
  timestamp: string;
  status?: "pending" | "accepted" | "declined";
  avatarColor: "blue" | "purple";
}

export default function Component() {
  const [hoveredNotification, setHoveredNotification] = useState<string | null>(null);
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
      message: "commented on your project: 'Great work on the user interface design!'",
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
  ]);

  const handleAccept = (id: string) => {
    setNotifications((prev) =>
      prev.map((notif) => (notif.id === id ? { ...notif, status: "accepted" as const } : notif))
    );
  };

  const handleDecline = (id: string) => {
    setNotifications((prev) =>
      prev.map((notif) => (notif.id === id ? { ...notif, status: "declined" as const } : notif))
    );
  };

  const handleDelete = (id: string) => {
    setNotifications((prev) => prev.filter((notif) => notif.id !== id));
    setHoveredNotification(null);
  };

  return (
    <div className="w-full max-w-4xl mx-auto bg-white rounded-lg shadow-sm border border-gray-300">
      <div className="p-6 pb-4">
        <h2 className="text-blue-600 text-lg font-medium border-b-2 border-blue-600 inline-block pb-1">
          All notifications ({notifications.length})
        </h2>
      </div>

      <div className="px-6 pb-6 max-h-96 overflow-y-auto">
        <div className="space-y-0">
          {notifications.map((notification, index) => (
            <div
              key={notification.id}
              className={`relative flex items-start gap-3 py-4 transition-colors duration-200 ${
                hoveredNotification === notification.id ? "bg-gray-50" : "hover:bg-gray-50"
              } ${index !== notifications.length - 1 ? "border-b border-gray-200" : ""}`}
              onMouseEnter={() => setHoveredNotification(notification.id)}
              onMouseLeave={() => setHoveredNotification(null)}
            >
              {/* Delete button */}
              <div className="w-6 flex justify-center">
                {hoveredNotification === notification.id && (
                  <button
                    onClick={() => handleDelete(notification.id)}
                    className="text-red-500 hover:text-red-600 p-1 rounded transition-colors"
                    title="Delete notification"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>

              <Avatar className="w-10 h-10 flex-shrink-0">
                <AvatarFallback
                  className={`${
                    notification.avatarColor === "blue" ? "bg-blue-600" : "bg-purple-600"
                  } text-white text-sm font-medium`}
                >
                  {notification.user.split(" ").map((n) => n[0]).join("")}
                </AvatarFallback>
              </Avatar>

              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <p className="text-gray-700 text-sm">
                      <span className="font-medium text-gray-900">{notification.user}</span>{" "}
                      <span className="text-gray-600">{notification.message}</span>
                    </p>
                    <p className="text-gray-500 text-xs mt-1">{notification.timestamp}</p>
                  </div>

                  <div className="flex items-center gap-2 flex-shrink-0">
                    {notification.status === "pending" && (
                      <>
                        <Button
                          onClick={() => handleAccept(notification.id)}
                          className="bg-blue-600 hover:bg-blue-700 text-white text-xs px-4 py-1 h-8"
                        >
                          Accept
                        </Button>
                        <Button
                          onClick={() => handleDecline(notification.id)}
                          variant="outline"
                          className="border-gray-300 text-gray-600 hover:bg-gray-50 text-xs px-4 py-1 h-8"
                        >
                          Decline
                        </Button>
                      </>
                    )}
                    {notification.status === "accepted" && (
                      <div className="flex items-center gap-1 text-green-600 text-xs font-medium">
                        <Check className="w-3 h-3" />
                        Accepted
                      </div>
                    )}
                    {notification.status === "declined" && (
                      <div className="flex items-center gap-1 text-red-600 text-xs font-medium">
                        <XIcon className="w-3 h-3" />
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
  );
}
