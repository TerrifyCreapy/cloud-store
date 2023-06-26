import { FC, useState } from "react";
import { Typography, Button } from "@mui/material";
import { useSearchParams } from "react-router-dom";

interface IHaveAccount {
    isCorrect: boolean;
    onSubmit: () => void;
}

const HaveAccount: FC<IHaveAccount> = ({ isCorrect, onSubmit }) => {
    const [params, setParams] = useSearchParams();
    const [signUp, setSignUp] = useState<boolean>(
        params.get("register") ? true : false,
    );
    const onChangeAuth = () => {
        if (signUp) {
            setParams({});
        } else {
            setParams({ register: "true" });
        }
        setSignUp((value) => !value);
    };
    return (
        <>
            <Button
                disabled={false}
                sx={{ alignSelf: "flex-end", marginRight: 2 }}
                onClick={onSubmit}
            >
                {signUp ? "Signin" : "Signup"}
            </Button>
            <div>
                <Typography component="span" sx={{ textAlign: "center" }}>
                    {signUp ? "Don't" : "Already"} have an account?{" "}
                </Typography>
                <Button onClick={onChangeAuth}>
                    {signUp ? "Signup" : "Signin"}
                </Button>
            </div>
        </>
    );
};
export default HaveAccount;
