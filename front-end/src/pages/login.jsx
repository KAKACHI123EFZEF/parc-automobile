import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";

export default function Login() {
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [errors, setErrors] = useState({ email: "", pass: "" });

    const error = () => {
        let newErrors = { email: "", pass: "" };

        if (email === "") {
            newErrors.email = "S'il vous plaît entrez votre email";
        }

        if (pass === "") {
            newErrors.pass = "S'il vous plaît entrez votre mot de passe";
        }

        setErrors(newErrors);

        // Check if there are no errors
        return Object.values(newErrors).every((error) => error === "");
    };

    const handleLogin = () => {
        // Simulate a login request (replace with actual login logic)
        if (error()) {
            // Call your authentication API or perform other login-related actions
            // For now, just log the user's email to the console
            console.log("Login successful for email:", email);
        }
    };

    return (
        <div>
            <Card>
                <CardHeader>
                    <CardTitle>
                        <h1 id="title">Se Connecter</h1>
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <label id="email"> Email :</label>
                    <input
                        type="text"
                        className={`form-control ${errors.email && "error"}`}
                        id="inp1"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <span
                        style={{
                            fontWeight: "400",
                            fontSize: "13px",
                            fontStyle: "normal",
                            color: "red",
                        }}
                    >
                        {errors.email}
                    </span>{" "}
                    <br />
                    <label id="pass"> Mot de passe :</label>
                    <input
                        type="password"
                        className={`form-control ${errors.pass && "error"}`}
                        id="inp2"
                        onChange={(e) => setPass(e.target.value)}
                    />
                    <span
                        style={{
                            fontWeight: "400",
                            fontSize: "13px",
                            fontStyle: "normal",
                            color: "red",
                        }}
                    >
                        {errors.pass}
                    </span>
                    {Object.values(errors).every((error) => error === "") && (
                        <button type="submit" id="btn" onClick={handleLogin}>
                            Se connecter
                        </button>
                    )}
                </CardContent>
            </Card>
        </div>
    );
}
