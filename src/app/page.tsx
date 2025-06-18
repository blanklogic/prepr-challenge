export default function Component() {
  const notifications = [
    {
      id: "1",
      user: "Sarah Chen",
      message: "wants to connect with you.",
      timestamp: "15min ago",
    },
    {
      id: "2",
      user: "Alex Rodriguez",
      message: "invited you to collaborate on a project.",
      timestamp: "1h ago",
    },
    {
      id: "3",
      user: "Mike Johnson",
      message: "sent you a friend request.",
      timestamp: "2h ago",
    },
    {
      id: "4",
      user: "Emma Wilson",
      message: "wants you to review a project.",
      timestamp: "2 days ago",
    },
  ];

  return (
    <div className="max-w-md mx-auto mt-8 bg-white border rounded p-4">
      <h2 className="text-lg font-bold mb-4">Notifications</h2>
      <div className="space-y-3">
        {notifications.map((notification) => (
          <div key={notification.id} className="border-b pb-3">
            <p className="text-sm">
              <span className="font-medium">{notification.user}</span>{" "}
              {notification.message}
            </p>
            <p className="text-xs text-gray-500 mt-1">{notification.timestamp}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
