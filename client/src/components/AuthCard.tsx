import { FC, useState, ChangeEvent } from "react";
import { Card, CardContent, CardActions, Typography } from "@mui/material";
import Input from "./Input";
import { validateEmail, validatePassword } from "../utils/validators";
import HaveAccount from "./HaveAccount";
import UserApi from "../api/user-api.ts";

interface IAuthCard {
    onAction: (email: string, password: string) => Promise<void>;
}

const AuthCard: FC<IAuthCard> = ({ onAction }) => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [isCorrect, setIsCorrect] = useState<boolean>(true);

    const onChangeEmail = (
        event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        setEmail(event.target.value);
        if (validateEmail(event.target.value) && validatePassword(password)) {
            setIsCorrect(false);
        } else {
            setIsCorrect(true);
        }
    };

    const onChangePassword = (
        event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        setPassword(event.target.value);
        if (validatePassword(event.target.value) && validateEmail(email)) {
            setIsCorrect(false);
        } else {
            setIsCorrect(true);
        }
    };

    const onSubmit = async () => {
        await onAction(email, password);
    };

    return (
        <Card sx={{ maxWidth: 675, padding: 20, borderRadius: 5 }}>
            <CardContent
                sx={{ display: "flex", flexDirection: "column", gap: "10px" }}
            >
                <Typography
                    textAlign="center"
                    variant="h5"
                    sx={{ fontSize: "calc(16px + 24 * (100vw / 1440))" }}
                >
                    Cloud store
                </Typography>
                <Input
                    value={email}
                    placeholder="Email..."
                    onChange={onChangeEmail}
                    validator={validateEmail}
                />
                <Input
                    value={password}
                    placeholder="Password..."
                    onChange={onChangePassword}
                    validator={validatePassword}
                    password
                />
            </CardContent>
            <CardActions
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "10px",
                }}
            >
                <HaveAccount isCorrect={isCorrect} onSubmit={onSubmit} />
            </CardActions>
        </Card>
    );
};
export default AuthCard;
