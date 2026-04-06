export default function PlacementCard({ placement }) {
  const initials = placement.name.charAt(0);
  return (
    <div className="card placement-card">
      <div className="placement-header">
        <div className="placement-avatar">{initials}</div>
        <div>
          <h4 className="placement-name">{placement.name}</h4>
          <p className="placement-role">{placement.role}</p>
        </div>
      </div>
      <div className="placement-body">
        <p className="placement-company">{placement.company}</p>
        <p className="placement-course">{placement.course}</p>
      </div>
    </div>
  );
}
