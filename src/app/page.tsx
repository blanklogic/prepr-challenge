export default function Component() {
  const notifications = [
    {
      id: "1",
      user: "Achievement System",
      message: "You earned the 'Early Bird' badge!",
      timestamp: "2min ago",
      type: "award",
    },
    {
      id: "2",
      user: "Sarah Chen",
      message: "wants to connect with you.",
      timestamp: "15min ago",
      type: "friend_request",
    },
    {
      id: "3",
      user: "Alex Rodriguez",
      message: "invited you to collaborate on 'Mobile App Redesign' project.",
      timestamp: "1h ago",
      type: "project_invite",
    },
    {
      id: "4",
      user: "Mike Johnson",
      message: "sent you a friend request.",
      timestamp: "2h ago",
      type: "friend_request",
    },
    {
      id: "5",
      user: "TechCorp HR",
      message: "invited you to join TechCorp as a Senior Developer.",
      timestamp: "3h ago",
      type: "organization_invite",
    },
    {
      id: "6",
      user: "David Kim",
      message: "commented on your project: 'Great work!'",
      timestamp: "3 days ago",
      type: "comment",
    },
  ];

  return (
    <div className="max-w-2xl mx-auto mt-8 bg-white rounded-lg shadow border border-gray-200">
      <div className="p-4 border-b">
        <h2 className="text-blue-600 text-lg font-medium">
          All notifications ({notifications.length})
        </h2>
      </div>
      
      <div className="p-4">
        <div className="space-y-4">
          {notifications.map((notification, index) => (
            <div
              key={notification.id}
              className={`flex items-start gap-3 py-3 ${
                index !== notifications.length - 1 ? "border-b border-gray-100" : ""
              }`}
            >
              {/* Simple Avatar */}
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-medium">
                {notification.user.split(" ").map((n) => n[0]).join("")}
              </div>
              
              {/* Content */}
              <div className="flex-1">
                <p className="text-sm text-gray-700">
                  <span className="font-medium text-gray-900">{notification.user}</span>{" "}
                  <span className="text-gray-600">{notification.message}</span>
                </p>
                <p className="text-xs text-gray-500 mt-1">{notification.timestamp}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
