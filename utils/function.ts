export const getPriorityStyle = (priority: string) => {
  switch (priority) {
    case "Low":
      return "bg-green-100 text-green-700 text-sm";
    case "Medium":
      return "bg-yellow-100 text-yellow-800 text-sm";
    case "High":
      return "bg-red-100 text-red-700 text-sm";
    default:
      return "";
  }
};
