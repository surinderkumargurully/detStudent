import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useProfileStore } from "../store/profileStore";

const wrapperStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
};

function Login() {
  const navigate = useNavigate();
  const fetchProfile = useProfileStore((state) => state.fetchProfile);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch(
        // "https://999873c608e2.ngrok-free.app/gurully/public/v4/api/student-login",
        "https://app.8bands.com/v4/api/student-login",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password, is_web: true }),
        }
      );

      const data = await res.json();
      console.log("LOGIN RESPONSE:", data);

      if (!res.ok || !data?.data?.access_token) {
        setError(data.message || "Login failed");
        return;
      }

      const token = data.data.access_token;

      // ✅ Save token
      localStorage.setItem("token", token);

      // ✅ Fetch profile immediately after login
      await fetchProfile(token);

      // ✅ Navigate after everything is ready
      navigate("/dashboard", { replace: true });

    } catch (err) {
      setError("Server error. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-form" style={wrapperStyle}>
      <Form onSubmit={handleSubmit} style={{ width: "320px" }}>
        <h4 className="mb-3 text-center">Student Login</h4>

        {error && <p className="text-danger">{error}</p>}

        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </Form.Group>

        <Button type="submit" className="w-100" disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </Button>
      </Form>
    </div>
  );
}

export default Login;
