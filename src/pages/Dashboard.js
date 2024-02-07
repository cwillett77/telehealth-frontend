import DoctorAvailability from "../components/DoctorAvailability";
import { useAuth } from "../context/AuthContext";

const Dashboard = () => {
  const { user } = useAuth();

  return (
    <div className="container">
      <main>
        <section className="my-5">
          <h1>Dashboard</h1>
          {/* Conditional rendering based on user type */}
          {user && user.user_type === "doctor" && (
            <>
              <DoctorAvailability />
              {/* Insert more doctor-specific components here */}
            </>
          )}

          {user && user.user_type === "patient" && (
            <>
              {/* Patient-specific content or components */}
              <p>
                Here you can view your upcoming appointments, medical records,
                and more.
              </p>
              {/* Insert more patient-specific components here */}
            </>
          )}

          {user && (
            <>{/* Common dashboard elements for all users can go here */}</>
          )}
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
