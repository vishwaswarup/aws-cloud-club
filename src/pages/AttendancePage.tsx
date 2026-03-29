export default function AttendancePage() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Mark Attendance</h1>

      <iframe
        src="https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform?embedded=true"
        className="w-full h-[600px] rounded-lg"
      />
    </div>
  );
}
