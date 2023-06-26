import { FC, useState, ChangeEvent } from "react";
import { OutlinedInput } from "@mui/material";
import CompletedIcon from "./Icons/CompletedIcon";

interface IInput {
    value: string;
    onChange: (
        event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => void;
    validator: (value: string) => boolean;
    placeholder?: string;
    password?: boolean;
}

const Input: FC<IInput> = ({
    value,
    onChange,
    validator,
    placeholder,
    password,
}) => {
    const [touched, setTouched] = useState<boolean>(false);

    const [error, setError] = useState<boolean>(false);

    const onChangeHandler = (
        event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        setError(!validator(event.target.value));
        onChange(event);
    };

    const onFocus = () => {
        setTouched(true);
        setError(!validator(value));
    };

    return (
        <OutlinedInput
            sx={{ minWidth: 300 }}
            value={value}
            type={password ? "password" : "text"}
            onChange={(
                event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
            ) => onChangeHandler(event)}
            placeholder={placeholder || ""}
            color={"primary"}
            error={error}
            required
            onFocus={onFocus}
            endAdornment={!error && touched && <CompletedIcon />}
            hidden={true}
        />
    );
};

export default Input;
