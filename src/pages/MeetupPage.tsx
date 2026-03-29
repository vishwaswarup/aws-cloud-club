export default function MeetupPage() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">AWS Meetup Registration</h1>

      <iframe
        src="https://www.meetup.com/your-group/events/"
        className="w-full h-[600px] rounded-lg"
      />
    </div>
  );
}
