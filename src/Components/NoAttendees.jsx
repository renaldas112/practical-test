import useTheme from "../Hooks/ThemeContext";

export function NoAttendees() {
const { theme } = useTheme();

  return (
    <div id={theme} className="no-attendee d-flex align-items-center justify-content-center">
      <div className="text-center">No Attendees...</div>
    </div>
  );
}
