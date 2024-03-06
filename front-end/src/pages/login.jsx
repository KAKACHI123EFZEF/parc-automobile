import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

export default function Login() {
    return (
        <div>
            <Card>
                <CardHeader>
                    <CardTitle><h1 id="title">Se Connecter</h1></CardTitle>
                </CardHeader>
                <CardContent>
                    <label id="email"> Email :</label>
                    <input type="text" className="form-control" id="inp1" />
                    <label id="pass"> Mot de passe :</label>
                    <input type="password" className="form-control" id="inp2" />
                    <button type="submit" id="btn">Se connecter</button>
                </CardContent>
            </Card>
        </div>
    );
}
